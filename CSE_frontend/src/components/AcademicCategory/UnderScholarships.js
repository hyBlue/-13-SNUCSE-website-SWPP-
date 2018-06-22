import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderScholarships extends Component {
  render() {
    return (
        <div>
          <h2 className="pageTitle">장학제도 (학부)</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
            컴퓨터공학부에서는 성적 우수, 근로장학금 등 여러 종류의 교내 장학금과 관정 이종환 재단 장학금 등 외부 우수 재단으로부터 다수의 장학금 수혜의 기회를 제공하고 있습니다. 매해 평균 학부생 60% 이상이 교내외 장학금에서 수혜를 받고 있습니다.<br />
            <font size="4" color="#6a7eff">
              <br />유의사항<br />
            </font>
            <hr></hr>
            <font size="4">&middot;&nbsp;</font>서울대학교 공과대학의 모든 장학금은 본인신청을 필수로 합니다.<br />
            <font size="4">&middot;&nbsp;</font>12학점 이상 취득예정자는 다음학기 장학금 신청시, 소득수준을 파악할 수 있는 증빙서류를 제출하여야 합니다.<br /><br />
            <font size="4" color="#6a7eff">
              <br />장학금 종류<br />
            </font>
            <hr></hr>
            <font size="4">&middot;&nbsp;</font>성적우수 국가장학금 (이공계)<br />
          </div>
        </div>
    );
  }
}

export default UnderScholarships;
