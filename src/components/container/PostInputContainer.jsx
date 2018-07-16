/**
 * Created by Merd Mansourifar on 7/16/18.
 */

import { connect } from 'react-redux';
import { setPost } from '../../actions/index';
import { PostInput } from '../presentational/PostInput.jsx';

const mapStateToProps = state => ({
  postContext: state.postContext,
});

const mapDispatchToProps = dispatch => ({
  setPost: value => dispatch(setPost(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostInput);
