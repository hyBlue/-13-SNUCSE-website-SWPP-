import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchTags, fetchTagNotices } from '../../actions';
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

    //전체 공지 리스트 만들기
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
    //카테고리 공지 리스트 만들기
    renderSubNotice(notice) {
        // const noticeList = this.props.notices.map((notice) =>
        return (
            <tr key={notice.substring(0, notice.indexOf(" "))}>
                <td style={{ textAlign: 'center' }}>{notice.substring(0, notice.indexOf(" "))}</td>
                <td>
                    <Link to={`/notice/${notice.substring(0, notice.indexOf(" "))}`}>
                        {notice.substring(notice.indexOf(" "))}
                    </Link>
                </td>
                <td>
                    {/* {notice.created_at.substring(0, 10)} */}
                </td>
                <td style={{ textAlign: 'center' }}>
                    {/* {notice.view} */}
                </td>
            </tr>
        );
        // return (
        //     <tbody>{noticeList}</tbody>
        // );
    }

    renderWholeList(){
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
   
    renderSubList(){
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
          }, 
          {
            title: '작성일',
            dataIndex: 'id',//dummy
            key: 'created_at',
            align: 'center',
            render: (text) => text
          }, {
            title: '조회수',
            dataIndex: 'id',//dummy
            key: 'view',
            align: 'center',
            render: (text) => text
          }
        ];
        return (<Table loading={this.state.loading} dataSource={_.map(this.props.notices, element => { 
                    let notice = {};
                    notice['key']= element.substring(0, element.indexOf(" "));
                    notice['id']= element.substring(0, element.indexOf(" "))
                    notice['title'] = element.substring(element.indexOf(" ")+1); 
                    return notice;
                })}
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
                {this.props.isAll? this.renderWholeList() : this.renderSubList()}
            </div>
        );
        // return (
        //     <div>
        //         <table className="table table-hover" >
        //             <thead>
        //                 <tr>
        //                     <th style={{ textAlign: 'center' }}>번호</th>
        //                     <th>제목</th>
        //                     <th>날짜</th>
        //                     <th style={{ textAlign: 'center' }}>조회수</th>
        //                 </tr>
        //             </thead>
        //             {this.props.isAll ? (<tbody>{this.renderNotice()}</tbody>) : this.renderSubNotice()}
        //         </table>
        //     </div>
        // );
    }
}
