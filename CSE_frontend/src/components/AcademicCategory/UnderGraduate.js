import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderGraduate extends Component {
  render() {
    return (
        <div>
          <h2 className="pageTitle">학부</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
            <div style={{ border: '3px solid #ccc' }}>
                        <div className="flcenter">목차 [숨기기]</div>
                        1 수강 신청<br />
                        &nbsp;&nbsp;1.1 수강에 관한 내규
            </div>
            <font size="4" color="#6a7eff">
              <br />수강 신청<br />
            </font>
            <hr></hr>
            1. 수강 신청은 1학기 (당해 연도 1월 또는 2월 중), 2학기 (당해 연도 7월 또는 8월 중)<br />
            2. 수강 변경은 매 학기 수업 주수 1주 이내 (6학점 이내)<br />
            3. 수강 취소는 수업 주수 2/4선 이내 
          </div>
        </div>
    );
  }
}

export default UnderGraduate;
