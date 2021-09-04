import { connect } from 'react-redux';
import LessonRequestPage from '../components/LessonRequestPage';
import { requestLesson } from '../redux/actions/lessonActions';

const dispatchStateToProps = {
  requestLesson,
};

export default connect(null, dispatchStateToProps)(LessonRequestPage);