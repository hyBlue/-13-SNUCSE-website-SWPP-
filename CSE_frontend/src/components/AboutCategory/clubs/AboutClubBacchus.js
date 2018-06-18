import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubBacchus extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>바쿠스</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    바쿠스는 서울대학교 컴퓨터공학부의 시스템 관리자 모임이다. 바쿠스는 실습실 및 PC, 서버관리를 비롯해 다양한 서비스를 컴퓨터공학부 구성원에게 제공하는 일을 하고 있으며 이와 같은 일을 전문적이고 체계적으로 하기 위한 시스템 및 소프트웨어 연구 동아리이다. 하나의 계정으로 실습실 PC 사용, 리눅스 서버 사용, 학부 커뮤니티 사이트 이용을 가능케 하는 통합 계정 서비스를 제공하고 있으며, 컴퓨터공학부 커뮤니티 사이트를 개발, 관리 및 유지 보수하는 일도 담당하고 있다. <br /><br />
                    <font size="4" color="#6a7eff">
                        신입회원 모집 시기
                    </font>
                    <hr></hr>
                    3월 말과 9월 말에 1학년 2학기 이상의 학부생을 모집한다.
                </div>
            </div>
        )
    }
}

export default AboutClubBacchus;
