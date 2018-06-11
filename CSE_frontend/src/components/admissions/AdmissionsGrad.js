import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AdmissionsGrad extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor: '#e6e5f4', marginBottom: '20px', padding: '10px'}}>
                    <h5>대학원</h5>
                </Row>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
대학원생은 전기모집과 후기모집을 통해 1년에 2번 선발합니다.<br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/admissions/graduate/regular/'>전기/후기 모집</Link><br />
                     </Row>
                </div>
            </div>
        )
    }
}

export default AdmissionsGrad;
