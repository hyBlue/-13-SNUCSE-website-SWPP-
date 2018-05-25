import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubSoccer301 extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>사커301</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    2008년 결성된 학부 내 축구를 좋아하고 즐기는 학생들로 구성된 축구 동아리이다. 축구를 통한 체력 향상 및 친목 도모를 목표로 한다. 매주 주말 모여 훈련 및 친선경기를 하고 있으며 서울대 학내에서 열리는 총장배 구기대회, 공대 학장배 축구대회, 공대축제 축구대회 등 여러 대회에 꾸준히 참가해 좋은 성적을 내고 있다.<br /><br />
                    <font size="4" color="#6a7eff">
                        신입회원 모집 시기
                    </font>
                    <hr></hr>
                    상시 모집<br /><br />
                    <font size="4" color="#6a7eff">
                        대회 성적
                    </font>
                    <hr></hr>
                    2009년 공대 학장배 3위<br />
                    2013년 공대 축제 3위<br />
                    2014년 공대 학장배 1위<br />
                    2014년 공대 축제 1위
                </div>
            </div>
        )
    }
}

export default AboutClubSoccer301;
