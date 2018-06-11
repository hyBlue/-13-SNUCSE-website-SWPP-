import _ from 'lodash';
import moment from 'moment';
import { FETCH_RESERVATION, DELETE_RESERVATION } from '../actions';

export default (state = {}, action) => {
    if (action.type == FETCH_RESERVATION) {
        let data = action.payload.data[0];
        if(!data) { return state; }//if no fetched data;

        //transform start, end datetype to moment object
        let newData = _.map(action.payload.data, interval => {
            let newValue = {};
            _.mapKeys(interval, (value, key) => {
                if (key === 'start' || key === 'end') {
                    newValue[key] = moment(value);
                } else {
                    newValue[key] = value;
                }
            });
            return newValue;
        });
        switch (data.category) {
            case 'seminar':
                switch (data.roomkey) {
                    case '301-417':
                        return {...state, seminar: { ...state, '301-417': _.mapKeys(newData, 'id') } };
                    case '301-551':
                        return {...state, seminar: { ...state, '301-551': _.mapKeys(newData, 'id') } };
                    case '302-308':
                        return {...state, seminar: { ...state, '302-308': _.mapKeys(newData, 'id') } };
                    case '302-309':
                        return {...state, seminar: { ...state, '302-309': _.mapKeys(newData, 'id') } };
                    case '302-309-2':
                        return {...state, seminar: { ...state, '302-309-2': _.mapKeys(newData, 'id') } };
                    case '301-317':
                        return {...state, seminar: { ...state, '301-317': _.mapKeys(newData, 'id') } };
                    case '302-317-3':
                        return {...state, seminar: {...state ,'302-317-3': _.mapKeys(newData, 'id') } };
                    default:
                        return state
                }
            case 'lab':
                switch (action.RoomKey) {
                    case 'SoftWareLab':
                        return {...state, lab: {...state, 'SoftWareLab': _.mapKeys(newData, 'id') } };
                    case 'HardWareLab':
                        return {...state, lab: {...state, 'HardWareLab': _.mapKeys(newData, 'id') } };
                    default:
                        return state
                }
            default:
                return state;
        }
    }
    else if (action.type == DELETE_RESERVATION) {
        let newState = { ...state };
        newState[action.payload.category][action.payload.roomkey] = _.omit(state[action.payload.category][action.payload.roomkey], action.payload.id);
        return newState;
    }
    else {
        return state;
    }
}
