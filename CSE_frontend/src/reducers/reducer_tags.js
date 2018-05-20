import _ from 'lodash';
import { FETCH_TAGS, } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        //case FETCH_NEWS:
            //  return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_TAGS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
