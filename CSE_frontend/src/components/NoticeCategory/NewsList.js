import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewses } from '../../actions';
import { Card, Spin } from 'antd';
import renderHTML from 'react-render-html';

class NewsList extends Component {

  constructor() {
    super();
  }
 
  componentWillReceiveProps(newProps) {
    if(newProps.news !== this.props.news)
        this.props.fetchNewses();
  }

  renderNewsCards() {
    const gridStyle = {
      width: '30%',
      height: 'auto',
      textAlign: 'center',
      padding: '15px 15px 10px 15px',
    };
    return _.map(this.props.news, news => {
      return (
        <Card.Grid key={news.id} style={gridStyle}>
          <Link to={`/notice_news/news/${news.id}`} >
          <img src={news.image} style={{width:'100%', height:'13rem'}}/>
          <div className="newsTitle" style={{textOverflow: 'ellipsis', fontSize: '1.2rem', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px', wordWrap: 'normal', textDecoration: 'none', color: '#000'}}>{news.title}</div>
          <div
           className="newsContent" style={{height: '3rem', lineHeight: '1rem', textOverflow: 'ellipsis', fontSize: '0.8rem', overflow: 'hidden', textDecoration: 'none', color: '#000'}}>{renderHTML(news.content)}</div>
          </Link>
        </Card.Grid>
      )
    }) 
  }

  render() {
    return (
        <div>
            {/* <div className="pageTitle">새소식</div> */}
            <h2>새소식</h2>
            {this.props.loading && <Spin />}
            {this.renderNewsCards()}
        </div>
    );
  }
}

function mapStateToProps({ news }) {
    //order data by id or createdtime
    const sortedData = _.orderBy(news, ['id'], ['desc']);
    return { news: sortedData };
}

export default connect(mapStateToProps, { fetchNewses })(NewsList);