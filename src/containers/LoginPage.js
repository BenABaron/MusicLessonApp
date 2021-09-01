import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { loginUser } from '../redux/actions/lessonActions';

const dispatchStateToProps = {
  loginUser
};

export default connect(null, dispatchStateToProps)(LoginPage);