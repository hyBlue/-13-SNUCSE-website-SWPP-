import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewses } from '../../actions';
import { Button } from 'antd';

class NewsList extends Component {
  componentDidMount() {
      this.props.fetchNewses();
  }

  renderNewses() {
    return _.map(this.props.news, news => {
        return (
            <tr key={news.id}>
                <td>{news.id}</td>
                <td>
                <Link to={`/news/${news.id}`}>
                    {news.title} 
                </Link>
                </td>
                <td>{news.created_at.substring(0,10)}</td>
                <td></td>
            </tr>
        );
    });
}

  render() {
    const { news } = this.props;
    if(!news) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {/* <div className="write-News">
                <Button type="primary">
                    <Link className="btn " to="/">
                        새소식 쓰기
                    </Link></Button>
            </div> */}
            <h5>새 소식</h5>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderNewses()}
                </tbody>
            </table>
        </div>
    );
  }
}

function mapStateToProps({ news }) {
    //console.log(state.Newss);
    return { news };
}

export default connect(mapStateToProps, { fetchNewses })(NewsList);