import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class Admissions extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">입학 안내</h2>
                <div style={{ background: '#E8E8E8', padding: '30px', fontFamily: 'Nanum Gothic, sans-serif'}}>
대학 신입생은 수시모집, 대학수학능력시험 응시 후 지원하는 정시모집으로 나누어 선발하며, 컴퓨터공학부 신입생은 수시 80%, 정시 20% 정도의 비율로 모집합니다. 학부 입시는 대학본부 주관으로 이루어지며, 자세한 사항은 <a href='http://admission.snu.ac.kr/index.html'>서울대학교 입학관리본부</a>에서 확인하실 수 있습니다.<br /><br />
대학원 신입생은 전기, 후기로 나누어 선발하며, 학사학위를 지원자격으로 하는 석사 및 석사박사통합과정, 석사학위를 지원자격으로 하는 박사과정으로 구분하여 모집합니다. 대학원 입시는 학부 주관으로, 컴퓨터공학부 행정실을 통해 안내받을 수 있습니다. 자세한 일정은 <Link to={`/notice`}>공지사항 게시판</Link>에 공고됩니다.
                </div>
            </div>
        )
    }
}

export default Admissions;
