import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Row, Col } from 'antd';

export default class MainNavigateBar extends Component {

    renderMenu() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }} className="row">
                <Menu.Item key="0"><Link className="MainCategories" to={'/'}>소개</Link></Menu.Item>
                <Menu.Item className="col" key="1"><Link className="MainCategories" to={'/members'}>구성원</Link></Menu.Item>
                <Menu.Item className="col" key="2"><Link className="MainCategories" to={'/'}>연구</Link></Menu.Item>
                <Menu.Item className="col" key="3"><Link className="MainCategories" to={'/'}>입학</Link></Menu.Item>
                <Menu.Item className="col" key="4"><Link className="MainCategories" to={'/notice'}>공지사항</Link></Menu.Item>
            </Menu>
        );
    }
    renderMenu2() {
        return (
          <Row>
              <Col span={4} className="catBlock text-xs-center" >
              <Link className="MainCategories" to={'/'}>소개</Link></Col>
              <Col span={4} className="catBlock text-xs-center">
              <Link className="MainCategories" to={'/members'}>구성원</Link></Col>
              <Col span={4} className="catBlock  text-xs-center">
              <Link className="MainCategories" to={'/'}>연구</Link></Col>
              <Col span={4} className="catBlock text-xs-center">
              <Link className="MainCategories" to={'/'}>입학</Link></Col>
              <Col span={4} className="catBlock text-xs-center">
              <Link className="MainCategories" to={'/'}>학사</Link></Col>
              <Col span={4} className="catBlock text-xs-center">
              <Link className="MainCategories" to={'/notice'}>공지사항</Link></Col>
          </Row>
        )
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8} className="text-xs-left" style={{ color: '#ffffff', fontSize: '20px' }}>서울대학교 컴퓨터공학부</Col>
                    <Col span={16}>{this.renderMenu2()}</Col>
                </Row>
            </div>

        );
    }
}