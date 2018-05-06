import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainNavigateBar extends Component {
    render() {
        return (
            <div>
                <span className="text-xs-left">서울대학교 컴퓨터공학부</span>
                <span className="topnav" id="myTopnav">
                    <Link className="MainCategories" to={'/'}>소개</Link>
                    <Link className="MainCategories" to={'/'}>입학</Link>
                    <Link className="MainCategories" to={'/'}>연구</Link>
                    <Link className="MainCategories" to={'/notice'}>공지사항</Link>
                </span>
            </div>
        );
    }
}