import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutFacilitySlab extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>S-Lab</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    S-Lab은 학생들이 학습, 개발, 토론 등 다양한 목적으로 사용할 수 있는 공간이다. 안쪽에는 중앙의 공간과 분리된 4개의 회의실이 있다. 고성능 PC와 Mac, 스마트 TV, 빔 프로젝터 등의 장비와 회의실을 갖추고 있으며, 갤럭시 탭, MacBook Pro 등의 장비를 대여할 수 있다.<br /><br />
                    위치: 301동 315호<br />
                    운영 시간: 오전 9시 – 오후 6시
                </div>
            </div>
        )
    }
}

export default AboutFacilitySlab;
