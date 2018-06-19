import _ from 'lodash';
import { FETCH_NOTICES, FETCH_NOTICE, DELETE_NOTICE } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_NOTICE:
            return _.omit(state, action.payload);
        case FETCH_NOTICE:
            //     // const post = action.payload.data;
            //     // const newState = { ...state };
            //     // newState[post.id] = post;
            //     // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_NOTICES:
            // const data = _.mapKeys(action.payload.data, 'id');
            // console.log(_.sortBy(data, (a,b) => { return a['id'] - b['id']}
            // ));
            // return action.payload.data;  
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
