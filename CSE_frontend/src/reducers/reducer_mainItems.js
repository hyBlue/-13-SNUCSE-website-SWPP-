import _ from 'lodash';
import { FETCH_MAINNEWS, FETCH_MAINNOTICES } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MAINNEWS: 
            return {...state, news: _.mapKeys(action.payload.data['results'], 'id')};
        case FETCH_MAINNOTICES:
            return {...state, notices: _.mapKeys(action.payload.data['results'], 'id')};
        default:
            return state;
    }
}
