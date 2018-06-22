import _ from 'lodash';
import { FETCH_NEWSES, FETCH_NEWS } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_NEWS:
             return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_NEWSES:
            // let toSort = _.mapKeys(action.payload.data, 'id');
            // const sortedData = _.orderBy(toSort, ['id'], ['desc']);
            // return sortedData;
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
