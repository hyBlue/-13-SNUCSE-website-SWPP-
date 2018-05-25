import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubUpnl extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>유피넬</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    유피넬은 컴퓨터 소프트웨어 개발을 목표로 하며 프로젝트를 진행하는 회원들을 위해 다양한 지원 활동을 하고 있다. 자체적인 리눅스 서버와 윈도우 클라이언트를 보유하고 있으며, 이를 통해 SourceForge (소스 코드 공개 사이트)를 운영하고 있다. 서울대학교 컴퓨터전시회 (SNU CSE Computer Exhibition)에 개발작을 출품하고 있으며, 2007년에 출품한 MBC (Message Broadcast Center)는 최우수상을, 필사쟁이는 우수상을 수상한 바 있다. 교외 행사 출품작 중 하나인 베리즈 웹셰어는 2005년 창의적 종합설계 경진대회에서 금상을 수상한 바 있고, 2008년 구글 게임즈에서 1등을 차지하였다.<br /><br />
                        <font size="4" color="#6a7eff">
                            신입회원 모집 시기
                        </font>
                        <hr></hr>
                        3월에 신입회원을 모집하여 OT를 실시하며, 선발된 신입회원들에게 Python 및 개발개론 스터디를 한다.<br /><br />
                        <font size="4" color="#6a7eff">
                            최근 동아리 활동 현황
                        </font>
                        <hr></hr>
                        2014년 현재 7가지 프로젝트(2D 생태계, Arena of Heroes, GitDuck, Sturdy Metal, UPnL 홈페이지, 시나리오, 출애굽기런)를 진행하고 있으며, 넥슨 동아리 지원 사업을 통해 지원을 받고 있다.
                </div>
            </div>
        )
    }
}

export default AboutClubUpnl;
