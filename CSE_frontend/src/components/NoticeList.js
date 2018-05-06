import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotices } from '../actions';

class NoticeList extends Component {
  componentDidMount() {
      this.props.fetchNotices();
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default connect(null, { fetchNotices })(NoticeList);