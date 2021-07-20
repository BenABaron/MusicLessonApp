import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { loadLessons, loadAllUsers } from '../redux/actions/lessonActions';

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons,
    users: state.users
  };
}

const dispatchStateToProps = {
  loadLessons,
  loadAllUsers
};

export default connect(mapStateToProps, dispatchStateToProps)(HomePage);