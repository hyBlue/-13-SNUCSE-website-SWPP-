import _ from 'lodash';
import { FETCH_PROFESSORS, FETCH_STAFFS } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PROFESSORS: 
            return {professors: _.mapKeys(action.payload.data, 'id')};
        case FETCH_STAFFS:
            return {staffs: _.mapKeys(action.payload.data, 'id')};
        default:
            return state;
    }
}
