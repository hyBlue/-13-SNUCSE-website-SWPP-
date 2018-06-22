import { Affix, Layout, Row, Col, Menu, Icon, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;
import { fetchNotices, fetchNewses, deleteNotice } from '../../actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import forSlider3 from '../../../icons/forSlider3.jpg';
import NoticeList from './NoticeList';
import NewsList from './NewsList';
import NoticeDetail from './NoticeDetail';
import NewsDetail from './NewsDetail';

class NoticeNewsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["notice"],
            postId: "",
            noticeLoading: true,
            newsLoading: true
        }
    }
    //Needed for access by url
    componentWillMount() {
        this.props.fetchNotices().then(()=> this.setState({noticeLoading: false}));
        this.props.fetchNewses().then(()=> this.setState({newsLoading: false}));
        if (this.props.match && this.props.match.params) {
            const param = this.props.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category],
                postId: ""
            });
            if (param.category !== "notice" && param.category !== "news") {
                this.setState({ currentMenuKey: ["notice"] })
            }//if no match, default ot professor

            //Check if the notice posts' id comes with
            if (param.postId) {
                this.setState({ postId: param.postId });
            }
        }
    }
    //Handle Change on url param match to subcategory
    componentWillReceiveProps(newProps) {
        if (newProps.match && newProps.match.params) {
            const param = newProps.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category],
                postId: ""
            });
            if (param.category !== "notice" && param.category !== "news") {
                this.setState({ currentMenuKey: ["notice"] })
            }//if no match, default ot professor

            //Check if the notice posts' id comes with
            if (param.postId) {
                this.setState({ postId: param.postId });
            }
        }
    }

    onDeleteClick() {
        this.props.deleteNotice(this.state.postId, () => {
            this.setState({ postId: "" });
        });
    }
    onUpdateClick() {
        console.log('update');
    }

    renderSubCategoryPage(subCategory) {
        switch (subCategory) {
            case "notice":
                return <NoticeList loading={this.state.noticeLoading}/>;
            case "news":
                return <NewsList loading={this.state.newsLoading}/>;
            default:
                return <NoticeList loading={this.state.noticeLoading}/>;
        }
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ backgroundColor: '#fff', height: '200px', padding: '0' }}>
                        <div>
                            <img src={forSlider3} style={{ height: '200px', width: '100%' }} />
                        </div>
                    </Header>

                    <Layout>
                        <Sider style={{ backgroundColor: '#f0f2f5' }}
                            width="400px"
                            breakpoint="lg"
                            collapsedWidth="0"
                            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
                            <Affix>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={["notice"]}
                                    selectedKeys={this.state.currentMenuKey}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g2" title="알림광장">
                                        <Menu.Item key="notice" onClick={() => { this.props.fetchNotices(); this.props.history.push('/noitce_news/notice')}}>공지사항</Menu.Item>
                                        <Menu.Item key="news" onClick={() => { this.props.fetchNewses(); this.props.history.push('/notice_news/news')}}>새소식</Menu.Item>
                                        {/* <Menu.Item key="professor" onClick={() => this.props.history.push('/members/professor')}>교수</Menu.Item> */}
                                    </MenuItemGroup>
                                </Menu>
                            </Affix>
                        </Sider>

                        <Content className="pageContent">
                            {(this.state.currentSubCategory === 'notice' || this.state.currentSubCategory === 'news') && this.state.postId !== "" ?
                                <div>
                                    <div style={{ padding: '0 10px 5px 0' }}>
                                        <Button className="postButtons" type="primary" ghost onClick={() => this.setState({ postId: "" })} >접기</Button>
                                        {/*temporary handling for newsdetail because currently no remove news*/}
                                        {this.state.currentSubCategory === 'notice' && <span>
                                        <Button className="postButtons" type="danger" ghost onClick={this.onDeleteClick.bind(this)}>지우기</Button>
                                        <Button className="postButtons" ghost style={{ border: '1px solid #6b9a79', color: '#6b9a79' }} onClick={() => this.onUpdateClick.bind(this)}>수정하기</Button></span>}
                                    </div>
                                    {this.state.currentSubCategory === "notice" ? 
                                        <NoticeDetail id={this.state.postId} /> :
                                        <NewsDetail key={this.state.postId} id={this.state.postId} />}
                                    <br />
                                </div> : ""}
                            {this.renderSubCategoryPage(this.state.currentSubCategory)}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default connect(null, { fetchNotices, fetchNewses, deleteNotice })(NoticeNewsPage);