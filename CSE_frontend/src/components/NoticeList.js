import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchTags, fetchTagNotices } from '../actions';
import { Button, Input, Tabs } from 'antd';
import NoticeListTable from './NoticeListTable';
const Search = Input.Search;
const TabPane = Tabs.TabPane;

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
        this.props.fetchTags();
        //this.props.fetchTagNotices();
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
        this.setState({ displayedNotices: filteredNotices });
    }
    

    render() {
        const { notices, tags } = this.props;
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
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="전체" key="1">
                        <NoticeListTable notices={this.state.displayedNotices} isSub={false}/>
                    </TabPane>
                    <TabPane tab="고정 공지" key="2">
                        {/* this list's option 0 is dummy */}
                        <NoticeListTable notices={this.state.displayedNotices} isSub={true} tags={this.props.tags} option={[0]}/>
                    </TabPane>
                    <TabPane tab="학부 공지" key="3">
                        <NoticeListTable notices={this.state.displayedNotices} isSub={true} tags={this.props.tags} option={[1,7,8,9,10]}/>
                    </TabPane>
                    <TabPane tab="학사 공지" key="4">
                        <NoticeListTable notices={this.state.displayedNotices} isSub={true} tags={this.props.tags} option={[2,3,4,5,6]}/>
                    </TabPane>
                    <TabPane tab="취업/대외활동 공지" key="5">
                        <NoticeListTable notices={this.state.displayedNotices} isSub={true} tags={this.props.tags} option={[13,14,15,16]}/>
                    </TabPane>
                    <TabPane tab="기타" key="6">
                        <NoticeListTable notices={this.state.displayedNotices} isSub={true} tags={this.props.tags} option={[11,12,17]}/>
                    </TabPane>
                </Tabs>
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
    return { notices, tags, }
}

export default connect(mapStateToProps, { fetchNotices, fetchTags, fetchTagNotices })(NoticeList);