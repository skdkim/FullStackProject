import { connect } from 'react-redux';
import Discover from './discover';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
