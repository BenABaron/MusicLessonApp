import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { loadLessons } from '../redux/actions/lessonActions';

const dispatchStateToProps = {
  loadLessons,
};

export default connect(null, dispatchStateToProps)(Dashboard);