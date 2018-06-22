import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class ResearchCenters extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">연구 센터</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-center/컴퓨터연구소`}>컴퓨터연구소</Link>
                        </font>
                        <br /><br />컴퓨터연구소는 국내 여러 대학 간의 공동 연구와 산학 협동 체제 구축을 통한 컴퓨터 관련 신기술 및 미래지향적인 컴퓨터 개발 능력의 확보와 전문 연구 인력의 양성을 목적으로 본교를 비롯한 전국 20여 개 대학의 컴퓨터 관련 학과가 참여한 가운데 1989년에 설립되었다.
                    </Row>
                    <hr></hr>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
                        <font size="4" color="#6a7eff">
                            <Link to={`/research-center/매니코어-프로그래밍-연구단`}>매니코어 프로그래밍 연구단</Link>
                        </font>
                        <br /><br />멀티코어 시대의 가장 큰 난관은 멀티코어/매니코어를 활용하기 위해 프로그래머들이 애플리케이션을 병렬화할 때 겪는 어려움, 즉 프로그래밍 장벽이다. 이를 해결하기 위해서는 좋은 프로그래밍 모델을 프로그래머에게 제공하는 것이 중요한데, 좋은 프로그래밍 모델은 고성능과 쉬운 프로그래밍이라는 두 개의 상충되는 목표를 해결해야 한다. 이에 본 센터에서는 위 목표를 해결하기 위해 고성능 지능형 실행 시스템을 구현을 위해 매진하고 있다.<br /><br />
■ 연구비 지원프로그램: 교육과학기술부/리더연구자지원사업(창의적연구)
                    </Row>
                </div>
            </div>
        )
    }
}

export default ResearchCenters;
