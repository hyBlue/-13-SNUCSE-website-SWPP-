import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import StandardCalendar from './Calendar';
import { DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
moment.locale('ko-kr');
const { WeekPicker } = DatePicker;

//무슨 세미나실을 선택했는지 넘어오면, 
//넘어온 시간표데이터 중 그 세미나실 데이터만 넘기기

//여기서는 또한 몇 주차를 고를 수 있음
//선택된 주차에 맞게 데이터를 넘겨주기

export default class RoomReserve extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment().startOf('isoWeek')
        }
    }
    onChange(date, dateString) { 
        if(date!==null) { this.setState({date: moment(date).startOf('isoWeek')}) }
        else { this.setState({date: moment().startOf('isoWeek')}) }
    }
    render() {
        return (
            <div className='reservationCategory'>
                <h2 className="pageTitle">{this.props.reserveRoomKey} 예약현황</h2>
                <WeekPicker className="weekPicker" size="large" locale={locale} onChange={this.onChange.bind(this)} placeholder="연도-n번째 주" />
                <StandardCalendar date={this.state.date} subCategory={this.props.subCategory} reserveRoomKey={this.props.reserveRoomKey} />
            </div>
        )
    }
}


