import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchMainNotices, fetchTags } from '../../actions';
import { Button, Input, Tabs, Select, Row, Col, Spin } from 'antd';
import NoticeListRender from './NoticeListRender';

const Search = Input.Search;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class NoticeList extends Component {
    constructor() {
        super();
        this.state = {
            displayedNotices: {},
            showAll: true,
            categoryNotices: [],
            displayedCategoryNotices: [],
            tagNotices: [],
            displayedTagNotices: [],
            isTagShow: false,
            currentTab: "all",
            tempDataloading: true
        }
    }
    componentDidMount() {
        this.props.fetchMainNotices(75).then(()=> {
            this.setState({tempDataloading: false});
        })
        // this.props.fetchNotices().then(() => {
        this.setState({ displayedNotices: this.props.notices });
        // });
        this.props.fetchTags().then(() => {
            let categoryItems = [];
            categoryItems[0] = this.getCategoryNotices([1, 7, 8, 9, 10]);
            categoryItems[1] = this.getCategoryNotices([2, 3, 4, 5, 6]);
            categoryItems[2] = this.getCategoryNotices([13, 14, 15, 16]);
            categoryItems[3] = this.getCategoryNotices([11, 12, 17]);
            this.setState({ categoryNotices: categoryItems, displayedCategoryNotices: categoryItems })
        });
    }
    componentWillReceiveProps(newProps) {
        // if (newProps.notices !== this.props.notices) {
        //     this.props.fetchNotices().then(() => this.setState({ displayedNotices: this.props.notices }));
        // }
        if (newProps.loading !== this.props.loading) {
            if(!newProps.loading)
                this.setState({ displayedNotices: this.props.notices });
        }
    }

    //카테고리별(tags의 notice 수합) 공지 리스트 만들기
    getCategoryNotices(categoryItems) {
        /* 고정고지 tag not ready */
        if (categoryItems[0] === 0) { return (<h5>고정 공지 준비중</h5>); }
        //Make category from tags. 현재 여러 태그들을 소수의 카테고리로 합치는 과정.
        let list = [];
        categoryItems.forEach(element => {
            list = list.concat(this.props.tags[element].notices)
        });
        list.sort((a, b) => {
            return a.created_at === b.created_at ? 0 : a.created_at < b.created_at ? -1 : 1;
        });
        return list;
    }

    getCurrentTab(activeKey) {
        this.setState({ currentTab: activeKey });
    }
    //Search notices by title and content
    showSearchResult(searchValue) {
        let value = searchValue.toLowerCase();
        if (this.state.isTagShow) {//태그별 리스트 내에서 검색
            let filteredNotices;
            filteredNotices = _.filter(this.state.tagNotices, notice =>
                notice.title.toLowerCase().includes(value) || notice.content.toLowerCase().includes(value)
            )
            this.setState({ displayedTagNotices: filteredNotices });
        }
        else if (this.state.currentTab === "all") {//전체에서 검색
            let filteredNotices;
            filteredNotices = _.filter(this.props.notices, notice =>
                notice.title.toLowerCase().includes(value) || notice.content.toLowerCase().includes(value)
            )
            this.setState({ displayedNotices: filteredNotices });
        }
        else {//카테고리별 검색
            let filteredNotices;
            const currentTab = parseInt(this.state.currentTab);
            filteredNotices = this.state.categoryNotices.slice();//copy
            filteredNotices[currentTab] = _.filter(filteredNotices[currentTab], notice =>
                notice.title.toLowerCase().includes(value) || notice.content.toLowerCase().includes(value)
            )
            this.setState({ displayedCategoryNotices: filteredNotices });
        }
    }

    handleTagChange(value) {
        this.setState({ isTagShow: value.length !== 0 });
        this.setState({ tagNotices: this.getCategoryNotices(value), displayedTagNotices: this.getCategoryNotices(value) });
    }
    render() {
        const { loading } = this.props;
        const tagOptions = [];
        _.map(this.props.tags, tag => tagOptions.push(<Option key={tag.id}>{tag.name}</Option>));
        return (
            <div className="noticeList">
                {/* <div className="pageTitle">공지사항</div> */}
                <h2> 공지사항 </h2>
                <Row>
                    <Col span={12}> <Search
                        placeholder="제목+내용 검색하기"
                        onSearch={value => this.showSearchResult(value)}
                        enterButton
                    /></Col>
                    <Col span={12}>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="태그 검색하기"
                            defaultValue={[]}
                            onChange={this.handleTagChange.bind(this)}
                            allowClear={true}
                            disabled={this.state.currentTab !== "all"}
                        >
                            {tagOptions}
                        </Select>
                    </Col>
                </Row>

                <Tabs defaultActiveKey="all" onChange={(currentTab) => this.getCurrentTab(currentTab)}>
                    <TabPane tab="전체" key="all"><NoticeListRender
                        loading={this.state.tempDataloading}
                        notices={loading? this.props.temporaryNotices : 
                                          (!this.state.isTagShow ? this.state.displayedNotices : this.state.displayedTagNotices)} /></TabPane>
                    <TabPane tab="학부 공지" key="0"><NoticeListRender loading={loading} notices={this.state.displayedCategoryNotices[0]} /></TabPane>
                    <TabPane tab="학사 공지" key="1"><NoticeListRender loading={loading} notices={this.state.displayedCategoryNotices[1]} /></TabPane>
                    <TabPane tab="취업/대외활동 공지" key="2"><NoticeListRender loading={loading} notices={this.state.displayedCategoryNotices[2]} /></TabPane>
                    <TabPane tab="기타" key="3"><NoticeListRender loading={loading} notices={this.state.displayedCategoryNotices[3]} /></TabPane>
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

function mapStateToProps({ mainItems, notices, tags, }) {
    return { temporaryNotices: mainItems.notices , notices, tags }
}

export default connect(mapStateToProps, { fetchNotices, fetchMainNotices, fetchTags })(NoticeList);