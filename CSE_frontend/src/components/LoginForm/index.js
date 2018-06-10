import { connect } from 'react-redux';

import Container from './container';
import { actionCreators as userActions } from 'redux/modules/users';

const mapStateToProps = (state, ownProps) => {
  const { users: { authErr}} = state;
  if (authErr) {
    return { authErr: true };
  } else {
    return { authErr: false };
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
