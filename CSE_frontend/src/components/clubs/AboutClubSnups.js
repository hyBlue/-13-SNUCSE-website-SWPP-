import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubSnups extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>스눕스</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    스눕스(SNUPS)는 ACM-ICPC (International Collegiate Programming Contest)를 비롯한 대학생 프로그래밍 경시대회를 준비하며 컴퓨터공학의 한 분야인 문제해결 및 알고리즘을 공부하고 연구하는 학회 성격의 동아리이다. 1년에 한두 차례 모의 대회 등을 열기도 하며, 온라인 및 오프라인 활동을 통해 꾸준히 공부하고 있다. 전 세계 6,000여 개의 참가팀들 중에서 100개 팀만 진출하는 ACM-ICPC world final에 매년 진출하여 세계 10위~20위권 성적을 꾸준히 기록하여 서울대학교의 명예를 높이고 있다. <br /><br />
                    <font size="4" color="#6a7eff">
                        신입회원 모집 시기
                    </font>
                    <hr></hr>
                    주로 3월 달에 신입생을 모집하며, 스눕스 구성원과의 개별 연락을 통해 상시 가입도 가능하다.<br /><br />
                    <font size="4" color="#6a7eff">
                        최근 동아리 활동 현황
                    </font>
                    <hr></hr>
                    ipsc, icpc, 전국 대학생 프로그래밍동아리 연합 대회 등에 3인팀을 꾸려 출전하고 있으며, google code jam, facebook hacker cup나 기타 PS 대회에 스눕스 소속으로 개인출전하고 있다. 팀을 꾸릴 때는 SNUTOC(SNU Team Organization Contest) 등의 내부대회를 통해 실력과 분야에 맞는 팀원을 구성하여 출전하고 있다.<br />
                    <font size="5">&middot;</font>&nbsp;2014년 한국 대학생 프로그래밍 경시대회 대상<br />
                    <font size="5">&middot;</font>&nbsp;2013년 한국 대학생 프로그래밍 경시대회 금상<br />
                    <font size="5">&middot;</font>&nbsp;2013년 ACM-ICPC Danang Asia Regional Contest Second Prize<br />
                    <font size="5">&middot;</font>&nbsp;2012년 한국 대학생 프로그래밍 경시대회 금상<br />
                    <font size="5">&middot;</font>&nbsp;2011년 한국 대학생 프로그래밍 경시대회 대상<br />
                    <font size="5">&middot;</font>&nbsp;2010년 한국 대학생 프로그래밍 경시대회 금상
                </div>
            </div>
        )
    }
}

export default AboutClubSnups;
