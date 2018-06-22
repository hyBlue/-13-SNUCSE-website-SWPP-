import _ from 'lodash';
import { FETCH_MAINNEWS, FETCH_MAINNOTICES } from '../actions';
//Why _.mapKeys are reversing the order?
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MAINNEWS:   
            //let toSort = _.orderBy(action.payload.data['results'], ['id'], ['desc']);
            return {...state, news: action.payload.data['results']};
        case FETCH_MAINNOTICES: 
            return {...state, notices: action.payload.data['results']};
            // return {...state, notices: _.mapKeys(action.payload.data['results'], 'id')};
        default:
            return state;
    }
}
