import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AdmissionsUnderTransfer extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">학사 편입학</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
학사 학위 소지자는 본 학교의 학부생으로 편입할 수 있습니다. 편입할 경우 3학년으로 편입되는 것이 일반적이지만 군위탁 편입학 대상자의 경우 전형위원회 심의 결과 또는 교육과학기술부 추천 현황에 따라 2학년으로 편입될 수도 있습니다.<br />
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
                        <font size="5">&middot;</font>&nbsp;학사 학위 취득(예정)자로서 영어지원자격을 취득한 자<br />
                        <font size="5">&middot;</font>&nbsp;영어지원자격: TEPS 601점/TOEFL IBT 86점 이상 (지원서 접수 마감일 기준 2년 이내 응시)<br />
                        <font size="5">&middot;</font>&nbsp;지원 모집단위와 동일·동종의 학과(부, 전공) 출신자나 복수전공자는 지원불가<br />
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            지원서 접수
                        </font>
                        <br /><br />지원 기간에 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학관리본부</a>에서 안내에 따라 지원서를 제출하고, 관련 서류는 공과대학 교학행정실로 제출합니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            선발 방식
                        </font>
                        <br /><br />전공, 면접 및 구술고사 성적을 합산하여 성적순으로 합격자를 선발합니다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            합격자 발표
                        </font>
                        <br /><br />2월 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학본부</a>에서 확인하실 수 있습니다.
                    </Row>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>첨부 파일</th>
                          <th>크기</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>학사편입학 기출문제(2002-2009).zip</td>
                        <td>636.13KB</td>
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdmissionsUnderTransfer;
