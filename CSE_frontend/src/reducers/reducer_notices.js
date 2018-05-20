import _ from 'lodash';
import { FETCH_NOTICES, FETCH_NOTICE, DELETE_NOTICE, TagTest } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_NOTICE:
            return _.omit(state, action.payload);
        case FETCH_NOTICE:
            //     // const post = action.payload.data;
            //     // const newState = { ...state };
            //     // newState[post.id] = post;
            //     // return newState;
            console.log('fetch_notice');
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_NOTICES:
            return _.mapKeys(action.payload.data, 'id');
        //TEST for getting notices by tag
        case TagTest:
            let testResult = [];
            return new Promise((resolve, reject) => {
                _.map(action.payload, payload => {
                console.log(payload);
                payload.then(object => {
                    testResult.push(object.data);
                })
                }
                
            );
            console.log(testResult);
            resolve(_.mapKeys(testResult, 'id'));
            })
    
        default:
            return state;
    }
}
