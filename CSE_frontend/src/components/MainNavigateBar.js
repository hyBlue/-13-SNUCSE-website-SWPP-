import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Divider, Button, Menu, Dropdown, Icon, Row, Col, Popover } from 'antd';

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
                <Menu.Item key={item.key}><Link className="MainCategories" to={'/'}>{item.title}</Link></Menu.Item>
            )
        })
    }
    renderMenu2() {
        return (
            <Row>
                <Col span={4} className="catBlock text-xs-center" >
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '학부소개' }, { key: 1, title: '학부장' }, { key: 2, title: '연혁' },
                    { key: 3, title: '졸업생' }, { key: 4, title: '진로' }, { key: 5, title: '동아리 소개' }, { key: 6, title: '시설안내' },
                    { key: 7, title: '연락처' }, { key: 8, title: '찾아오는 길' }])}>
                        <Link className="MainCategories" to={'/'}>
                            소개</Link></Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '교수진' }, { key: 1, title: '역대 교수진' }, { key: 2, title: '행정직원' }])}>
                        <Link className="MainCategories" to={'/members'}>구성원</Link>
                    </Dropdown>
                </Col>
                <Col span={4} className="catBlock  text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu([{ key: 0, title: '연구 그룹' }, { key: 1, title: '연구 센터' }, { key: 2, title: '연구실 목록' }, { key: 3, title: 'CSE Top Conference List' }])}>
                        <Link className="MainCategories" to={'/'}>연구</Link></Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu2({ groupTitle: '학부', items: [{ key: 0, title: '수시 모집' }, { key: 1, title: '정시 모집' }, { key: 2, title: '학사 편입학' },] },
                        { groupTitle: '대학원', items: [{ key: 3, title: '전기/후기 모집' }] })}>
                        <Link className="MainCategories" to={'/'}>입학</Link>
                    </Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Dropdown placement="bottomCenter" overlay={this.renderSubMenu2({ groupTitle: '학부', items: [{ key: 0, title: '교과목 정보' }, { key: 1, title: '선수 교과목' }, { key: 2, title: '전공 이수 표준 형태' }, { key: 3, title: '필수 교양 과목' }, { key: 4, title: '졸업 규정' }, { key: 5, title: '교과목 변경 내역' }, { key: 6, title: '장학제도' },] },
                        { groupTitle: '대학원', items: [{ key: 7, title: '교과목 정보' }, { key: 8, title: '교과목 변경내역' }, { key: 9, title: '장학제도' }] })}>
                        <Link className="MainCategories" to={'/'}>학사</Link>
                    </Dropdown>
                </Col>
                <Col span={4} className="catBlock text-xs-center">
                    <Link className="MainCategories" to={'/notice'}>공지사항</Link></Col>
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

    render() {
        return (
            <div>
                <Row>
                    <Col span={8} className="text-xs-left" style={{ color: '#ffffff', fontSize: '20px' }}>
                        서울대학교 컴퓨터공학부
                    </Col>
                    <Col span={16}>{this.renderMenu2()}</Col>
                </Row>
            </div>

        );
    }
}