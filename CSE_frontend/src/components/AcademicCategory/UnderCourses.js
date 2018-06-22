import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUndercourses } from '../../actions';
import { Collapse, Card, Icon, Avatar, Row, Col } from 'antd';

class UnderCourses extends Component {
  constructor() {
    super();
    this.state = {
      showingUndercourses: {},
    }
  }

  componentDidMount() {
    this.props.fetchUndercourses();
  }

  renderUndercourses() {
    return _.map(this.props.undercourses, undercourse => {
      console.log(undercourse.link);
      if (!undercourse.link.length)
        return (
          <tr key={undercourse.id}>
            <td>{undercourse.classification}</td>
            <td>{undercourse.number}</td>
            <td>{undercourse.name}</td>
            <td>{undercourse.credit}</td>
            <td>{undercourse.year}</td>
            <td></td>
          </tr>
        );
      else
        return (
          <tr key={undercourse.id}>
            <td>{undercourse.classification}</td>
            <td>{undercourse.number}</td>
            <td>{undercourse.name}</td>
            <td>{undercourse.credit}</td>
            <td>{undercourse.year}</td>
            <td>
              <a href={undercourse.link.url}>{undercourse.link.shift().name}</a>
            </td>
          </tr>
        );
    });
  }

  render() {
    return (
        <div>
            <h2 className="pageTitle">교과목 정보 (학부)</h2>
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
                    {this.renderUndercourses()}
                </tbody>
            </table>
        </div>
    );
  }
}

function mapStateToProps({ undercourses }) {
  return { undercourses };
}

export default connect(mapStateToProps, { fetchUndercourses })(UnderCourses);
