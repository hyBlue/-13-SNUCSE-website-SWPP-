import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

class AdmissionsUnder extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">학부</h2>
                <div style={{ background: '#E8E8E8', padding: '10px' }}>
                    <Row style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
고교 졸업생 자격으로 수시 모집과 정시 모집에 지원할 수 있으며, 학사 학위 소지자는 학사 편입학에 지원할 수 있습니다.<br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/admissions/susi/'>수시 모집</Link><br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/admissions/jeongsi/'>정시 모집</Link><br />
                        <font size="5">&middot;</font>&nbsp;<Link to='/admissions/transfer/'>학사 편입학</Link><br />
                     </Row>
                </div>
            </div>
        )
    }
}

export default AdmissionsUnder;
