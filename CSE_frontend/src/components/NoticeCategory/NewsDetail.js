import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import { Row, Col, Card, Button} from 'antd';
import renderHTML from 'react-render-html';

class NewsDetail extends Component {
    componentDidMount() {
        //optional: if(!this.props.post)
        const { id } = this.props;
        this.props.fetchNews(id);
    }

    // onDeleteClick() {
    //     const { id } = this.props.match.params;
    //     this.props.deleteNews(id, () => {
    //         this.props.history.push('/news');
    //     });
    // }

    onUpdateClick() {
        const { id } = this.props;
        this.props.history.push(`/news/${id}/update`);
    }

    render() {
        const { News } = this.props;
        if (!News) {
            return <div>해당되는 새소식이 없습니다.</div>;
        }
        return (
            <div className="post">
                <div style={{ background: '#6b9a79', padding: '2px' }}>
                    <Card title={News.title} bordered={false} style={{ width: '100%', padding: '10px' }}
                            cover={<img alt="example" src={News.image} style={{width:'300px', height: '300px', margin: '10px'}}/>}>
                        <Row style={{ fontSize: '8px', marginBottom: '15px', padding: '5px' }}>
                            <p>작성일: {News.created_at.substring(0, 10)}</p>
                        </Row>
                        <div style={{fontSize: '1rem'}}>
                            {renderHTML(News.content)}
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ news }, ownProps) {
    return { News: news[ownProps.id] };
}
export default connect(mapStateToProps, { fetchNews, })(NewsDetail);