import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderDegreeReq extends Component {
  render() {
    return (
        <div>
          <h2 className="pageTitle">졸업 규정</h2>
          <div style={{ background: '#E8E8E8', padding: '10px' }}>
            <div style={{ border: '3px solid #ccc' }}>
                        목차 [숨기기]<br />
                        1 컴퓨터공학 전공 학점<br />
                        &nbsp;&nbsp;1.1 컴퓨터공학 단일 전공
            </div>
            <font size="4" color="#6a7eff">
              <br />컴퓨터공학 전공 학점<br />
            </font>
            <hr></hr>
            <font size="3" color="blue">
              컴퓨터공학 단일 전공<br />
            </font>
            <font size="4">&middot;&nbsp;</font>(2008~2010학번) 컴퓨터공학 전공 60학점 이상: 전필 33학점 + 내규 5학점을 포함한 60학점 이수<br />
            - 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제, 프로그래밍언어, 알고리즘<br />
             - 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트2 
          </div>
        </div>
    );
  }
}

export default UnderDegreeReq;
