import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchNewses, fetchNews } from '../actions';
import { Carousel, Row, Col, Card } from 'antd';


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
  renderImgSlider() {
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

    return (
      <Carousel effect="fade">
        <div>
          <Card title={new_arr[0].title}  style={{ width: '100%', padding: '10px' }} cover={<img alt="example" style={{width: '100%', height: '600px'}} src={new_arr[0].image} />}>
          </Card>
        </div>
        <div>
          <Card title={new_arr[1].title} bordered={false} style={{ width: '100%', padding: '10px' }} cover={<img alt="example" style={{width: '100%', height: '600px'}} src={new_arr[1].image} />}>
          </Card>
        </div>
        <div>
          <Card title={new_arr[2].title} bordered={false} style={{ width: '100%', padding: '10px' }} cover={<img alt="example" style={{width: '100%', height: '600px'}} src={new_arr[2].image} />}>
          </Card>
        </div>
        <div>
          <Card title={new_arr[3].title} bordered={false} style={{ width: '100%', padding: '10px' }} cover={<img alt="example" style={{width: '100%', height: '600px'}} src={new_arr[3].image} />}>
          </Card>
        </div>
      </Carousel>
    );

/*
    return (
      _.map(rrev, New => {
      return (
        <div key={New.id}>
          <Card title={New.title} bordered={false} style={{ width: '100%', padding: '10px' }} cover={<img alt="example" src={New.image} />}>
          </Card>
        </div>
      );
      })
    );
*/
/*
    return (
      <Carousel autoplay>
        <div>
          1
        </div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
*/
  }
  renderNotice() {
    const size = _.size(this.props.notices)
    const rev = _.reject(this.props.notices, notice => { return notice.id <= size - 10; })
    const rrev = _.chain(rev).reverse().value()

    if (size == 0) {
      return (
        "Loading... Maybe no Notice..."
      );
    }

    return _.map(rrev, notice => {
      return (
        <div key={notice.id}>
          <Row>
            <Col span={16}>
              <Link to={`/notice/${notice.id}`}>
                {notice.title.length > 10 ? notice.title.substring(0,10) : notice.title}
              </Link>
            </Col>
            <Col span={8}>
              <p>{notice.created_at.substring(0, 10)}</p>
            </Col>
          </Row>
        </div>
      );
    });
  }

  renderNews() {
    //프로퍼티 이름변경 News -> news
    const size = _.size(this.props.news)
    const rev = _.reject(this.props.news, New => { return New.id <= size - 10; })
    const rrev = _.chain(rev).reverse().value()

    if (size == 0) {
      return (
        "Loading... Maybe no News..."
      );
    }

    return _.map(rrev, New => {
      return (
        <div key={New.id}>
          <Row>
            <Col span={16}>
              <Link to={`/News/${New.id}`}>
                {New.title.length > 10 ? New.title.substring(0,10) : New.title}
              </Link>
            </Col>
            <Col span={8}>
              <p>{New.created_at.substring(0, 10)}</p>
            </Col>
          </Row>
        </div>

      );
    });
  }

  render() {
    const { notices, news } = this.props;
    if( !notices || !news ) {
      return <div>Loading...</div>;
    }
    return (

      <div>
        <Row>{this.renderImgSlider()}</Row>
        <Row style={{height: '650px'}}>
          <Col className='mainPostsContainer' span={8}>
            {/* 링크변경 */}
            <Card className='mainPostsList' title="새 소식" extra={<Link to="/news">More</Link>} >
              {this.renderNews()}
            </Card>
          </Col>
          <Col className='mainPostsContainer' span={8}>
            <Card className='mainPostsList' title="공지사항" extra={<Link to="/notice">More</Link>} >
              {this.renderNotice()}
            </Card>
          </Col>
          <Col className='mainPostsContainer' span={8}>
            <Card className='mainPostsList' title="준비중" extra={<Link to="/">More</Link>} >
              기다려주세요!
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
