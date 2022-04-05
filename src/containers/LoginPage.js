import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { loginUser } from '../redux/actions/userActions';

const dispatchStateToProps = {
  loginUser
};

export default connect(null, dispatchStateToProps)(LoginPage);