import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import forSlider3 from '../../icons/forSlider3.jpg';

class AboutCSE extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>학부 소개</h5>
                </Row>
                <div>
                    <a className="download" download="./image-about1.jpg" target="_blank">
                        <img className="about" src="./image-about2.jpg" width="100" alt="thumbnail" />
                    </a>
                    <img src={forSlider3} />
                </div>
                <div style={{ background: '#E8E8E8', padding: '30px', fontFamily: 'Nanum Gothic, sans-serif'}}>
서울대학교 컴퓨터공학부(이하 컴퓨터공학부)는 컴퓨터 공학의 기초를 이루는 컴퓨터 구조 및 설계, 소프트웨어시스템, 네트워크, 컴퓨터 이론은 물론 모바일 컴퓨팅, 멀티미디어, 컴퓨터게임, 그래픽스, 내장형 시스템, 바이오 컴퓨팅, 유비쿼터스 컴퓨팅, 전자상거래, 암호 및 보안 등과 같은 첨단의 영역까지 컴퓨터 공학의 <Link to={`/research/groups`}>다양한 분야</Link>를 선도적으로 개척해 나가고 있다.<br /><br />
컴퓨터공학부 교수들은 세계적인 컴퓨터 관련 주요 학회에서 국제학술회의 위원장, 기조 연설자 등으로 활발하게 활동하고 있으며, 또한 국내 외 각종 산업계와도 긴밀하게 협력하여 정부 지원과제나 민간 산업체 지원 연구과제 등을 수행하여 우수한 성과를 내고 있다.<br /><br />
컴퓨터공학부는 미국, 유럽, 일본, 아시아의 여러 우수 대학과 협정을 수립하여 매년 다수의 학생과 교수를 교류하고 있다. 현재 외국인 교수 6명이 학생들의 교육 및 연구를 지도하고 있으며, 다수의 외국인 학부생, 대학원생이 재학 중이다. 전공 필수 과목을 포함하여 30% 이상의 교과목이 영어로 개설되고 있고, International Study Group을 개최하여 외국인 학생들의 학업을 돕는 등 세계화에 앞장서기 위한 학부 차원의 노력을 끊임없이 기울이고 있다.<br /><br />
컴퓨터공학부는 멀티미디어 강의실, 전자도서관, 하드웨어 소프트웨어, 프로젝트 실험실 등 학생지원 시설이 연중 개방하고 있어 컴퓨터공학부의 학생은 언제든지 자유롭게 이용이 가능하다. 개발, 보안, 서버 관리, 프로그래밍 대회 준비 등을 목적으로 하는 다양한 동아리가 활동하고 있으며, 각종 대회나 제공하는 서비스 평가에서 우수한 성적을 기록하고 있다. 또한 수시로 컴퓨터전시회, 컴공인의 밤과 같은 학부차원의 행사 및 학생활동을 주최하여 학생들의 화합을 도모하고 있다.
                </div>
            </div>
        )
    }
}

export default AboutCSE;
