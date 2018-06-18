import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import Research from './Research';
import ResearchCenters from './ResearchCenters';
import ResearchGroups from './ResearchGroups';
import ResearchLabs from './ResearchLabs';

export default class ResearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["research"],
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
            if (param.category !== "research" && param.category !== "centers" && 
                param.category !== "groups" && param.category !== "labs") {
                this.setState({ currentMenuKey: ["research"] })
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
            if (param.category !== "research" && param.category !== "centers" && 
                param.category !== "groups" && param.category !== "labs") {
                this.setState({ currentMenuKey: ["research"] })
            }
        }
    }
    
    renderSubCategoryPage(subCategory) {
console.log(subCategory);
        switch (subCategory) {
            case "research":
                return <Research />;
            case "centers":
                return <ResearchCenters />;
            case "groups":
                return <ResearchGroups />;
            case "labs":
                return <ResearchLabs />;
            default:
                return <Research />;
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
                                    defaultSelectedKeys={["research"]}
                                    selectedKeys={this.state.currentMenuKey}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="연구">
                                        <Menu.Item key="research" onClick={() => this.props.history.push('/research')}>연구</Menu.Item>
                                        <Menu.Item key="groups" onClick={() => this.props.history.push('/research/groups')}>연구 그룹</Menu.Item>
                                        <Menu.Item key="centers" onClick={() => this.props.history.push('/research/centers')}>연구 센터</Menu.Item>
                                        <Menu.Item key="labs" onClick={() => this.props.history.push('/research/labs')}>연구실 목록</Menu.Item>
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
