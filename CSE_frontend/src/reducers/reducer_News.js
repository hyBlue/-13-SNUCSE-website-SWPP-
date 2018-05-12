import _ from 'lodash';
import { FETCH_NEWS, FETCH_NEW } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_NEW:
             return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_NEWS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
