import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import { fetchReservation, createReservation, deleteReservation } from '../../actions';

class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 4,
      selectedIntervals: [
        {
          uid: 3,
          start: moment("2013-02-08 14:00:00.000"),
          end: moment("2013-02-08 18:00:00.000"),
          subCategory: 'seminar',
          roomKey: '301-317',
          value: "Reserved by White"
        },
      ],
    }
    
  }

  componentDidMount() {
    //backend에서 subCategory(세미나실, 랩)과 reserveRoomKey(301-317)
    //에 맞는 interval들을 가져왔을 때 state로 옮기는 작업 필요. last uid 처리 주의
    this.props.fetchReservation(this.props.subCategory, this.props.reserveRoomKey);
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
      //DELETE EVENT from backend
      this.props.deleteReservation(event.uid);
    }
  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    let isFalse = false;
    const intervals = newIntervals.map( (newI, index) => {
        this.state.selectedIntervals.map(oldI => {
            if( (oldI.start._d > newI.start._d && newI.end._d > oldI.start._d) ||
                (oldI.start._d < newI.start._d && newI.start._d < oldI.end._d)
            ) {
                isFalse = true;
                return;
            }
        })
        if(isFalse) {
            alert('해당 시간대에 다른 예약이 있습니다.')
            return;
        }
      return {
        ...newI,
        uid: lastUid + index,
        roomkey: this.props.reserveRoomKey,
        category: this.props.subCategory,
      }
    });
    if(isFalse) {
        return;
    }
    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
    //POST EVENT to backend
    this.props.createReservation(intervals);
  }

  render() {
    return <WeekCalendar
      className="weekCalendar"
      firstDay = {this.props.date}
      startTime = {moment({h: 9, m: 0})}
      endTime = {moment({h: 23, m: 0})}
      scaleUnit ={60}     
      scaleHeaderTitle="예약현황"
      cellHeight = {80}
      dayFormat = "dddd MM/DD"
      numberOfDays= {7}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {value => this.handleSelect(value)}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
    />
  }
}

function mapStateToProps({ reservation }, ownProps) {
  return { selectedIntervals: reservation };
    // selectedIntervals: reservation[ownProps.subCategory] };
}
export default connect(mapStateToProps, { createReservation, fetchReservation, deleteReservation })(StandardCalendar);
