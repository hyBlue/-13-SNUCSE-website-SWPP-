import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/snu_logo.png';
import { Divider, Button, Menu, Dropdown, Icon, Row, Col, Popover } from 'antd';

export default class MainNavigateBar extends Component {

    renderSubMenu(menuItems) {
        return (
            <Menu
                theme="dark"
                // defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}>
                {this.renderSubMenuItem(menuItems)}
            </Menu>
        );
    }
    renderSubMenu2(itemGroup1, itemGroup2) {
        return (
            <Menu
                theme="dark"
                // defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="5" style={{ color: "#6b9a79" }}>{itemGroup1.groupTitle}</Menu.Item>
                {this.renderSubMenuItem(itemGroup1.items)}
                <Menu.Item key="9" style={{ color: "#6b9a79" }}>{itemGroup2.groupTitle}</Menu.Item>
                {this.renderSubMenuItem(itemGroup2.items)}
            </Menu>
        );
    }
    renderSubMenuItem(items) {
        return _.map(items, item => {
            return (
                <Menu.Item key={item.key}><Link className="MainCategories" to={`${item.to}`}>{item.title}</Link></Menu.Item>
            )
        })
    }
    renderMenu2() {
        return (
            <Row>
                <Col span={4} className="catBlock text-xs-center" >
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '학부소개', to: '/about/CSE' }, { key: 1, title: '학부장', to: '/about/greetings' }, { key: 2, title: '연혁', to: '/about/history' },
                    { key: 3, title: '졸업생 진로', to: '/about/career' }, { key: 4, title: '동아리 소개', to: '/about/clubs' }, { key: 5, title: '시설안내', to: '/about/facilities' },
                    { key: 6, title: '연락처', to: '/about/contact-us' }, { key: 7, title: '찾아오는 길', to: '/about/directions' }])}>
                        <Link className="MainCategories" to={'/about/CSE'}>
                            소개</Link></Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '교수진', to: '/members/professor' }, { key: 1, title: '역대 교수진', to: '/members/honourProfessor' }, { key: 2, title: '행정직원', to: '/members/staff' }])}>
                        <Link className="MainCategories" to={'/members'}>구성원</Link>
                    </Dropdown>
                </Col>
                <Col span={4} className="catBlock  text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '연구 그룹', to: '/research/groups' }, { key: 1, title: '연구 센터', to: '/research/centers' }, { key: 2, title: '연구실 목록', to: '/research/labs' }, { key: 3, title: 'CSE Top Conference List' }])}>
                        <Link className="MainCategories" to={'/'}>연구</Link></Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu2({ groupTitle: '학부', items: [{ key: 0, title: '수시 모집', to: '/admissions/susi' }, { key: 1, title: '정시 모집', to: '/admissions/jeongsi' }, { key: 2, title: '학사 편입학', to: '/admissions/transfer' },] },
                        { groupTitle: '대학원', items: [{ key: 3, title: '전기/후기 모집', to: '/admissions/regular' }] })}>
                        <Link className="MainCategories" to={'/admissions'}>입학</Link>
                    </Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu2({ groupTitle: '학부', items: [{ key: 0, title: '교과목 정보', to: '/academic/courses' }, { key: 1, title: '선수 교과목', to: '/academic/course-dependency-graph' }, { key: 2, title: '전공 이수 표준 형태', to: '/academic/recommended-tracks' }, { key: 3, title: '필수 교양 과목', to: '/academic/general-education-requirements' }, { key: 4, title: '졸업 규정', to: '/academic/degree-requirements' }, { key: 5, title: '교과목 변경 내역', to: '/academic/course-changes' }, { key: 6, title: '장학제도', to: '/academic/scholarships' },] },
                        { groupTitle: '대학원', items: [{ key: 7, title: '교과목 정보' }, { key: 8, title: '교과목 변경내역' }, { key: 9, title: '장학제도' }] })}>
                        <Link className="MainCategories" to={'/academic'}>학사</Link>
                    </Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '세미나실', to: '/reservation/seminar' }, { key: 1, title: '실습실 예약', to: '/reservation/lab' }])}>
                        <Link className="MainCategories" to={'/reservation'}>예약</Link>
                    </Dropdown>
                </Col>
            </Row>
        )
    }
    showMenu() {
        return (
            <div id="menu">
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
    returnTitle() {

    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8} className="text-xs-left">
                        <Link className="navbarTitle" to={'/'}
                            style={{ color: '#ffffff', fontSize: '1.5rem', textDecoration: 'none', whiteSpace: 'pre-wrap' }}>
                            <img src={logo} style={{ height: '3.5rem', paddingBottom: '5px', paddingRight: '15px' }} />
                            서울대학교 컴퓨터공학부
                        {/* Seoul National University{"\n"}
                        Dept. of Computer Science and Enginerring */}
                        </Link>

                    </Col>
                    <Col span={16}>{this.renderMenu2()}</Col>
                </Row>
            </div>

        );
    }
}
