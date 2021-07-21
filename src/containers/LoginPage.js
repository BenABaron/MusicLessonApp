import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons,
    users: state.users
  };
}

export default connect(mapStateToProps)(LoginPage);