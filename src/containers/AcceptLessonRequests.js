import { connect } from 'react-redux';
import AcceptLessonRequests from '../components/AcceptLessonRequests';
import { loadLessons } from '../redux/actions/lessonActions';

const dispatchStateToProps = {
  loadLessons,
};

export default connect(null, dispatchStateToProps)(AcceptLessonRequests);