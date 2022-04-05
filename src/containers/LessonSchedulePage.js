import { connect } from 'react-redux';
import LessonSchedulePage from '../components/LessonSchedulePage';
import { loadLessons } from '../redux/actions/lessonActions';

function mapStateToProps(state) {
  return {
    lessons: state.lessons
  };
}

const dispatchStateToProps = {
  loadLessons,
};

export default connect(mapStateToProps, dispatchStateToProps)(LessonSchedulePage);