import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import UnderCourses from './UnderCourses';
import UnderCourseChanges from './UnderCourseChanges';
import UnderDegreeReq from './UnderDegreeReq';
import UnderDependency from './UnderDependency';
import UnderGeneralReq from './UnderGeneralReq';
import UnderRecommended from './UnderRecommended';
import UnderScholarships from './UnderScholarships';

export default class AcademicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["ucourses"],
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
            if (param.category !== "ucourses" && param.category !== "ucoursechange" && 
                param.category !== "udegreereq" && param.category !== "udependency" && 
                param.category !== "ugeneralreq" && param.category !== "urecommended" && 
                param.category !== "uscholarships") {
                this.setState({ currentMenuKey: ["ucourses"] })
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
            if (param.category !== "ucourses" && param.category !== "ucoursechange" && 
                param.category !== "udegreereq" && param.category !== "udependency" && 
                param.category !== "ugeneralreq" && param.category !== "urecommended" && 
                param.category !== "uscholarships") {
                this.setState({ currentMenuKey: ["ucourses"] })
            }
        }
    }
    
    renderSubCategoryPage(subCategory) {
console.log(subCategory);
        switch (subCategory) {
            case "ucourses":
                return <UnderCourses />;
            case "course-changes":
                return <UnderCourseChanges />;
            case "degree-requirements":
                return <UnderDegreeReq />;
            case "course-dependency-graph":
                return <UnderDependency />;
            case "general-education-requirements":
                return <UnderGeneralReq />;
            case "recommended-tracks":
                return <UnderRecommended />;
            case "scholarships":
                return <UnderScholarships />;
            default:
                return <UnderCourses />;
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
                                    defaultSelectedKeys={["ucourses"]}
                                    selectedKeys={this.state.currentMenuKey}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="학사">
                                        <Menu.Item key="ucourses" onClick={() => this.props.history.push('/academic/courses')}>교과목 정보 (학부)</Menu.Item>
                                        <Menu.Item key="ucoursechange" onClick={() => this.props.history.push('/academic/course-changes')}>교과목 변경 내역 (학부)</Menu.Item>
                                        <Menu.Item key="udegreereq" onClick={() => this.props.history.push('/academic/degree-requirements')}>졸업 규정</Menu.Item>
                                        <Menu.Item key="udependency" onClick={() => this.props.history.push('/academic/course-dependency-graph')}>선수 교과목</Menu.Item>
                                        <Menu.Item key="ugeneralreq" onClick={() => this.props.history.push('/academic/general-education-requirements')}>필수 교양 과목</Menu.Item>
                                        <Menu.Item key="urecommended" onClick={() => this.props.history.push('/academic/recommended-tracks')}>전공 이수 표준 형태</Menu.Item>
                                        <Menu.Item key="uscholarships" onClick={() => this.props.history.push('/academic/scholarships')}>장학제도 (학부)</Menu.Item>
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
