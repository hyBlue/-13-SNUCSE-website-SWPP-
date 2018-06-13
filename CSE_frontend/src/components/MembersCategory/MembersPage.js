import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import ProfessorPage from './ProfessorsList';
import StaffsPage from './StaffsList';
import HonourProfessorPage from './HonourProfList';

export default class MembersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["professor"],
            loading: true
        }
        console.log('construcotr');
    }
    //Needed for access by url
    componentWillMount() {
        if (this.props.match && this.props.match.params) {
            const param = this.props.match.params;
            this.setState({
                currentSubCategory: param.category,
                currentMenuKey: [param.category]
            });
            if(param.category!=="professor" && param.category!=="honourProfessor" && param.category!=="staff"){
                this.setState({currentMenuKey: ["professor"]})
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
            if(param.category!=="professor" && param.category!=="honourProfessor" && param.category!=="staff"){
                this.setState({currentMenuKey: ["professor"]})
            }//if no match, default ot professor
        }
    }
    renderSubCategoryPage(subCategory) {
        switch (subCategory) {
            case "professor":
                return <ProfessorPage />;
            case "honourProfessor":
                return <HonourProfessorPage />;
            case "staff":
                return <StaffsPage />;
                //if no match, default ot professor
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
                                    defaultSelectedKeys={["professor"]}
                                    selectedKeys={this.state.currentMenuKey}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="구성원">

                                        <Menu.Item key="professor" onClick={() => this.props.history.push('/members/professor')}>교수</Menu.Item>
                                        <Menu.Item key="honourProfessor" onClick={() => this.props.history.push('/members/honourProfessor')}>역대교수진</Menu.Item>
                                        <Menu.Item key="staff" onClick={() => this.props.history.push('/members/staff')}>행정직원</Menu.Item>
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