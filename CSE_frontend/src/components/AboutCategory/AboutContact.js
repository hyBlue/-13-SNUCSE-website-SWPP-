import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AboutContact extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">연락처</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <h6>서울대학교 공과대학 컴퓨터공학부</h6>
                    08826 서울특별시 관악구 관악로 1
                    <font size="4" color="#6a7eff">
                        <br /><br />학부 행정실<br />
                    </font>    
                    위치: 301동 316호, 302동 317-2호<br />
                    전화: (02) 880-7287<br />
                    팩스: (02) 886-7589<br />
                    근무 시간: 평일 오전 9시 – 정오, 오후 1시 – 오후 6시<br /><br />
                    <font size="3" color="#6a7eff">
                        대학원 입학 문의&nbsp;&nbsp;&nbsp;ipsi@cse.snu.ac.kr<br />
                        채용정보 게시요청&nbsp;&nbsp;&nbsp;bulletin@cse.snu.ac.kr<br />
                        홈페이지 관리자&nbsp;&nbsp;&nbsp;webmaster@cse.snu.ac.kr
                    </font>
                </div>

            </div>
        )
    }
}

export default AboutContact;
