import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchNotices, fetchNewses, fetchNews } from '../actions';
import { Carousel, Row, Col, Card } from 'antd';
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
    this.props.fetchNotices();
    this.props.fetchNewses();
    //    const { id } = this.props.match.parms;
    //   this.props.fetchNews(id);
    this.props.fetchNews(1);
  }

  /*
    onTagSelect(tag) {
      this.setState(() => ({ ntag: tag }));
    }
  */
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
    const size = _.size(this.props.news)
    const rev = _.reject(this.props.news, New => { return New.id <= size - 4; })
    const rrev = _.chain(rev).reverse().value()
    const first_news = _.first(rrev)
    let new_arr = new Array(4)
    let i = 0
    //error handling for img load
    if (rrev.length != 4) {
      return (
        "Loading... Maybe no enough Imgs..."
      );
    }
    _.map(rrev, New => {
      new_arr[i] = New
      i = i + 1
    })
    const gridStyle = {
      width: '50%',
      height: '50%',
      textAlign: 'center',
      padding: '25px 25px 45px 25px',
    };
    return _.map(new_arr, news => {
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
    // const sortedNotices = _.orderBy(this.props.notices, ['created_at'], 'desc');
    const size = _.size(this.props.notices);
    const rev = _.reject(this.props.notices, notice => { return notice.id <= size - 12  ; })
    const rrev = _.chain(rev).reverse().value()

    if (size == 0) {
      return (
        "Loading... Maybe no Notice..."
      );
    }

    return _.map(rrev, notice => {
      return (
        <div key={notice.id}>
          <Row style={{padding: '5px'}}>
            <Col span={16} style={{paddingLeft: '15px', fontSize: '1.2rem'}}>
              <Link to={`/notice/${notice.id}`}>
                {notice.title.length > 10 ? notice.title.substring(0, 10) : notice.title}
              </Link>
            </Col>
            <Col span={8}>
              <p  style={{textAlign: 'right'}}>{notice.created_at.substring(0, 10)}</p>
            </Col>
          </Row>
        </div>
      );
    });
  }

  render() {
    const { notices, news } = this.props;
    if (!notices || !news) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <Row>{this.renderBackgrounImgSlider()}</Row>
        <Row style={{ height: '650px' }}>
          <Col className='mainPostsContainer' span={14}>
            <Card className='mainPostsList' title="새 소식" extra={<Link to="/news">더보기</Link>} >
               {this.renderGridCardNews()}
            </Card>
          </Col>
          <Col className='mainPostsContainer' span={10}>
            <Card className='mainPostsList' title="공지사항" extra={<Link to="/notice">더보기</Link>} >
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

function mapStateToProps({ notices, news, }) {
  return { notices, news, }
}

export default connect(mapStateToProps, { fetchNotices, fetchNewses, fetchNews })(MainPage);
