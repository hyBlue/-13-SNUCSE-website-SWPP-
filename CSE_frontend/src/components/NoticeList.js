import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchTags, fetchTagNotices } from '../actions';
import { Button, Input, Tabs, Select, Row, Col } from 'antd';
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
        list.sort((a, b) => {
            let ap = parseInt(a.substring(0, a.indexOf(" ")));
            let bp = parseInt(b.substring(0, b.indexOf(" ")));
            return ap === bp ? 0 : ap < bp ? -1 : 1;
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
    showSearchResult(searchValue) {
        let value = searchValue.toLowerCase();
        if(this.state.isTagShow){//태그별 리스트 내에서 검색
            let filteredNotices;
            filteredNotices = _.filter(this.state.tagNotices, notice =>
                notice.substring(notice.indexOf(" ")).toLowerCase().includes(value)
            )
            this.setState({ displayedTagNotices: filteredNotices });
        }
        else if (this.state.currentTab === "all" ) {//전체에서 검색
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
                notice.substring(notice.indexOf(" ")).toLowerCase().includes(value)
                //태그 notices가 string으로 넘어오기 때문에 내용 검색이 안됨
                //|| notice.content.includes(value)
            )
            this.setState({ displayedCategoryNotices: filteredNotices });
        }
    }

    handleChange(value) {
        this.setState({isTagShow: value.length!==0});
        console.log(value);
        console.log(this.getCategoryNotices(value));
        this.setState({tagNotices: this.getCategoryNotices(value), displayedTagNotices: this.getCategoryNotices(value)});        
    }
    render() {
        const { notices, tags } = this.props;
        if (!notices) {
            return <div>Loading...</div>;
        }
        const tagOptions = [];
        _.map(this.props.tags, tag => tagOptions.push(<Option key={tag.id}>{tag.name}</Option>));
        return (
            <div>
                <div className="pageTitle">공지사항</div>
                {/* <table>
                    <thead><tr>
                        {this.renderTags()}
                    </tr></thead>
                </table> */}
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
                            onChange={this.handleChange.bind(this)}
                            allowClear={true}
                            disabled={this.state.currentTab!=="all"}
                        >
                            {tagOptions}
                        </Select>
                    </Col>
                </Row>

                <Tabs defaultActiveKey="all" onChange={(currentTab) => this.getCurrentTab(currentTab)}>
                    <TabPane tab="전체" key="all"><NoticeListRender notices={!this.state.isTagShow? this.state.displayedNotices : this.state.displayedTagNotices} isAll={!this.state.isTagShow} /></TabPane>
                    <TabPane tab="학부 공지" key="0"><NoticeListRender notices={this.state.displayedCategoryNotices[0]} isAll={false} /></TabPane>
                    <TabPane tab="학사 공지" key="1"><NoticeListRender notices={this.state.displayedCategoryNotices[1]} isAll={false} /></TabPane>
                    <TabPane tab="취업/대외활동 공지" key="2"><NoticeListRender notices={this.state.displayedCategoryNotices[2]} isAll={false} /></TabPane>
                    <TabPane tab="기타" key="3"><NoticeListRender notices={this.state.displayedCategoryNotices[3]} isAll={false} /></TabPane>
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