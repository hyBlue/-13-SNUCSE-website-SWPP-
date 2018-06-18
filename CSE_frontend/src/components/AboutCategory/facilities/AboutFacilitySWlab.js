import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilitySWlab extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>소프트웨어 실험실</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    듀얼 모니터, Intel Core i7 PC, 프린터 등을 갖추고 있으며 소프트웨어와 관련된 실습 수업 시에 사용된다. 수업 시간이 아닌 경우에는 컴퓨터공학부 학생이라면 누구나 자유롭게 사용할 수 있다. 과거에는 "NT실"이라고 불리기도 했다.<br /><br />
                    위치: 301동 314호, 302동 311-1호
                </div>
            </div>
        )
    }
}

export default AboutFacilitySWlab;
