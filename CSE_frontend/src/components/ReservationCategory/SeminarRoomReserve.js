import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import StandardCalendar from './Calendar';
export default class SeminarRoomReserve extends Component {
    
    render() {
    return (
            <div>
              <StandardCalendar />
            </div>
        )
    }
}

