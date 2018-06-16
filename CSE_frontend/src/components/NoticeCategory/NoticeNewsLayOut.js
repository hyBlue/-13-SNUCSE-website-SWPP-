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
            currentSubCategory: ""
        }
    }
    renderSubCategoryPage(subCategory) {
        switch(subCategory){
            case "noticeList":
                return <NoticeList />;
            case "newsList":
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
                                    defaultSelectedKeys={['1']}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                 <MenuItemGroup className="menuGroup" key="g1" title="알림광장">

                                    <Menu.Item key="1" onClick={() => this.setState({currentSubCategory: 'noticeList'})}>공지사항</Menu.Item>
                                    <Menu.Item key="2" onClick={() => this.setState({currentSubCategory: 'newsList'})}>새소식</Menu.Item>
                                    </MenuItemGroup>
                                </Menu>
                            </Affix>
                        </Sider>

                        <Content style={{ padding: '30px' }}>
                            {this.renderSubCategoryPage(this.state.currentSubCategory)}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}