import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AdmissionsUnderJeongsi extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">정시 모집</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            모집 시기
                        </font>
                        <br /><br />12월경 지원서 접수가 시작됩니다. 자세한 일정은 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학관리본부</a>에서 확인하실 수 있습니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원 자격
                        </font>
                        <br /><br />
                        <h6>일반 전형</h6>
                        고등학교 졸업(예정)자 또는 법령에 의하여 고등학교 졸업 이상의 학력이 있다고 인정된 자로서 서울대학교 자연계열의 대학수학능력시험 응시 지정영역 및 영역별 응시기준을 충족한 자<br /><br />
                        <h6>기회균형선발특별전형 - 특수교육대상자</h6>
                        서울대학교 특수교육대상자 지원자격심사위원회에서 특수교육 대상자로 선정된 자<br /><br />
                        <h6>기회균형선발특별전형 - 새터민 (북한이탈주민)</h6>
                        최근 5년 이내 (인터넷 접수 마감일 기준)에 입국한 새터민 (북한이탈주민)으로서, 고등학교 졸업(예정)자 또는 법령에 의하여 이와 동등 이상의 학력이 있다고 인정된 자로서, 서울대학교 자연계열의 대학수학능력시험 응시 지정 영역 및 영역별 응시기준을 충족하는 자
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원서 접수
                        </font>
                        <br /><br />지원서는 인터넷으로만 접수를 받고 있습니다. 지원 기간에 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부</a>에서 안내에 따라 지원서를 제출합니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            선발 방식
                        </font>
                        <br /><br />단계별 전형을 실시하며, 서류평가, 논술고사 결과를 종합적으로 고려하여 선발합니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            합격자 발표
                        </font>
                        <br /><br />2월 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부</a>에서 확인하거나 060-700-1930에 전화하여 ARS로 안내를 받으실 수 있습니다. 합격 여부를 확인할 책임은 지원자 본인에게 있습니다.
                    </Row>
                </div>
            </div>
        )
    }
}

export default AdmissionsUnderJeongsi;
