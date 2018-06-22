import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderRecommended extends Component {
  renderYear() {
  
  }

  render() {
    return (
        <div>
          <h2 className="pageTitle">전공 이수 표준 형태</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
            <font size="4" color="#6a7eff">
              전공선택 인정교과목<br />
            </font>
            1.공과대학 전기·정보공학부, 산업공학과, 연합전공 기술경영 및 자연과학대학 수리과학부 및 통계학과, 사회과학대학 연합전공 정보문화학, 경영대학 교과목 중 학부장이 인정하는 교과목으로 총12학점까지 인정
          </div>
        </div>
    );
  }
}

export default UnderRecommended;
