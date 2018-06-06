import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import { Link } from 'react-router-dom';
import SeminarRoomReservePage from './SeminarRoomReserve';
// import LabReservePage from '';

export default class ReservationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: "",
            openKeys: ["sub1"]
        }
    }
    renderSubCategoryPage(subCategory) {
        switch (subCategory) {
            case "seminarRoom":
                return <SeminarRoomReservePage />;
                break;
            case "laboratory":
                // return <LabReservePage />;
                return <div> test </div>;
                break;
            default:
                // return <SeminarRoomReservePage />;
                return <div> test </div>;
        }
    }

    onOpenChange = (openKeys) => {
        const rootSubmenuKeys = ["sub1", "sub2"];
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
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
                                    defaultSelectedKeys={['1']}
                                    openKeys={this.state.openKeys}
                                    defaultOpenKeys={['sub1']}
                                    onOpenChange={value => this.onOpenChange(value)}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="예약" />
                                    <SubMenu key="sub1" title={'세미나실'} onClick={() => this.setState({ currentSubCategory: 'seminarRoom' })}>
                                        <Menu.Item key="1">301-417(28석)</Menu.Item>
                                        <Menu.Item key="2">301-551(42석)</Menu.Item>
                                        <Menu.Item key="3">302-308(46석)</Menu.Item>
                                        <Menu.Item key="4">302-309(36석)</Menu.Item>
                                        <Menu.Item key="5">302-309-2(49석)</Menu.Item>
                                        <Menu.Item key="6">301-317 교수회의실(30석)</Menu.Item>
                                        <Menu.Item key="7">302-317-3 교수회의실(8석)</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={'실습실'} onClick={() => this.setState({ currentSubCategory: 'laboratory' })}>
                                        <Menu.Item key="1">소프트웨어실습실(64석)</Menu.Item>
                                        <Menu.Item key="2">항드웨어실습실(30석)</Menu.Item>
                                    </SubMenu>
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