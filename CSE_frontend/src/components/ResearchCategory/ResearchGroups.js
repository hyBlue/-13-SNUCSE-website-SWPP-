import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class ResearchGroups extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">연구 그룹</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/네트워크-연구-그룹`}>네트워크 연구 그룹</Link>
                        </font>
                        <br /><br />인터넷, 무선LAN, 셀룰라 네트워크, 센서 네트워크를 포함한 모든 유무선 통신 네트워크의 프로토콜과 알고리즘을 연구·개발하고 있다. 구체적으로, 미래 인터넷의 구조 설계, 네트워크 가상화 기술 개발, 이동/무선통신의 자원관리, 인지라디오 시스템 개발, 통신 트래픽 분석, 콘텐츠 네트워크 설계 등 미래의 유무선 통신을 선도할 핵심 기술 개발에 집중하고 있다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/데이터베이스-및-웹-연구-그룹`}>데이터베이스 및 웹 연구 그룹</Link>
                        </font>
                        <br /><br />본 연구 그룹은 시맨틱 기술 및 그 응용에 관한 연구를 수행하고 있다. 시맨틱 기술은 사람이 글이나 그림에 포함된 의미를 이해하고 활용하는 것처럼 컴퓨터가 데이터의 의미를 파악하기 쉽도록 데이터의 표현 방식과 규칙을 정하여 보다 지능적인 처리를 가능하게 하는 기술이다. 구체적으로 온톨로지 모델링 및 저장, 태그 시각화, 태그 추천, 상황인지 기반 추천, 오피니언 마이닝, 시맨틱 기반 검색, 시맨틱 분산 데이터 처리 등을 연구하고 있다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/운영체제-및-분산-시스템-연구-그룹`}>운영체제 및 분산 시스템 연구 그룹</Link>
                        </font>
                        <br /><br />새롭게 개발되는 소프트웨어/하드웨어 구성요소가 총체적으로 결합된 컴퓨터 시스템을, 높은 성능을 보장하면서도 매우 안전하게 만드는 연구를 수행한다. 구체적으로는, 운영체제 내의 소프트웨어 계층을 최적화하고, 컴퓨터 시스템을 외부의 침입이나 공격으로부터 보호하며, 대용량 데이터들을 효과적으로 처리하는 분산/병렬 프레임워크를 구현하고 개선하는 연구를 진행하고 있다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/이론-및-금융공학-연구-그룹`}>이론 및 금융공학 연구 그룹</Link>
                        </font>
                        <br /><br />알고리즘은 컴퓨터과학의 기초분야이며, 특히 컴퓨터 프로그램을 최적화 하는데 있어서 중요하다. 우리 연구그룹에서는 기본적으로 알고리즘과 그것의 최적화에 대해 연구한다. 특히, 현대의 멀티코어와 캐시 구조에 적합한 실용적인 알고리즘과 유전 알고리즘에 대한 연구는 바이러스 감시와 금융공학 등 다양한 응용분야에 활용할 수 있다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/인공지능-연구-그룹`}>인공지능 연구 그룹</Link>
                        </font>
                        <br /><br />인공지능은 사람의 인지, 사고, 기억, 학습을 모사함으로써 효율적으로 문제를 해결하는 방식을 연구하는 컴퓨터공학의 한 분야이다. 본 연구 그룹은 특히 사람과 같이 학습하고 환경 변화에 따라 진화하는 인지 시스템을 연구한다. 현재 컴퓨터 시각, 텍스트마이닝, 비디오분석, 추천 에이전트, 뇌신경망 분석, 생태계 모델링 등 다양한 응용 연구 과제를 수행하고 있다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/임베디드-시스템-연구-그룹`}>임베디드 시스템 연구 그룹</Link>
                        </font>
                        <br /><br />머지않은 미래에 컴퓨터 및 IT 기술이 건설, 환경, 기계, 바이오 기술과 융합되어 사람의 생활 공간 곳곳에서 편리함과 안전함을 제공하게 된다. 현재 급격하게 발전하고 있는 스마트폰과 스마트 테블릿을 잘 관찰하면 이미 이러한 미래의 생활상을 어느 정도 예측할 수 있다. 이러한 기술발전의 정점에 컴퓨터가 건물, 도로, 다리, 자동차, 휴대폰 등에 내장되어 생활 환경에 지능을 부여하도록 하는 스마트 임베디드 시스템이 있다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/컴퓨터-그래픽스-및-HCI-연구-그룹`}>컴퓨터 그래픽스 및 HCI 연구 그룹</Link>
                        </font>
                        <br /><br />컴퓨터 그래픽스와 HCI 기술은 사람과 컴퓨터 간의 원활한 소통을 추구한다. 현대 사회의 수많은 복잡한 문제들이 적절한 시각화와 사람의 뛰어난 시각 인지 능력에 기대어 그 해결에 실마리를 찾아낼 수 있다. 사람 중심의 시각기반 컴퓨터 기술은 사람에게 편리한 컴퓨터, 컴퓨터 계산에 있어서 사람의 능력 활용, 궁극적으로는 사람과 컴퓨터의 협력을 추구한다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-group/프로그래밍-원리-및-소프트웨어-공학-연구-그룹`}>프로그래밍 원리 및 소프트웨어 공학 연구 그룹</Link>
                        </font>
                        <br /><br />소프트웨어의 현재 기술은 미개하다. 미래에는 지금과 같은 수준으로 소프트웨어가 만들어지지 않을 것이다. 소프트웨어 개발에 사용하는 언어는 나날이 상위의 수준으로 올라 갈 것이고, 소프트웨어 개발을 돕는 도구들은 엄밀한 논리의 정교한 지능을 가지고 프로그래머들을 편하게 할 것이다. 따라서 오류 없이 작동할 소프트웨어를 개발하는 비용은 나날이 줄어들 것이고, 소프트웨어 개발자는 밤샘하는 손기술의 고역에서 벗어나 크고 높은 논리의 기획자로 변모할 것이다. 우리는 이러한 미래를 가능하게 하는 연구를 진행한다.
                    </Row>
                </div>
            </div>
        )
    }
}

export default ResearchGroups;
