import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import AboutClubGuardian from './clubs/AboutClubGuardian';
import AboutClubBacchus from './clubs/AboutClubBacchus';
import AboutClubSnups from './clubs/AboutClubSnups';
import AboutClubSoccer301 from './clubs/AboutClubSoccer301';
import AboutClubStein from './clubs/AboutClubStein';
import AboutClubUpnl from './clubs/AboutClubUpnl';
import AboutClubWaffle from './clubs/AboutClubWaffle';

class AboutClubs extends Component {
    constructor() {
        super();
        this.state = {
            showingClubs: {},
            loading: true
        }
    }    

    select(id) {
        this.setState({
            showingClubs: { ...this.state.showingClubs, [id]: id}
        })
    }    
        
    render() {
        return (
            <div>
                <h2 className="pageTitle">동아리 소개</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(1)}>
                            가디언
                        </font>
                        <br /><br />정보 통신 분야의 핵심 키워드인 보안에 대해 많은 연구와 끊임없는 도전을 하고자 하는 사람들이 모여있는 곳이다. 매주 동아리 구성원들 사이의 지식 공유와 개개인의 실력 향상을 위한 장을 마련하고 있으며, 방학 중에는 컴퓨터 보안에 대한 학습과 함께 개발 프로젝트를 진행한다.
                    </Row>
                    {this.state.showingClubs[1] && <AboutClubGuardian />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(2)}>
                            바쿠스
                        </font>
                        <br /><br /><a href={`https://bacchus.snucse.org/`}>바쿠스</a>는 서울대학교 컴퓨터공학부의 시스템 관리자 모임이다. 바쿠스는 실습실 및 PC, 서버관리를 비롯해 다양한 서비스를 컴퓨터공학부 구성원에게 제공하는 일을 하고 있으며 이와 같은 일을 전문적이고 체계적으로 하기 위한 시스템 및 소프트웨어 연구 동아리이다.
                    </Row>
                    {this.state.showingClubs[2] && <AboutClubBacchus />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(3)}>
                            사커301
                        </font>
                        <br /><br />2008년 결성된 학부 내 축구를 좋아하고 즐기는 학생들로 구성된 축구 동아리이다. 축구를 통한 체력 향상 및 친목 도모를 목표로 한다. 매주 주말 모여 훈련 및 친선경기를 하고 있으며 서울대 학내에서 열리는 총장배 구기대회, 공대 학장배 축구대회, 공대축제 축구대회 등 여러 대회에 꾸준히 참가해 좋은 성적을 내고 있다.
                    </Row>
                    {this.state.showingClubs[3] && <AboutClubSoccer301 />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(4)}>
                            슈타인
                        </font>
                        <br /><br />슈타인은 2012년 결성된 학부 내 경음악에 흥미와 소질이 있는 학생들로 구성된 밴드 동아리이다. 매년 신입 회원을 영입하여 기 단위로 운영되는 슈타인은 연중 수시로 합주를 하며 친목을 다지는 것을 목표로 한다. 주요 활동으로는 정기 공연 및 타 학교의 밴드들과의 교류 등이 있다.
                    </Row>
                    {this.state.showingClubs[4] && <AboutClubStein />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(5)}>
                            스눕스
                        </font>
                        <br /><br />스눕스(SNUPS)는 ACM-ICPC (International Collegiate Programming Contest)를 비롯한 대학생 프로그래밍 경시대회를 준비하며 컴퓨터공학의 한 분야인 문제해결 및 알고리즘을 공부하고 연구하는 학회 성격의 동아리이다. 1년에 한두 차례 모의 대회 등을 열기도 하며, 온라인 및 오프라인 활동을 통해 꾸준히 공부하고 있다. 전 세계 6,000여 개의 참가팀들 중에서 100개 팀만 진출하는 ACM-ICPC world final에 매년 진출하여 세계 10위~20위권 성적을 꾸준히 기록하여 서울대학교의 명예를 높이고 있다. 
                    </Row>
                    {this.state.showingClubs[5] && <AboutClubSnups />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(6)}>
                            와플스튜디오
                        </font>
                        <br /><br /><a href={'http://www.wafflestudio.kr/'}>와플스튜디오</a>는 실제 웹 및 앱 서비스를 직접 개발하고 운영해 봄으로써 기술 습득 및 서비스 기획 마인드를 함양하고자 만들어졌다. 일반인을 대상으로 하는 유용하고 실험적이며 재미있는 서비스들을 제작하여 배포하는 것이 주된 목표이다. 현재 본교 학생들을 대상으로 온라인 시간표 서비스(SNUTT.kr) 및 서울대학교 식단앱 식샤를 제공하고 있다. 
                    </Row>
                    {this.state.showingClubs[6] && <AboutClubWaffle />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(7)}>
                            유피넬
                        </font>
                        <br /><br /><a href={'http://wiki.upnl.org/introduce/start'}>유피넬은</a> 컴퓨터 소프트웨어 개발을 목표로 하며 프로젝트를 진행하는 회원들을 위해 다양한 지원 활동을 하고 있다. 자체적인 리눅스 서버와 윈도우 클라이언트를 보유하고 있으며, 이를 통해 SourceForge (소스 코드 공개 사이트)를 운영하고 있다. 서울대학교 컴퓨터전시회 (SNU CSE Computer Exhibition)에 개발작을 출품하고 있으며, 2007년에 출품한 MBC (Message Broadcast Center)는 최우수상을, 필사쟁이는 우수상을 수상한 바 있다. 
                    </Row>
                    {this.state.showingClubs[7] && <AboutClubUpnl />}
                </div>

            </div>
        )
    }
}

export default AboutClubs;
