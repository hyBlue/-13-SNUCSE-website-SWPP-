import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotices, fetchNews } from '../actions';

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

  renderNotice() {
    const size = _.size(this.props.notices)
    const rev = _.reject(this.props.notices, notice => { return notice.id <= size-5; })
    const rrev = _.chain(rev).reverse().value()

    if (size == 0) {
      return (
        "Loading... Maybe no Notice..."
      );
    }

    return _.map(rrev, notice => {
      return (
        <div>
          <Link to={`/notice/${notice.id}`}>
            {notice.title}
          </Link>
        </div>
      );
    });
  }

  renderNews() {
    const size = _.size(this.props.News)
    const rev = _.reject(this.props.News, New => { return News.id <= size-5; })
    const rrev = _.chain(rev).reverse().value()

    if (size == 0) {
      return (
        "Loading... Maybe no News..."
      );
    }

    return _.map(rrev, New => {
      return (
        <div>
          <Link to={`/News/${New.id}`}>
            {New.title}
          </Link>
        </div>
      );
    });
  }

  render() {
    const { notices } = this.props;
    const { News } = this.props;
    return (
      <div>
        <h3>Welcome to CSE department Homepage</h3>
        <div>
          <img src="/Pic" />
        </div>
        <div className="main-notice">
          <div onClick={() => onTagSelected(tag)} className="main-notice-tag">Tag1</div>
          <div onClick={() => onTagSelected(tag)} className="main-notice-tag">Tag2</div>
          <div onClick={() => onTagSelected(tag)} className="main-notice-tag">Tag3</div>
          <div onClick={() => onTagSelected(tag)} className="main-notice-tag">NoTag</div>
          {this.renderNotice()}
        </div>
        <div className="main-News">
          <div>News</div>
          {this.renderNews()}
        </div>
        <div className="main-login">
          <button>
            <Link to={`/sign_in`}>
              Login
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ notices }) {
  return { notices }
}

export default connect(mapStateToProps, { fetchNotices })(MainPage);
