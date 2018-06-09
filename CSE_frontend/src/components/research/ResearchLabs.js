import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchResearchlabs } from '../../actions';
import { Collapse, Card, Icon, Avatar, Row, Col } from 'antd';

class ResearchLabs extends Component {
  constructor() {
    super();
    this.state = {
      showingLabs: {},
    }
  }

  componentDidMount() {
    this.props.fetchResearchlabs();
  }

  renderResearchlabs() {
    return _.map(this.props.labs, lab => {
      console.log(lab);
      if (lab.professors.length > 1)
        return (
          <tr key={lab.id}>
            <td>{lab.name}</td>
            <td>{lab.professors.shift()}</td>
            <td>{lab.location}</td>
            <td>{lab.abbreviation}</td>
          </tr>
        );
      else
        return (
          <tr key={lab.id}>
            <td>{lab.name}</td>
            <td>{lab.professors.shift()}</td>
            <td>{lab.location}</td>
            <td>{lab.abbreviation}</td>
          </tr>
        );
    });
  }

  render() {
    return (
        <div>
          <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
            <h5>연구실 목록</h5>
          </Row>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>연구실</th>
                        <th>지도교수</th>
                        <th>연구실위치</th>
                        <th>약자</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderResearchlabs()}
                </tbody>
            </table>
        </div>
    );
  }
}

function mapStateToProps({ researchlabs }) {
  return { researchlabs };
}

export default connect(mapStateToProps, { fetchResearchlabs })(ResearchLabs);
