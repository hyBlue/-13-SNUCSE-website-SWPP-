import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class UnderCourses extends Component {
  render() {
    return (
        <div>
          <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
            <h5>교과목 정보 (학부)</h5>
          </Row>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>교과목 구분</th>
                        <th>교과목 번호</th>
                        <th>교과목명</th>
                        <th>학점</th>
                        <th>학년</th>
                        <th>교과목 링크</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>교양</td>
                      <td>033.014</td>
                      <td>공학수학1</td>
                      <td>3</td>
                      <td>1학년</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>교양</td>
                      <td>033.015</td>
                      <td>공학수학2</td>
                      <td>3</td>
                      <td>2학년</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>교양</td>
                      <td>035.001</td>
                      <td>컴퓨터의 개념 및 실습</td>
                      <td>3</td>
                      <td>1학년</td>
                      <td>2015/2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default UnderCourses;
