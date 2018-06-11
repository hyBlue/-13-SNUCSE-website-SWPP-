import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Tabs, List, Row, Col, Table, Spin } from 'antd';
const Search = Input.Search;

export default class NoticeListRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeList: [],
            loading: true
        }
    }
    componentDidMount() {
        //It's currently the best loading action...
        setTimeout(function() {this.setState({loading:false})}.bind(this), 350)
    }

    //공지 리스트 만들기
    renderNotice() {
        return _.map(this.props.notices, notice => {
            return (
                <tr key={notice.id}>
                    <td style={{ textAlign: 'center' }}>{notice.id}</td>
                    <td>
                        <Link to={`/notice/${notice.id}`}>
                            {notice.title}
                        </Link>
                    </td>
                    <td>{notice.created_at.substring(0, 10)}</td>
                    <td style={{ textAlign: 'center' }}>{notice.view}</td>
                </tr>
            );
        });
    }

    renderList(){
        const columns = [{
            title: '번호',
            dataIndex: 'id',
            key: 'id',
            align: 'center'
          }, {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text, notice) =>  <Link to={`/notice/${notice.id}`}>{text}</Link>
          }, {
            title: '작성일',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'center',
            render: (text) => text.substring(0, 10)
          }, {
            title: '조회수',
            dataIndex: 'view',
            key: 'view',
            align: 'center'
          }
        ];
        return (<Table loading={this.state.loading} dataSource={_.values(_.mapValues(this.props.notices, element => 
            { let notice = element; notice['key']=element.id; return notice;}))}
            columns={columns}
            pagination={{pageSize: 15, showSizeChanger: true}} 
        />);
    }
   
    render() {
        const { notices } = this.props;
        if (!notices) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}
