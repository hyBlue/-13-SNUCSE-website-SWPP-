import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilityServerroom extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>서버실</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    컴퓨터공학부의 실습 서버, 통합계정 서버, 프린터 서버 등 각종 서버 및 워크스테이션을 관리하는 곳이다. 학부 서버는 학생 동아리인 <Link to={`/about/student-club/바쿠스`}>바쿠스</Link>에서 관리하고 있다.<br /><br />
                    위치: 302동 310-2호
                </div>
            </div>
        )
    }
}

export default AboutFacilityServerroom;
