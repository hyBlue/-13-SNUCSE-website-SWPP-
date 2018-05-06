import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotice } from '../actions';

class  NoticeDetail extends Component {
    componentDidMount() {
        //optional: if(!this.props.post)
        const { id } = this.props.match.params;
        this.props.fetchNotice(id);
    }

    render() {
        const { notice } = this.props;
        if(!notice) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>{notice.title}</h3>
                <thead>
                <tr><td>작성자: {notice.author}</td><td>작성일: {notice.created_at.substring(0,10)}</td><td>조회: </td></tr>
                </thead>
                <h6>분류: </h6>
                <p>{notice.content}</p>
                <Link to="/notice" className="btn">목록</Link>
            </div>
        )
    }
}

function mapStateToProps({ notices }, ownProps) {
 return { notice: notices[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchNotice })(NoticeDetail);