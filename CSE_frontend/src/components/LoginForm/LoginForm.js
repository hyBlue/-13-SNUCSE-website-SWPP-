import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => 
  <div>
    <h1>Login</h1>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      {props.authErr && <span>Invalid username or password</span>}
      <input type="submit" value="Log in"/>
    </form>
  </div>;

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  authErr: PropTypes.bool.isRequired,
};

export default LoginForm;
