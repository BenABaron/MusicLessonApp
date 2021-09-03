import { connect } from 'react-redux';
import RegistrationPage from '../components/RegistrationPage';
import { createUser } from '../redux/actions/userActions';

const dispatchStateToProps = {
  createUser
};

export default connect(null, dispatchStateToProps)(RegistrationPage);