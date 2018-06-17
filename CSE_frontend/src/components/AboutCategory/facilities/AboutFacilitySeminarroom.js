import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilitySeminarroom extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>세미나실</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    세미나실은 301동과 302동에 있다. 컴퓨터공학부 대학원생들이 온라인예약하여 사용할 수 있다.<br /><br />
                    위치: 301동 417호, 301동 554호, 302동 308호, 302동 309호, 302동 309-1호, 302동 316-3호
                </div>
            </div>
        )
    }
}

export default AboutFacilitySeminarroom;
