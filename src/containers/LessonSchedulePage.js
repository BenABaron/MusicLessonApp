import { connect } from 'react-redux';
import LessonSchedulePage from '../components/LessonSchedulePage';
import { loadLessons } from '../redux/actions/lessonActions';

const dispatchStateToProps = {
  loadLessons,
};

export default connect(null, dispatchStateToProps)(LessonSchedulePage);