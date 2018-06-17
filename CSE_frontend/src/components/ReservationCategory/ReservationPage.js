import { Affix, Layout, Row, Col, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
import React, { Component } from 'react';
import forSlider3 from '../../../icons/forSlider3.jpg';
import RoomReservePage from './RoomReserve';
import { fetchReservation } from '../../actions';

// import LabReservePage from '';

//여기서 특정 세미나실 시간표를 선택하면
//fetch 실행

class ReservationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSubCategory: 'seminar',
            openKeys: ["seminar"],
            reserveRoomKey: '301-417',
            subcategories: ['seminar', 'lab'],//for compare url param
            seminarRoomKeys: ["301-417", "301-551", "302-308", "302-309", "302-309-2", "301-317", "302-317-3"],
            labRoomKeys: ["SoftWareLab", "HardWareLab"]
        }
    }
    //Needed for access by url
    componentWillMount() {
        if (this.props.match && this.props.match.params) {
            const param = this.props.match.params;
            if (param.category && _.includes(this.state.subcategories, param.category)) {
                this.setState({
                    currentSubCategory: param.category,
                    reserveRoomKey: param.category == "seminar" ? '301-417' : 'SoftWareLab',
                    openKeys: [param.category]
                });
                if (param.roomkey) {
                    if (param.category === 'seminar' && _.includes(this.state.seminarRoomKeys, param.roomkey)) {
                        this.setState({ reserveRoomKey: param.roomkey })
                    }
                    if (param.category === 'lab' && _.includes(this.state.labRoomKeys, param.roomkey)) {
                        this.setState({ reserveRoomKey: param.roomkey })
                    }
                }
            }
        }
    }
    //Just handle category for seminar or lab. not room(ummeaningful)
    componentWillReceiveProps(newProps) {
        if (newProps.match && newProps.match.params) {
            const param = newProps.match.params;
            if (param.category && _.includes(this.state.subcategories, param.category)) {
                this.setState({
                    currentSubCategory: param.category,
                    reserveRoomKey: param.category == "seminar" ? '301-417' : "SoftWareLab",
                    openKeys: [param.category]
                });
                if (param.roomkey) {
                    if (param.category === 'seminar' && _.includes(this.state.seminarRoomKeys, param.roomkey)) {
                        this.setState({ reserveRoomKey: param.roomkey })
                    }
                    if (param.category === 'lab' && _.includes(this.state.labRoomKeys, param.roomkey)) {
                        this.setState({ reserveRoomKey: param.roomkey })
                    }
                }
            }
        }
    }
    renderSubCategoryPage() {
        this.props.fetchReservation(this.state.currentSubCategory, this.state.reserveRoomKey).then(()=>console.log('fetch finished'));
        return (
            <RoomReservePage
                subCategory={this.state.currentSubCategory}
                reserveRoomKey={this.state.reserveRoomKey} />);
    }

    //메뉴아이템 클릭시 
    onMenuClick(subCategory, reserveRoomKey) {
        this.props.fetchReservation(subCategory, reserveRoomKey);
        this.setState({
            currentSubCategory: subCategory,
            openKeys: [subCategory],
            reserveRoomKey: reserveRoomKey,
        })
    }
    //메뉴사이드바 열기접기
    onOpenChange = (openKeys) => {
        const rootSubmenuKeys = ["seminar", "lab"];
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
                                    selectedKeys={[this.state.reserveRoomKey]}
                                    openKeys={this.state.openKeys}
                                    onOpenChange={value => this.onOpenChange(value)}
                                    style={{ height: '100%', margin: '10px', border: '1px solid #aaaaaa', borderRadius: '10px' }}
                                >
                                    <MenuItemGroup className="menuGroup" key="g1" title="예약" />
                                    <SubMenu key="seminar" title={'세미나실'} onClick={({key}) => this.props.history.push(`/reservation/seminar/${key}`)}>
                                    {/* ({ key }) => this.onMenuClick('seminar', key) */}
                                        <Menu.Item key="301-417">301-417(28석)</Menu.Item>
                                        <Menu.Item key="301-551">301-551(42석)</Menu.Item>
                                        <Menu.Item key="302-308">302-308(46석)</Menu.Item>
                                        <Menu.Item key="302-309">302-309(36석)</Menu.Item>
                                        <Menu.Item key="302-309-2">302-309-2(49석)</Menu.Item>
                                        <Menu.Item key="301-317">301-317 교수회의실(30석)</Menu.Item>
                                        <Menu.Item key="302-317-3">302-317-3 교수회의실(8석)</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="lab" title={'실습실'} onClick={({key}) => this.props.history.push(`/reservation/lab/${key}`)}>
                                        <Menu.Item key="SoftWareLab">소프트웨어실습실(64석)</Menu.Item>
                                        <Menu.Item key="HardWareLab">항드웨어실습실(30석)</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Affix>
                        </Sider>

                        <Content className="pageContent">
                            {this.renderSubCategoryPage()}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default connect(null, { fetchReservation })(ReservationPage);