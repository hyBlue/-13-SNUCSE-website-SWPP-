import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchTags, fetchTagNotices } from '../actions';
import { Button, Input } from 'antd';
const Search = Input.Search;

class NoticeList extends Component {
    constructor() {
        super();
        this.state = {
            displayedNotices: {},
            currentTag: ''
        }
    }
    componentDidMount() {
        this.props.fetchNotices().then(() => {
            this.setState({ displayedNotices: this.props.notices });
        });
        // this.props.fetchTags();
        // this.props.fetchTagNotices();
        // console.log('notice list mounted');
        // this.props.notices.then(data=> {
        //     console.log(data);
        // })
        // console.log(this.props.notices);
    }

    renderNotice() {
        return _.map(this.state.displayedNotices, notice => {
            return (
                <tr key={notice.id}>
                    <td style={{ textAlign: 'center' }}>{notice.id}</td>
                    <td>
                        <Link to={`/notice/${notice.id}`}>
                            {notice.title}
                        </Link>
                    </td>
                    <td>{notice.created_at.substring(0, 10)}</td>
                    <td style={{ textAlign: 'center' }}>{notice.view}</td>
                </tr>
            );
        });
    }

    //TEST for getting notices by tag
    filterNotice(id) {
    }
    renderTags() {
        return _.map(this.props.tags, tag => {
            return (
                <td key={tag.id}><Button onClick={this.filterNotice}>{tag.name}</Button></td>
            )
        })
    }

    //Search notices by title and content
    showSearchResult(value) {
        let filteredNotices;
        filteredNotices = _.filter(this.props.notices, notice => 
            notice.title.includes(value) || notice.content.includes(value) 
        )
        this.setState({displayedNotices: filteredNotices});
    }

    render() {
        const { notices, tags } = this.props;
        // if (!notices || !tags[1] || !tags[2]) {
        if (!notices) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h5>공지사항</h5>
                <table>
                    <thead><tr>
                        {this.renderTags()}
                    </tr></thead>
                </table>
                <Search
                    placeholder="input search text"
                    onSearch={value => this.showSearchResult(value)}
                    enterButton
                />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>번호</th>
                            <th>제목</th>
                            <th>날짜</th>
                            <th style={{ textAlign: 'center' }}>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderNotice()}
                    </tbody>
                </table>
                <div className="write-notice text-xs-right">
                    <Button type="primary">
                        <Link className="btn" to="/notice/new">
                            공지사항 쓰기
                    </Link></Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ notices, tags, }) {
    //console.log(state.notices);
    return { notices, tags, }
}

export default connect(mapStateToProps, { fetchNotices, fetchTags, fetchTagNotices })(NoticeList);