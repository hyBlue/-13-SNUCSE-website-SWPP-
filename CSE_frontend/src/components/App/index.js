import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const { users, routing: { location }} = state;
  return {
    isLoggedIn: users.isLoggedIn,
    pathName: location.pathname;
  };
};

export default connect(mapStateToProps)(Container);
