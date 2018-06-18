import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchMainNews, fetchMainNotices } from '../actions';
import { Carousel, Row, Col, Card, Spin } from 'antd';
import forSlider1 from '../../icons/forSlider1.jpg';
import forSlider2 from '../../icons/forSlider2.jpg';
import forSlider3 from '../../icons/forSlider3.jpg';
import forSlider4 from '../../icons/forSlider4.jpg';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      ntag: 0,
    };
  }

  componentDidMount() {
    this.props.fetchMainNotices(10);
    this.props.fetchMainNews(6);
  }

  renderBackgrounImgSlider() {

    return (
      <Carousel autoplay effect="fade">
        <div>
          <img src={forSlider1} style={{ width: '100%' }} />
        </div>
        <div>
          <img src={forSlider2} style={{ width: '100%' }} />
        </div>
        <div>
          <img src={forSlider3} style={{ width: '100%' }} />
        </div>
        <div>
          <img src={forSlider4} style={{ width: '100%' }} />
        </div>
      </Carousel>
    );
  }

  renderGridCardNews() {    
    const gridStyle = {
      width: '30%',
      height: '50%',
      textAlign: 'center',
      padding: '25px 25px 45px 25px',
    };
    return _.map(this.props.news, news => {
      return (
        <Card.Grid key={news.id} style={gridStyle}>
          <Link to={`/News/${news.id}`}>
          <img src={news.image} style={{width:'100%', height:'100%'}}/>
          <div className="newsTitle" style={{textOverflow: 'ellipsis', fontSize: '1.2rem', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px', wordWrap: 'normal', textDecoration: 'none', color: '#000'}}>{news.title}</div>
          </Link>
        </Card.Grid>
      )
    }) 
  }
  renderNotice() {    
    return _.map(this.props.notices, notice => {
      return (
        <div key={notice.id}>
          <Row style={{padding: '5px'}}>
            <Col span={16} style={{paddingLeft: '15px', fontSize: '1.2rem'}}>
              <Link to={`/notice/${notice.id}`}>
                <div style={{textOverflow: 'ellipsis', fontSize: '1.2rem', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px', wordWrap: 'normal', textDecoration: 'none', color: 'royalblue'}}>
                  {notice.title}
                </div>
              </Link>
            </Col>
            <Col span={8}>
              <p  style={{textAlign: 'right', margin: '0', paddingTop: '17px'}}>{notice.created_at.substring(0, 10)}</p>
            </Col>
          </Row>
        </div>
      );
    });
  }

  render() {
    const { notices, news } = this.props;
    if (!notices || !news) {
      return <Spin />;
    }
    
    return (
      <div>
        <Row>{this.renderBackgrounImgSlider()}</Row>
        <Row style={{ height: '660px' }}>
          <Col className='mainPostsContainer' span={14}>
            <Card className='mainPostsList' title="새 소식" extra={<Link to="/notice_news/news">더보기</Link>} >
               {this.renderGridCardNews()}
            </Card>
          </Col>
          <Col className='mainPostsContainer' span={10}>
            <Card className='mainPostsList' title="공지사항" extra={<Link to="/notice_news/notice">더보기</Link>} >
              {this.renderNotice()} 
            </Card>
          </Col>
        </Row>
        <div className='main-login'>
          <Link to={`/sign_in`}>
            Login
          </Link>
        </div>
      </div >
    );
  }
}

function mapStateToProps({ mainItems }) {
  return { notices: mainItems.notices, news: mainItems.news, }
}

export default connect(mapStateToProps, { fetchMainNews, fetchMainNotices })(MainPage);
