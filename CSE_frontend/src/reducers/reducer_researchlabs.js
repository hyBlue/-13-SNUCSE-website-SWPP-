import _ from 'lodash';
import { FETCH_RESEARCHLABS, FETCH_RESEARCHLAB } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESEARCHLAB:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_RESEARCHLABS:
      return _.mapKeys(action.payload.data['results'], 'id');
    default:
      return state;
  }
}
