import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import { Link } from 'react-router-dom';
import ProfessorPage from './ProfessorsList';
import StaffsPage from './StaffsList';
import HonourProfessorPage from './HonourProfList';

export default class MembersPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentSubCategory: ""
        }
    }
    renderSubCategoryPage(subCategory) {
        switch(subCategory){
            case "professor":
                return <ProfessorPage />;
            break;
            case "honourProfessor":
                return <HonourProfessorPage />;
            break;
            case "adminWorkers":
                return <StaffsPage />; 
            break;
            default:
                return <ProfessorPage />;
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
                                 <MenuItemGroup className="menuGroup" key="g1" title="구성원">

                                    <Menu.Item key="1" onClick={() => this.setState({currentSubCategory: 'professor'})}>교수</Menu.Item>
                                    <Menu.Item key="2" onClick={() => this.setState({currentSubCategory: 'honourProfessor'})}>역대교수진</Menu.Item>
                                    <Menu.Item key="3" onClick={() => this.setState({currentSubCategory: 'adminWorkers'})}>행정직원</Menu.Item>
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