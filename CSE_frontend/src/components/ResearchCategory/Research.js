import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class Research extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">연구</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터관련 주요 학회에서 국제학술지 편집위원, 국제학술회의 위원장, 기조연설자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.<br /><br />
컴퓨터공학부에는 정보통신부, 산업자원부, 과학기술부, 교육부, 서울대학교 등에서 지원하는 4개의 연구센터와 5개의 국가지정연구실이 있으며, 산학협동연구와 국책연구를 위한 별도의 컴퓨터 연구소가 설치되어 있습니다. 이를 바탕으로 컴퓨터공학부는 SCI 논문, 연구 프로젝트 계약 실적에서 세계 최고 명문대학과 어깨를 나란히 하고 있습니다. 컴퓨터공학부는 학문의 기초를 이루는 컴퓨터 구조 및 설계, 소프트웨어 시스템, 네트워크, 컴퓨터 이론은 물론, 모바일 컴퓨팅, 멀티미디어, 게임, 그래픽스, 내장형 시스템, 바이오 컴퓨팅, 유비퀴터스 컴퓨팅, 전자상거래, 암호 및 보안 등과 같은 새로운 분야를 선도적으로 개척해 나가고 있습니다.<br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/research/groups'>연구 그룹</Link><br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/research/centers'>연구 센터</Link><br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/research/labs'>연구실 목록</Link><br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/research/topref'>컴퓨터공학부 Top Conference List</Link><br />
                     </Row>
                </div>
            </div>
        )
    }
}

export default Research;
