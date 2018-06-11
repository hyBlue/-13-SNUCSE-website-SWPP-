import React from 'react';
import PropTypes from 'prop-types';

import AboutClubs from '../AboutClubs';
import AboutContact from '../AboutContact';
import LoginForm from '../LoginForm/LoginForm';

const Auth = props =>
  <main>
    Auth Part!
    <div>
      <LoginForm />
    </div>
  </main>;

Auth.propTypes = {
  authType: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
}

export default Auth;
         
              
