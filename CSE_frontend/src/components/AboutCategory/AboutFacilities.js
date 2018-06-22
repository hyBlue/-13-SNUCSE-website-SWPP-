import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import AboutFacilityHWlab from './facilities/AboutFacilityHWlab';
import AboutFacilityHaedong from './facilities/AboutFacilityHaedong';
import AboutFacilityOffice from './facilities/AboutFacilityOffice';
import AboutFacilitySWlab from './facilities/AboutFacilitySWlab';
import AboutFacilitySeminarroom from './facilities/AboutFacilitySeminarroom';
import AboutFacilityServerroom from './facilities/AboutFacilityServerroom';
import AboutFacilitySlab from './facilities/AboutFacilitySlab';
import AboutFacilityStudentroom from './facilities/AboutFacilityStudentroom';

class AboutClubs extends Component {
    constructor() {
        super();
        this.state = {
            showingFacilities: {},
            loading: true
        }
    }    

    select(id) {
        this.setState({
            showingFacilities: { ...this.state.showingFacilities, [id]: id}
        })
    }  

    render() {
        return (
            <div>
                <h2 className="pageTitle">시설 안내</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(1)}>
                            학부 행정실
                        </font>
                        <br /><br />301동과 302동 두 곳에 있는 컴퓨터공학부 행정실에서는 학부생, 대학원생, 교수를 위한 다양한 행정 업무를 돕고 있다. 각 업무별 담당자는 <Link to={`/people/staff`}>행정실 직원 목록</Link>을 참조.
                    </Row>
                    {this.state.showingFacilities[1] && <AboutFacilityOffice />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(2)}>
                           S-Lab
                        </font>
                        <br /><br />S-Lab은 학생들이 학습, 개발, 토론 등 다양한 목적으로 사용할 수 있는 공간이다. 안쪽에는 중앙의 공간과 분리된 4개의 회의실이 있다. 고성능 PC와 Mac, 스마트 TV, 빔 프로젝터 등의 장비와 회의실을 갖추고 있으며, 갤럭시 탭, MacBook Pro 등의 장비를 대여할 수 있다.
                    </Row>
                    {this.state.showingFacilities[2] && <AboutFacilitySlab />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(3)}>
                            소프트웨어 실험실
                        </font>
                        <br /><br />듀얼 모니터, Intel Core i7 PC, 프린터 등을 갖추고 있으며 소프트웨어와 관련된 실습 수업 시에 사용된다. 수업 시간이 아닌 경우에는 컴퓨터공학부 학생이라면 누구나 자유롭게 사용할 수 있다. 과거에는 "NT실"이라고 불리기도 했다.
                    </Row>
                    {this.state.showingFacilities[3] && <AboutFacilitySWlab />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(4)}>
                            하드웨어 실험실
                        </font>
                        <br /><br />하드웨어 관련 실습 수업에 사용된다. 오실로스코프, 직류 전원 공급기, 함수 발생기, 멀티미터, Intel Core i7 PC 등의 장비와 각종 공구를 이용할 수 있다. 논리설계실험이나 전기전자회로실험 등의 수업을 수강하는 학생들은 이곳에서 많은 시간을 보내게 된다.
                    </Row>
                    {this.state.showingFacilities[4] && <AboutFacilityHWlab />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(5)}>
                            해동학술정보실
                        </font>
                        <br /><br /><a href={'http://haedong.snu.ac.kr/'}>해동학술정보실</a>은 전기공학부와 컴퓨터공학부 학생들을 위한 도서관이다. 정기 간행물 및 논문을 열람하거나 대여할 수 있다. 조용한 환경에서 공부할 수 있는 230석 규모의 열람실이 딸려 있다. 
                    </Row>
                    {this.state.showingFacilities[5] && <AboutFacilityHaedong />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(6)}>
                            학생 공간 및 동아리 방
                        </font>
                        <br /><br />과방은 학부생들의 주 생활 공간이다. 끊임없이 나오는 과제를 해치우는데 사용되는 수십 대의 Intel Core i7 PC가 구비되어 있으며, 오랫동안 컴퓨터를 하느라 편할 날이 없는 학생들의 눈·목·손목 등의 휴식을 위한 편의 시설도 마련되어 있다. 학생들이 기증하거나 잠시 빌려준 각종 서적·만화책·보드 게임 등이 있어 공부뿐만 아니라 여가도 즐길 줄 아는 학생들을 위한 환경이 조성되어 있다.
                    </Row>
                    {this.state.showingFacilities[6] && <AboutFacilityStudentroom />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(7)}>
                            세미나실
                        </font>
                        <br /><br />세미나실은 301동과 302동에 있다. 컴퓨터공학부 대학원생들이 온라인예약하여 사용할 수 있다.
                    </Row>
                    {this.state.showingFacilities[7] && <AboutFacilitySeminarroom />}
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff" onClick={() => this.select(8)}>
                            서버실
                        </font>
                        <br /><br />컴퓨터공학부의 실습 서버, 통합계정 서버, 프린터 서버 등 각종 서버 및 워크스테이션을 관리하는 곳이다. 학부 서버는 학생 동아리인 <a href={'https://bacchus.snucse.org/'}>바쿠스</a>에서 관리하고 있다.
                    </Row>
                    {this.state.showingFacilities[8] && <AboutFacilityServerroom />}
                </div>

            </div>
        )
    }
}

export default AboutClubs;
