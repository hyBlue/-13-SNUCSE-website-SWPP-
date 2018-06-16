import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import NoticeList from './NoticeList';
import NewsList from './NewsList';

export default class NoticeNewsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["notice"],
            loading: true
        }
    }
    //Needed for access by url
    componentWillMount() {
        if (this.props.match && this.props.match.params) {
            const param = this.props.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category]
            });
            if(param.category!=="notice" && param.category!=="news"){
                this.setState({currentMenuKey: ["notice"]})
            }//if no match, default ot professor
        }  
    }
    //Handle Change on url param match to subcategory
    componentWillReceiveProps(newProps) {
        if (newProps.match && newProps.match.params) {
            const param = newProps.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category]
            });
            if(param.category!=="notice" && param.category!=="news"){
                this.setState({currentMenuKey: ["notice"]})
            }//if no match, default ot professor
        }
    }

    renderSubCategoryPage(subCategory) {
        switch(subCategory){
            case "notice":
                return <NoticeList />;
            case "news":
                return <NewsList />;
            default:
                return <NoticeList />;
        }
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ backgroundColor: '#fff', height: '200px', padding: '0' }}>
                            <div>
                                <img src={forSlider3} style={{height: '200px', width: '100%'}} />
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
                                 <MenuItemGroup className="menuGroup" key="g1" title="알림광장">
                                    <Menu.Item key="notice" onClick={() => this.props.history.push('/noitceNews/notice')}>공지사항</Menu.Item>
                                    <Menu.Item key="news" onClick={() => this.props.history.push('/noticeNews/news')}>새소식</Menu.Item>
                                    </MenuItemGroup>
                                </Menu>
                            </Affix>
                        </Sider>

                        <Content className="pageContent">
                            {this.renderSubCategoryPage(this.state.currentSubCategory)}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}