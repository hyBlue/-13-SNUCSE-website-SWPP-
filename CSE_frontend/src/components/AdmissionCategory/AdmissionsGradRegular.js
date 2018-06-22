import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AdmissionsGradRegular extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">전기/후기 모집</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            모집 시기
                        </font>
                        <br /><br />10월 (전기), 4월 (후기) 경에 모집을 시작하며, 자세한 일정은 <Link to='/notices'>공지사항 게시판</Link>에 공고됩니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원 자격
                        </font>
                        <br /><br />
                        <h6>석사</h6>
                        학사학위 취득(예정)자로서 영어지원자격을 취득한 자<br /><br />
                        <h6>석사박사통합과정</h6>
                        학사학위 취득(예정)자로서 영어지원자격을 취득한 자<br /><br />
                        <h6>박사과정</h6>
                        석사학위 취득(예정)자로서 영어지원자격을 취득한 자<br /><br />
                        <h6>영어지원자격</h6>
                       TEPS 601점/TOEFL IBT 86점 이상 (지원서 접수마감일 기준 2년 이내 응시)<br />
                       석사박사통합과정은 석사학위 및 박사학위의 과정이 통합된 과정을 이수하는 것으로서, 통합과정 이수중단 시 학칙 및 규정이 정하는 기준에 따라 석사학위 수여가 가능합니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원서 교부 및 접수
                        </font>
                        <br /><br />1. <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부 홈페이지</a>에 접속하여 입학지원서, 자기소개 및 수학(연구)계획서를 제출합니다.<br />
                        2. 출신 학교의 성적증명서, 영어성적표, 구술고사과목신청서 (석사 및 석사박사통합과정), 지도교수신청서 (박사과정)를 컴퓨터공학부 행정실로 방문 혹은 등기우편으로 제출합니다.<br />
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            선발 방식
                        </font>
                        <br /><br />
                        <font size="4" color="#6a7eff">
                          석사 및 석사박사통합과정<br />
                        </font>
                        <font size="5">&middot;</font>&nbsp;서류심사, 구술고사, 심층구술면접 3단계 전형을 통해 신입생을 선발합니다.<br />
                        <font size="5">&middot;</font>&nbsp;구술고사는 4과목 (OS, 컴퓨터구조, 자료구조, 전자회로) 중에서 지원자가 신청한 3과목에서 2~3문제를 풉니다.<br />
                        <font size="5">&middot;</font>&nbsp;서류심사와 구술고사를 통해 정원의 120~150%를 심층구술면접 대상자로 선발합니다.<br />
                        <font size="5">&middot;</font>&nbsp;심층구술면접 대상자는 정해진 기간 동안 본인이 선택한 연구실에 대해 개별 교수면담과 연구실 탐방 등을 통해 해당 전공분야를 심층 탐색해야 합니다 (반드시 한 명 이상의 교수와 면담할 것).<br />
                        <font size="5">&middot;</font>&nbsp;심층구술면접은 연구실 탐색기간 종료 후 하루 동안 실시되며, 심층구술면접을 통해 연구실이 확정된 지원자가 최종 합격됩니다.<br />
                        <font size="4" color="#6a7eff">
                          박사과정<br />
                        </font>
                        <font size="5">&middot;</font>&nbsp;서류심사, 면접 및 구술고사를 통해 선발합니다.<br />
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            합격자 발표
                        </font>
                        <br /><br />12월 (전기), 6월 (후기)에 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부 홈페이지</a>에서 입학정보 → 공지사항 → 합격자 발표란으로 들어가 주민등록번호로 검색하여 확인하실 수 있습니다.
                    </Row>
                </div>
            </div>
        )
    }
}

export default AdmissionsGradRegular;
