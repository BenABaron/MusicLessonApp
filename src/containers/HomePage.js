import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { loadLessons, loadAllUsers } from '../redux/actions/lessonActions';

const dispatchStateToProps = {
  loadLessons,
};

export default connect(null, dispatchStateToProps)(HomePage);