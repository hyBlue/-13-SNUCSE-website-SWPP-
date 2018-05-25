import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubWaffle extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>와플스튜디오</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    와플스튜디오는 실제 웹 및 앱 서비스를 직접 개발하고 운영해 봄으로써 기술 습득 및 서비스 기획 마인드를 함양하고자 만들어졌다. 일반인을 대상으로 하는 유용하고 실험적이며 재미있는 서비스들을 제작하여 배포하는 것이 주된 목표이다. 현재 본교 학생들을 대상으로 온라인 시간표 서비스(SNUTT.kr) 및 서울대학교 식단앱 식샤를 제공하고 있다.<br /><br />
                    <font size="4" color="#6a7eff">
                        신입회원 모집 시기
                    </font>
                    <hr></hr>
                    매년 1회 신입회원을 모집하고 있다. 보통 12월 중순에 지원서를 접수하고 12월 말 면접을 통해 신입회원을 선발한다.<br /><br />
                    <font size="4" color="#6a7eff">
                        최근 동아리 활동 현황
                    </font>
                    <hr></hr>
                    <font size="5">&middot;</font>&nbsp;SNUTT<br />
                    2012년에 서비스를 시작한 서울대학교 시간표 작성 서비스 SNUTT가 2015년 현재 개편 작업 중에 있다. 다양한 필터를 이용해 강의를 검색할 수 있도록 검색시스템을 강화하고, 반응 속도와 안전성도 개선할 예정이다. http://snutt.kr<br />
                    <font size="5">&middot;</font>&nbsp;우리 어디서 만나<br />
                    우리 어디서 만나는 최적의 모임 장소를 추천해주는 서비스로 2014년 라인플러스의 지원을 받으며 개발되었다. 지하철 노선도에서 모임에 참여하는 사람들의 위치를 찍으면, 다양한 기준에 맞추어 모임 장소로 적합한 역과 그 주변의 정보를 제공해주는 서비스이다. 현재 iOS버전이 출시 준비 중이며 추후 안드로이드 버전도 개발할 예정이다.<br />
                    <font size="5">&middot;</font>&nbsp;식샤 : 서울대 식당 메뉴 위젯 & 앱<br />
                    2015년 초 기존 식단 어플리케이션들의 문제점을 보완하기 위해 개발되었다. 약 반년의 노력 끝에 만들어진 안드로이드 버전 식샤는 서울대학교 식단 앱 중에 가장 많은 식당을 지원하고 있으며, 타 어플리케이션에는 없는 위젯 기능도 제공하고 있다. iOS 버전은 개발 중에 있으며 2015년 하반기에 출시할 예정이다. 
                    </div>
            </div>
        )
    }
}

export default AboutClubWaffle;
