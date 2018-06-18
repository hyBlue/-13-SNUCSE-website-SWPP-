import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import Admissions from './Admissions';
import AdmissionsUnder from './AdmissionsUnder';
import AdmissionsUnderSusi from './AdmissionsUnderSusi';
import AdmissionsUnderJeongsi from './AdmissionsUnderJeongsi';
import AdmissionsUnderTransfer from './AdmissionsUnderTransfer';
import AdmissionsGrad from './AdmissionsGrad';
import AdmissionsGradRegular from './AdmissionsGradRegular';


export default class AdmissionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            currentMenuKey: ["admissions"],
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
            if (param.category !== "admissions" && param.category !== "under" && 
                param.category !== "undersusi" && param.category !== "underjeongsi" && 
                param.category !== "undertransfer" && param.category !== "grad" && 
                param.category !== "gradregular") {
                this.setState({ currentMenuKey: ["admissions"] })
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
            if (param.category !== "admissions" && param.category !== "under" && 
                param.category !== "undersusi" && param.category !== "underjeongsi" && 
                param.category !== "undertransfer" && param.category !== "grad" && 
                param.category !== "gradregular") {
                this.setState({ currentMenuKey: ["admissions"] })
            }
        }
    }
    
    renderSubCategoryPage(subCategory) {
console.log(subCategory);
        switch (subCategory) {
            case "admissions":
                return <Admissions />;
            case "undergraduate":
                return <AdmissionsUnder />;
            case "susi":
                return <AdmissionsUnderSusi />;
            case "jeongsi":
                return <AdmissionsUnderJeongsi />;
            case "transfer":
                return <AdmissionsUnderTransfer />;
            case "gradudate":
                return <AdmissionsGrad />;
            case "regular":
                return <AdmissionsGradRegular />;
            default:
                return <Admissions />;
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
                                    defaultSelectedKeys={["admissions"]}
                                    selectedKeys={this.state.currentMenuKey}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="입학">
                                        <Menu.Item key="admissions" onClick={() => this.props.history.push('/admissions')}>입학 안내</Menu.Item>
                                        <Menu.Item key="under" onClick={() => this.props.history.push('/admissions/undergraduate')}>학부</Menu.Item>
                                        <Menu.Item key="undersusi" onClick={() => this.props.history.push('/admissions/susi')}>수시 모집</Menu.Item>
                                        <Menu.Item key="underjeongsi" onClick={() => this.props.history.push('/admissions/jeongsi')}>정시 모집</Menu.Item>
                                        <Menu.Item key="undertransfer" onClick={() => this.props.history.push('/admissions/transfer')}>학사 편입학</Menu.Item>
                                        <Menu.Item key="grad" onClick={() => this.props.history.push('/admissions/graduate')}>대학원</Menu.Item>
                                        <Menu.Item key="gradregular" onClick={() => this.props.history.push('/admissions/regular')}>전기/후기 모집</Menu.Item>
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
