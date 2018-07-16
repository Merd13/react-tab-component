/**
 * Created by Merd MAns on 7/6/18.
 */

// import { combineReducers } from 'redux';
import { SET_POST } from '../actions/index';

const initialPostState = {
  postContext: 'Write your post here!',
};

const posts = (state = initialPostState, action) => {
  switch (action.type) {
    case SET_POST:
      return Object.assign({}, state, {
        postContext: action.post,
      }); // obj[key] = value >> Object.assign(bj, obj, obj)

    default:
      return state;
  }
};

export default posts;

// export default combineReducers({
//   A,
//   B,
//   C,
// });

