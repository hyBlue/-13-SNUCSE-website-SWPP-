import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchTags, fetchTagNotices } from '../actions';
import { Button, Input, Tabs } from 'antd';
import NoticeListRender from './NoticeListRender';
const Search = Input.Search;
const TabPane = Tabs.TabPane;

class NoticeList extends Component {
    constructor() {
        super();
        this.state = {
            displayedNotices: {},
            showAll: true,
            categoryNotices: [],
            displayedCategoryNotices: [],
            currentTab: "all"
        }
    }
    componentDidMount() {
        this.props.fetchNotices().then(() => {
            this.setState({ displayedNotices: this.props.notices });
        });
        this.props.fetchTags().then(() => {
            let categoryItems = [];
            categoryItems[0] = this.getCategoryNotices([1, 7, 8, 9, 10]);
            categoryItems[1] = this.getCategoryNotices([2, 3, 4, 5, 6]);
            categoryItems[2] = this.getCategoryNotices([13, 14, 15, 16]);
            categoryItems[3] = this.getCategoryNotices([11, 12, 17]);
            this.setState({ categoryNotices: categoryItems, displayedCategoryNotices: categoryItems })
        });
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
    //카테고리 공지 리스트 만들기
    getCategoryNotices(categoryItems) {
        /* 고정고지 tag not ready */
        if (categoryItems[0] === 0) { return (<h5>고정 공지 준비중</h5>); }
        //Make category from tags. 현재 여러 태그들을 소수의 카테고리로 합치는 과정.
        let list = [];
        categoryItems.forEach(element => {
            list = list.concat(this.props.tags[element].notices)
        });
        return list;
    }
    //태그 가져오기
    renderTags() {
        return _.map(this.props.tags, tag => {
            return (
                <td key={tag.id}><Button onClick={this.filterNotice}>{tag.name}</Button></td>
            )
        })
    }
    getCurrentTab(activeKey) {
        this.setState({ currentTab: activeKey });
    }
    //Search notices by title and content
    showSearchResult(value) {
        if (this.state.currentTab === "all") {
            let filteredNotices;
            filteredNotices = _.filter(this.props.notices, notice =>
                notice.title.includes(value) || notice.content.includes(value)
            )
            this.setState({ displayedNotices: filteredNotices });
        }
        else {
            let filteredNotices;
            const currentTab = parseInt(this.state.currentTab);
            filteredNotices = this.state.categoryNotices;
            filteredNotices[currentTab] = _.filter(this.state.categoryNotices[currentTab], notice =>
                    notice && notice.substring(notice.indexOf(" ")).includes(value)
                //태그 notices가 string으로 넘어오기 때문에 내용 검색이 안됨
                //|| notice.content.includes(value)
            )
            this.setState({ displayedCategoryNotices: filteredNotices });
        }
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
                <Tabs defaultActiveKey="all" onChange={(currentTab) => this.getCurrentTab(currentTab)}>
                    <TabPane tab="전체" key="all"><NoticeListRender notices={this.state.displayedNotices} isAll={true} /></TabPane>
                    <TabPane tab="학부 공지" key="0"><NoticeListRender notices={this.state.displayedCategoryNotices[0]} isAll={false} /></TabPane>
                    <TabPane tab="학사 공지" key="1"><NoticeListRender notices={this.state.displayedCategoryNotices[1]} isAll={false} /></TabPane>
                    <TabPane tab="학사 공지" key="2"><NoticeListRender notices={this.state.displayedCategoryNotices[2]} isAll={false} /></TabPane>
                    <TabPane tab="학사 공지" key="3"><NoticeListRender notices={this.state.displayedCategoryNotices[3]} isAll={false} /></TabPane>
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