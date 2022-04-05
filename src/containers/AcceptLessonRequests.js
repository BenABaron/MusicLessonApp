import { connect } from 'react-redux';
import AcceptLessonRequests from '../components/AcceptLessonRequests';
import { getLessonRequests, acceptLessonRequest } from '../redux/actions/lessonActions';

function mapStateToProps(state) {
  return {
    lessonRequests: state.lessonRequests
  };
}

const dispatchStateToProps = {
  getLessonRequests,
  acceptLessonRequest
};

export default connect(mapStateToProps, dispatchStateToProps)(AcceptLessonRequests);