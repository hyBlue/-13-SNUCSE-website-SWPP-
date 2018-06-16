import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Tabs, List, Row, Col, Table, Spin } from 'antd';
const Search = Input.Search;

export default class NewsListRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            loading: true
        }
    }
    componentDidMount() {
        //It's currently the best loading action...
        setTimeout(function() {this.setState({loading:false})}.bind(this), 350)
    }

    //공지 리스트 만들기
    renderNews() {
        return _.map(this.props.newss, news => {
            return (
                <tr key={news.id}>
                    <td style={{ textAlign: 'center' }}>{news.id}</td>
                    <td>
                        <Link to={`/news/${news.id}`}>
                            {news.title}
                        </Link>
                    </td>
                    <td>{news.created_at.substring(0, 10)}</td>
                    <td style={{ textAlign: 'center' }}>{news.view}</td>
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
            render: (text, news) =>  <Link to={`/news/${news.id}`}>{text}</Link>
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
        return (<Table loading={this.state.loading} dataSource={_.values(_.mapValues(this.props.newss, element => 
            { let news = element; news['key']=element.id; return news;}))}
            columns={columns}
            pagination={{pageSize: 15, showSizeChanger: true}} 
        />);
    }
   
    render() {
        const { newss } = this.props;
        if (!newss) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}
