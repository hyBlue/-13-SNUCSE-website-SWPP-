import React, { Component } from 'react';
import Auth from './Auth';

class Container extends Component {
  state = {
    authType: "login",
  }
  _changeType = () => {
    this.setState(prevState => {
      const { authType } = prevState;
      if (authType === "login") {
        return {
          authType: "signup",
        }
      } else if (authType === "signup") {
        return {
          authType: "login",
        }
      }
    })
  }
  render() {
    const { authType } = this.state;
    return (
      <Auth authType={authType} changeType={this._changeType} />
    )
  }
}

export default Container;
    
