import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutContact extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">찾아오는 길</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    컴퓨터공학부는 서울대학교 관악캠퍼스 제1공학관 (301동)과 제2공학관 (302동)에 있습니다.
                    <br /><br />주소: 08826 서울특별시 관악구 관악로 1 서울대학교 공과대학 컴퓨터공학부
                    <br /><br />전화: (02) 880-7287
                    <font size="4" color="#6a7eff">
                        <br /><br />찾아오는 길<br />
                    </font>
                    &middot;&nbsp;<Link to={`/about/directions/by-public-transit`}>대중교통<br /></Link>
                    &middot;&nbsp;<Link to={`/about/directions/by-car`}>승용차<br /></Link>
                    &middot;&nbsp;<Link to={`/about/directions/from-far-away`}>지방 및 해외</Link>
                </div>

            </div>
        )
    }
}

export default AboutContact;
