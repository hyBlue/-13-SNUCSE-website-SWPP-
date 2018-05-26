import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutClubStein extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>슈타인</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    슈타인은 2012년 결성된 학부 내 경음악에 흥미와 소질이 있는 학생들로 구성된 밴드 동아리이다. 매년 신입 회원을 영입하여 기 단위로 운영되는 슈타인은 연중 수시로 합주를 하며 친목을 다지는 것을 목표로 한다. 주요 활동으로는 정기 공연 및 타 학교의 밴드들과의 교류 등이 있다.<br /><br />
                    <font size="4" color="#6a7eff">
                        신입회원 모집 시기
                    </font>
                    <hr></hr>
                    매년 3월 중순경 가입신청을 받은 후, 오디션을 통해 선발한다.<br /><br />
                    <font size="4" color="#6a7eff">
                        대회 성적
                    </font>
                    <hr></hr>
                    <font size="5">&middot;</font>&nbsp;2013.07.04. 여름 정기 공연<br />
                    <font size="5">&middot;</font>&nbsp;2013.11.07. 컴공인의 밤 공연<br />
                    <font size="5">&middot;</font>&nbsp;2013.12.22. 겨울 정기 공연<br />
                    <font size="5">&middot;</font>&nbsp;2014.02.19. 공과대학 새내기 배움터 공연
                </div>
            </div>
        )
    }
}

export default AboutClubStein;
