import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotice, deleteNotice } from '../../actions';
import { Row, Col, Card, Button, Icon } from 'antd';
import renderHTML from 'react-render-html';

class NoticeDetail extends Component {
    componentDidMount() {
        //optional: if(!this.props.post)
        const { id } = this.props;
        this.props.fetchNotice(id);
    }

    renderAttachFileList(files) {
        let i=0;
        return _.map(files, file => {
            return (<div key={i++}> 
                        <a href={file.attached}
                            download style={{paddingLeft: '14px', fontSize: '1rem'}}><Icon type="link" /> 아리랑{file.name} </a>
                        <span> (12345{file.size}byte) </span>
                    </div>);
        });
    }

    render() {
        const { notice } = this.props;
        if (!notice) {
            return <div>해당되는 공지글이 없습니다.</div>;
        }
        return (
            <div className="post">
                <div style={{ background: '#6b9a79', padding: '2px' }}>
                    <Card title={notice.title} bordered={false} style={{ width: '100%', padding: '10px' }}>
                        <Row style={{ fontSize: '8px', marginBottom: '15px', padding: '5px' }}>
                            <p>작성자: {notice.author}, 작성일: {notice.created_at.substring(0, 10)}, 조회: {notice.view} </p>
                        </Row>
                        {notice.attached && notice.attached[0] &&
                            <div> 첨부파일
                              {this.renderAttachFileList(notice.attached)}
                            <br /></div>}
                        <div style={{fontSize: '1rem'}}> {renderHTML(notice.content)} </div>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ notices }, ownProps) {
    return { notice: notices[ownProps.id] };
}
export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);