import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Input, Tabs, List, Row, Col, Table, Spin } from 'antd';
import { fetchNotices, fetchTags }  from '../../actions';
const Search = Input.Search;

class NoticeListRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeList: [],
        }
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

    renderList() {
        const columns = [{
            title: '번호',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            //To show data in Desc order
            sorter: (a, b) => b.id - a.id,
            sortOrder: true
        }, {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text, notice) => <Link to={`/notice_news/notice/${notice.id}`}>{text}</Link>
        }, {
            title: '작성일',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'center',
            render: (text) => text.substring(0, 10),
            //To show data in Desc order
            sorter: (a, b) => b.id - a.id,
            sortOrder: false//temp
        }, {
            title: '조회수',
            dataIndex: 'view',
            key: 'view',
            align: 'center'
        }
        ];
        return (
            <Table 
                dataSource={_.values(_.mapValues(this.props.notices, element => 
                    { let notice = element; notice['key'] = element.id; return notice; }))}
                columns={columns}
                pagination={{ pageSize: 15, showSizeChanger: true, onChange: () => {} }}
            />
        );
    }

    render() {
        const { loading } = this.props;

        if (loading) {
            return <Spin />;
        }
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

// function mapStateToProps({ notices }) {
//     console.log(notices);
//     return { notices }
// }

export default connect(null, { fetchNotices, fetchTags })(NoticeListRender);
