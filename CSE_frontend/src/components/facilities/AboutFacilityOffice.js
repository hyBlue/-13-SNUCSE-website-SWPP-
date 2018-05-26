import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilityOffice extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>학부 행정실</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    301동과 302동 두 곳에 있는 컴퓨터공학부 행정실에서는 학부생, 대학원생, 교수를 위한 다양한 행정 업무를 돕고 있다. 각 업무별 담당자는 <Link to={`/people/staff`}>행정실 직원 목록</Link>을 참조.<br /><br />
                    위치: 301동 316호, 302동 317-2호
                </div>
            </div>
        )
    }
}

export default AboutFacilityOffice;
