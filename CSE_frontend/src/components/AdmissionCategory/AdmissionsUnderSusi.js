import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AdmissionsUnderSusi extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">수시 모집</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            모집 시기
                        </font>
                        <br /><br />8~9월경 지원서 접수가 시작됩니다. 자세한 일정은 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학관리본부</a>에서 확인하실 수 있습니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원 자격
                        </font>
                        <br /><br />
                        <h6>일반 전형</h6>
                        고등학교 졸업(예정)자, 고등학교 졸업학력 검정고시 합격자, 또는 법령에 의하여 고등학교 졸업 이상의 학력이 있다고 인정된 자 (외국 고등학교 졸업자 또는 졸업예정자 포함)로서 학업능력이 우수하고 모집단위 관련 분야에 재능과 열정을 보인 자<br /><br />
                        <h6>기회균형선발특별전형 - 기초생활수급권자 및 차상위계층 가구 학생</h6>
                        고등학교 졸업예정자 또는 고등학교 졸업학력 검정고시 합격자로서 정해진 자격을 유지하고 있는 자 (단, 지원 기회는 1회로 제한함)<br /><br />
                        <h6>기회균형선발특별전형 - 농어촌 학생</h6>
                        고등학교 졸업예정자로서 정해진 자격 기준을 만족하며 소속 고등학교장의 추천을 받은 자 (고등학교별 추천 인원은 3명 이내)<br /><br />
                        <h6>지역균형선발전형</h6>
                        국내 고등학교 졸업예정자 (조기졸업예정자 제외)로서 소속 고등학교장의 추천을 받은 자<br />
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원서 접수
                        </font>
                        <br /><br />지원서는 인터넷으로만 접수를 받습니다. 지원 기간에 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부</a>에서 안내에 따라 지원서를 제출합니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            선발 방식
                        </font>
                        <br /><br />단계별 전형을 실시하며 서류평가, 면접 및 구술고사 결과를 종합적으로 고려하여 선발합니다
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            합격자 발표
                        </font>
                        <br /><br />12월 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부</a>에서 확인하거나 060-700-1930에 전화하여 ARS로 안내를 받으실 수 있습니다. 합격 여부를 확인할 책임은 지원자 본인에게 있습니다.
                    </Row>
                </div>
            </div>
        )
    }
}

export default AdmissionsUnderSusi;
