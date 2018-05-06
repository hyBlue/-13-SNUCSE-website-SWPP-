import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices } from '../actions';

class NoticeList extends Component {
  componentDidMount() {
      this.props.fetchNotices();
  }

  renderNotice() {
    return _.map(this.props.notices, notice => {
        return (
            <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>
                <Link to={`/notice/${notice.id}`}>
                    {notice.title} 
                </Link>
                </td>
                <td>{notice.created_at.substring(0,10)}</td>
                <td></td>
            </tr>
        );
    });
}

  render() {
    const { notices } = this.props;
    if(!notices) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="write-notice">
                    <Link className="btn btn-primary" to="/notice/new">
                        공지사항 쓰기
                    </Link>
            </div>
            <h3>공지사항</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderNotice()}
                </tbody>
            </table>
        </div>
    );
  }
}

function mapStateToProps({ notices }) {
    //console.log(state.notices);
    return { notices }
}

export default connect(mapStateToProps, { fetchNotices })(NoticeList);