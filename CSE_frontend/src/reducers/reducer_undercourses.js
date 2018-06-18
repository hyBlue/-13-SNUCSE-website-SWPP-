import _ from 'lodash';
import { FETCH_UNDERCOURSES, FETCH_UNDERCOURSE } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNDERCOURSE:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_UNDERCOURSES:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
