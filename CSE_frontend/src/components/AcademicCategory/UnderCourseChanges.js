import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderCourseChanges extends Component {
  render() {
    return (
        <div>
          <h2 className="pageTitle">교과목 변경 내역 (학부)</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
            <font size="4" color="#6a7eff">
              <br />2018학년도 1학기 시행 교과과정 변경<br />
            </font>
            <hr></hr>
            <font size="3" color="blue">
              교과목 신설<br />
            </font>
            <font size="4">&middot;&nbsp;</font>인터넷 보안 (Internet Security) 3-3-0<br /><br />
            <font size="3" color="blue">
              교과목 신설<br />
            </font>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>교과목번호</th>
                        <th>교과목명</th>
                        <th>학점-강의-실습</th>
                        <th>변경 항목</th>
                        <th>변경 내역</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>4190.103A</td>
                      <td>프로그래밍연습</td>
                      <td>3-2-2</td>
                      <td>성적부여형태 변경</td>
                      <td>A~F → S/U</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default UnderCourseChanges;
