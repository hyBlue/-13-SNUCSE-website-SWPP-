import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import StandardCalendar from './Calendar';

//무슨 세미나실을 선택했는지 넘어오면, 
//넘어온 시간표데이터 중 그 세미나실 데이터만 넘기기

//여기서는 또한 몇 주차를 고를 수 있음
//선택된 주차에 맞게 데이터를 넘겨주기
export default class SeminarRoomReserve extends Component {
    
    render() {
    return (
            <div className='reservationCategory'>
              <StandardCalendar value=""/>
            </div>
        )
    }
}

