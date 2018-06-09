import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AboutCSE from '../AboutCSE';
import AboutCareer from '../AboutCareer';
import Auth from '../Auth/Auth';

const App = props => [
  props.isLoggedIn ? <PrivateRoutes key={1} /> : <PublicRoutes key={2} />,
]

const PrivateRoutes = props => (
  <Switch>
    <Route path="/login" component={AboutCSE} />
  </Switch>
)

const PublicRoutes = props => (
  <Switch>
    <Route path="/login" component={Auth} />
  </Switch>
)

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default App;

//export default connect(mapStateToProps)(
