import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewses } from '../../actions';
import { Card } from 'antd';

class NewsList extends Component {
  componentDidMount() {
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
          <Link to={`/News/${news.id}`} >
          <img src={news.image} style={{width:'100%', height:'10rem'}}/>
          <div className="newsTitle" style={{textOverflow: 'ellipsis', fontSize: '1.2rem', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px', wordWrap: 'normal', textDecoration: 'none', color: '#000'}}>{news.title}</div>
          <p className="newsContent" style={{height: '3rem', lineHeight: '1rem', textOverflow: 'ellipsis', fontSize: '0.8rem', overflow: 'hidden', textDecoration: 'none', color: '#000'}}>{news.content}</p>
          </Link>
        </Card.Grid>
      )
    }) 
  }

  render() {
    const { news } = this.props;
    if(!news) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {/* <div className="pageTitle">새소식</div> */}
            <h2>새소식</h2>
            {this.renderNewsCards()}
        </div>
    );
  }
}

function mapStateToProps({ news }) {
    return { news };
}

export default connect(mapStateToProps, { fetchNewses })(NewsList);