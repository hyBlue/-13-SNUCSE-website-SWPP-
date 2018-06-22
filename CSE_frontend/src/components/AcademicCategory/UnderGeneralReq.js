import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderGeneralReq extends Component {
  render() {
    return (
        <div>
            <h2 className="pageTitle">필수 교양 과목</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
            컴퓨터공학부 학생이 졸업을 하기 위해 반드시 들어야 하는 영역별 교양과목 학점 배분 구조표입니다. 학부생들은 이 구조표를 참고하여 수강에 차질이 없도록 하여야 합니다.<br /><br />
            <font size="4" color="#6a7eff">
              2014학년도 1학기 시행 교양 교과과정 변경<br />
            </font>
            <hr></hr>
            <font size="3" color="blue">
              교과목변경<br />
            </font>
            <font size="4">&middot;&nbsp;</font>(구) 010.001 대학국어(Korean) 3-2-2<br />
            <font size="4">&middot;&nbsp;</font>(신) 031.001 글쓰기의 기초(College Writing: Process & Structure) 3-3-0
          </div>
        </div>
    );
  }
}

export default UnderGeneralReq;
