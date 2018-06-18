import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import AboutCSE from './AboutCSE';
import AboutCareer from './AboutCareer';
import AboutClubs from './AboutClubs';
import AboutContact from './AboutContact';
import AboutDirections from './AboutDirections';
import AboutFacilities from './AboutFacilities';
import AboutGreetings from './AboutGreetings';
import AboutHistory from './AboutHistory';

export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["cse"],
            loading: true
        }
    }
    
    componentWillMount() {
        if (this.props.match && this.props.match.params) {
            const param = this.props.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category]
            });
            if (param.category !== "cse" && param.category !== "career" && 
                param.category !== "clubs" && param.category !== "contact" && 
                param.category !== "directons" && param.category !== "facilities" && 
                param.category !== "greetings" && param.category !== "history") {
                this.setState({ currentMenuKey: ["cse"] })
            }
        }
    }
    
    componentWillReceiveProps(newProps) {
        if (newProps.match && newProps.match.params) {
            const param = newProps.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category]
            });
            if (param.category !== "cse" && param.category !== "career" && 
                param.category !== "clubs" && param.category !== "contact" && 
                param.category !== "directons" && param.category !== "facilities" && 
                param.category !== "greetings" && param.category !== "history") {
                this.setState({ currentMenuKey: ["cse"] })
            }
        }
    }
    
    renderSubCategoryPage(subCategory) {
        switch (subCategory) {
            case "cse":
                return <AboutCSE />;
            case "career":
                return <AboutCareer />;
            case "clubs":
                return <AboutClubs />;
            case "contact":
                return <AboutContact />;
            case "directions":
                return <AboutDirections />;
            case "facilities":
                return <AboutFacilities />;
            case "greetings":
                return <AboutGreetings />;
            case "history":
                return <AboutHistory />;
            default:
                return <AboutCSE />;
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
                                    defaultSelectedKeys={["cse"]}
                                    selectedKeys={this.state.currentMenuKey}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="소개">
                                        <Menu.Item key="cse" onClick={() => this.props.history.push('/about/CSE')}>학부소개</Menu.Item>
                                        <Menu.Item key="greetings" onClick={() => this.props.history.push('/about/greetings')}>학부장 인사말</Menu.Item>
                                        <Menu.Item key="history" onClick={() => this.props.history.push('/about/history')}>연혁</Menu.Item>
                                        <Menu.Item key="career" onClick={() => this.props.history.push('/about/career')}>졸업생 진로</Menu.Item>
                                        <Menu.Item key="clubs" onClick={() => this.props.history.push('/about/clubs')}>동아리 소개</Menu.Item>
                                        <Menu.Item key="facilities" onClick={() => this.props.history.push('/about/facilities')}>시설 안내</Menu.Item>
                                        <Menu.Item key="contact" onClick={() => this.props.history.push('/about/contact')}>연락처</Menu.Item>
                                        <Menu.Item key="directions" onClick={() => this.props.history.push('/about/directions')}>찾아오는 길</Menu.Item>
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
