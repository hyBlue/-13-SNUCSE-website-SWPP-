import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilityHWlab extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>하드웨어 실험실</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    하드웨어 관련 실습 수업에 사용된다. 오실로스코프, 직류 전원 공급기, 함수 발생기, 멀티미터, Intel Core i7 PC 등의 장비와 각종 공구를 이용할 수 있다. 논리설계실험이나 전기전자회로실험 등의 수업을 수강하는 학생들은 이곳에서 많은 시간을 보내게 된다.<br /><br />
                    위치: 302동 310-2호
                </div>
            </div>
        )
    }
}

export default AboutFacilityHWlab;
