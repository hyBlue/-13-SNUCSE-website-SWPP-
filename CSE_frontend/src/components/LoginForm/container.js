import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class Container extends Component {
  state = {
    username: "",
    password: "",
  }
  static PropTypes = {
    usernameLogin: PropTypes.func.isRequired,
    authErr: PropTypes.bool.isRequired,
  }
  _handleInputChange = event => {
    const { target: { value, name }} = event;
    this.setState({
      [name]: value,
    })
  }
  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password);
  }
  render() {
    const { username, password } = this.state;
    return <LoginForm
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}
      usernameValue={username}
      passwordValue={password}
      authErr={this.props.authErr}
    />
  }
}

export default Container;
