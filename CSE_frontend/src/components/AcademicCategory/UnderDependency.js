import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderDependency extends Component {
  render() {
    return (
        <div>
          <h2 className="pageTitle">선수 교과목</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
          선수 교과목 그래프는 컴퓨터공학부 학부과정에서 어떤 전공과목을 수강하기에 앞서 자신이 과연 수강하려 하는 전공과목에 대해 얼마나 많은 배경지식을 가지고 있는지를 확인해 볼 수 있게 해 주는 그래프 입니다. 어떤 과목을 수강하기 위해서는 그 과목으로 들어오는 화살표가 있는 과목들을 모두 들어두는 것이 유리합니다. 
          </div>
        </div>
    );
  }
}

export default UnderDependency;
