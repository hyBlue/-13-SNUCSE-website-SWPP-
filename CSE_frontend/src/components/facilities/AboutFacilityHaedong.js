import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilityHaedong extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>해동학술정보실</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    해동학술정보실은 전기공학부와 컴퓨터공학부 학생들을 위한 도서관이다. 정기 간행물 및 논문을 열람하거나 대여할 수 있다. 조용한 환경에서 공부할 수 있는 230석 규모의 열람실이 딸려 있다.<br /><br />
                    위치: 301동 312호
                </div>
            </div>
        )
    }
}

export default AboutFacilityHaedong;
