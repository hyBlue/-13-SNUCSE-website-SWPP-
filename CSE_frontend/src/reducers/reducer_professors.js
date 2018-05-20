import _ from 'lodash';
import { FETCH_PROFESSORS, } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PROFESSORS: 
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
