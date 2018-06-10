import React from 'react';
import PropTypes from 'prop-types';

import AboutClubs from '../AboutClubs';
import AboutContact from '../AboutContact';
import LoginForm from '../LoginForm/LoginForm';

const Auth = props =>
  <main>
    Auth Part!
    <div>
      <div>
        {props.authType === 'signup' && <AboutClub /> }
        {props.authType === 'login' && <LoginForm /> }
      </div>
      <div>
        {props.authType === 'signup' &&
          <p>
            Have an account?
            <span onClick={props.changeType}>
              {" "}Log in
            </span>
          </p>}
        {props.authType === 'login' &&
          <p>
            Don't have an account?
            <span onClick={props.changeType}>
              {" "}Sign up
            </span>
          </p>}
        </div>
      </div>
    </main>;

Auth.propTypes = {
  authType: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
}

export default Auth;
         
              
