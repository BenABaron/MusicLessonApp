import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { loadLessons, loadAllUsers } from '../redux/actions/actions';

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

const dispatchStateToProps = {
  loadLessons,
  loadAllUsers
};

export default connect(mapStateToProps, dispatchStateToProps)(HomePage);