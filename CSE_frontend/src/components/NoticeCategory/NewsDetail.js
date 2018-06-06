import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import { Row, Col, Card, Button } from 'antd';

class NewsDetail extends Component {
    componentDidMount() {
        //optional: if(!this.props.post)
        const { id } = this.props.match.params;
        this.props.fetchNews(id);
    }

    // onDeleteClick() {
    //     const { id } = this.props.match.params;
    //     this.props.deleteNews(id, () => {
    //         this.props.history.push('/news');
    //     });
    // }

    onUpdateClick() {
        const { id } = this.props.match.params;
        this.props.history.push('/news/id/update');
    }

    render() {
        const { News } = this.props;
        if (!News) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h5>새 소식</h5>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title={News.title} bordered={false} style={{ width: '100%', padding: '10px' }}
                            cover={<img alt="example" src={News.image} />}>
                        <Row style={{backgroundColor: '#E8E8E8', marginBottom: '20px', padding: '10px'}}>
                            <Col span={8}>작성일: {News.created_at.substring(0, 10)} </Col>
                            <Col span={8}>조회: {News.view} </Col>
                        </Row>
                        <p>
                        {News.content}
                        AntFin's projects cover a large number of products of different types and even different orders of magnitude. In order to help designers of various levels to have consistency and similar rhythm in designing page layout, to unify designing language and reduce the restoration losses, Ant Design proposed the concept of UI common scales. From a large amount of practices, we have extracted a set of arrays that can be used as dimensions for UI layout decision. All the numbers are multiples of 8 and have a dynamic sense of rhythm. After verification, it can help us to achieve a faster and better design decision making of layout design.
                        </p>
                    </Card>
                </div>

                <Button type="dashed">
                <Link to="/news" className="btn">목록</Link></Button>
                {/* <Button type="danger" className="btn pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>지우기</Button>
                <Button type="primary" className="btn pull-xs-right"
                    onClick={this.onUpdateClick.bind(this)}>수정하기</Button> */}
            </div>
        )
    }
}

function mapStateToProps({ news }, ownProps) {
    return { News: news[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchNews, })(NewsDetail);