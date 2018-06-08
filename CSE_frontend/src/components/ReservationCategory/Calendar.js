import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';

export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 4,
      selectedIntervals: [
        {
          uid: 3,
          start: moment({h: 11, m: 0}),
          end: moment({h: 14, m: 0}),
          value: "Reserved by White"
        },
      ]
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
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
    console.log(newIntervals);
    let isFalse = false;
    const intervals = newIntervals.map( (newI, index) => {
        this.state.selectedIntervals.map(oldI => {
            if( (oldI.start._d > newI.start._d && newI.end._d > oldI.start._d) ||
                (oldI.start._d < newI.start._d && newI.start._d < oldI.end._d)
            ) {
                console.log('nope');
                isFalse = true;
                return;
            }
        })
        if(isFalse) {
            alert('해당 시간대에 다른 예약이 있습니다.')
            return;
        };
      return {
        ...newI,
        uid: lastUid + index
      }
    });
    if(isFalse) {
        return;
    }
    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
  }

  render() {
    return <WeekCalendar
      className="weekCalendar"
      startTime = {moment({h: 9, m: 0})}
      endTime = {moment({h: 23, m: 0})}
      scaleUnit ={30}
      scaleHeaderTitle="예약현황"
      cellHeight = {40}
      dayFormat = "dddd MM/DD"
      numberOfDays= {7}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
    />
  }
}