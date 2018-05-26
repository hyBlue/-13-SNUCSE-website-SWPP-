import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubGuardian extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>가디언</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    정보 통신 분야의 핵심 키워드인 보안에 대해 많은 연구와 끊임없는 도전을 하고자 하는 사람들이 모여있는 곳이다. 매주 동아리 구성원들 사이의 지식 공유와 개개인의 실력 향상을 위한 장을 마련하고 있으며, 방학 중에는 컴퓨터 보안에 대한 학습과 함께 개발 프로젝트를 진행한다.<br /><br />
                        <font size="4" color="#6a7eff">
                            신입회원 모집 시기
                        </font>
                        <hr></hr>
                        매년 3월 초중순 모집 공고를 내고, 3월 안으로 간단한 서류 심사를 거쳐 신입 회원을 선발한다. 이렇게 선발된 회원들은 준회원이며, 8~9월에 있을 선발 시험을 통과하면 정회원이 될 수 있다.<br /><br />
                        <font size="4" color="#6a7eff">
                            최근 동아리 활동 현황
                        </font>
                        <hr></hr>
                        가디언은 전 세계의 내로라하는 해킹/보안 팀이 참가하는 해킹/보안 대회에서 꾸준히 좋은 성적을 내고 있다. 특히 2013년에는 전년보다 대회 참여 인원이 대폭 늘어 4월에 열린 PlaidCTF에서는 17위, 6월 예선과 8월 본선이 열린 DEFCON CTF에서는 보안 팀 Alternatives와 연합 참가하여 각각 17위(본선 진출), 8위를 차지했다. 이 밖에도 CodeGate, SECUINSIDE CTF, Ghost In The Shellcode 등 다양한 대회에 출전하여 실력을 쌓고 있다.
                </div>
            </div>
        )
    }
}

export default AboutClubGuardian;
