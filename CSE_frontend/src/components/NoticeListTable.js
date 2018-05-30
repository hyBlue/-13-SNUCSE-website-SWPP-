import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchTags, fetchTagNotices } from '../actions';
import { Button, Input, Tabs } from 'antd';
const Search = Input.Search;

export default class NoticeListTable extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         noticeList: {},
    //         subList: []
    //     }
    // }
    
    constructor(props){
        super(props);
        this.state = {
            noticeList: {},
            subList: []
        }
    }
    componentDidMount() {
        console.log(this.props);
        if(!this.props.isSub){
            this.setState({noticeList: this.props.notices});
        }
        else {
            let list = [];
            this.props.option.forEach(element => {
                list = list.concat(this.props.tags[element].notices)
            });
            this.setState({subList: list});
        }
    }

    //전체 공지 리스트 만들기
    renderNotice() {
        return _.map(this.state.noticeList, notice => {
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
    renderSubNotice() {
        /* !this.props.option[0]===0 is temporary. 고정고지 not ready */
        if(this.props.option[0]===0) { return (<h5>고정 공지 준비중</h5>); }
        const noticeList = this.state.subList.map((notice) => 
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
        )
        return (
            <tbody>{noticeList}</tbody>
        );
    }

    render() {
        const { notices } = this.props;
        if (!notices) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => this.showSearchResult(value)}
                    enterButton
                />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>번호</th>
                            <th>제목</th>
                            <th>날짜</th>
                            <th style={{ textAlign: 'center' }}>조회수</th>
                        </tr>
                    </thead>
                    {!this.props.isSub ? (<tbody>{this.renderNotice()}</tbody>) : this.renderSubNotice()}
                </table>
            </div>
        );
    }
}
