import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotice, deleteNotice } from '../actions';

class NoticeDetail extends Component {
    componentDidMount() {
        //optional: if(!this.props.post)
        const { id } = this.props.match.params;
        this.props.fetchNotice(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        //better thatn this.props.post.id; this.props.post mybe undefined
        this.props.deleteNotice(id, () => {
            this.props.history.push('/notice');
        });
    }

    onUpdateClick() {
        const { id } = this.props.match.params;
        this.props.history.push('/notice/id/update');
    }

    render() {
        const { notice } = this.props;
        if (!notice) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>{notice.title}</h3>
                <thead>
                    <tr><td>작성자: {notice.author}</td><td>작성일: {notice.created_at.substring(0, 10)}</td><td>조회: </td></tr>
                </thead>
                <br />
                <h6>분류: </h6>
                <p>{notice.content}</p>
                <Link to="/notice" className="btn">목록</Link>
                <button className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>지우기</button>
                <button className="btn btn-primary pull-xs-right"
                    onClick={this.onUpdateClick.bind(this)}>수정하기</button>
            </div>
        )
    }
}

function mapStateToProps({ notices }, ownProps) {
    return { notice: notices[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);