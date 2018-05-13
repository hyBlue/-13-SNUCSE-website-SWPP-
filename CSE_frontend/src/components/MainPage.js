import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchNews } from '../actions';
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
  }

  /*
    onTagSelect(tag) {
      this.setState(() => ({ ntag: tag }));
    }
  */
  renderImgSlider() {
    return (
      <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
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
                {notice.title}
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
    const size = _.size(this.props.News)
    const rev = _.reject(this.props.News, New => { return News.id <= size - 10; })
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
                {New.title}
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
    const { notices } = this.props;
    const { News } = this.props;
    return (

      <div>
        {this.renderImgSlider()}
        <Row style={{height: '650px'}}>
          <Col className='mainPostsContainer' span={8}>
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
      </div >
    );
  }
}

function mapStateToProps({ notices }) {
  return { notices }
}

export default connect(mapStateToProps, { fetchNotices })(MainPage);
