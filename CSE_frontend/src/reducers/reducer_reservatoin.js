import _ from 'lodash';
import { FETCH_RESERVATION, DELETE_RESERVATION } from '../actions';

export default (state = {}, action) => {
    if (action.type === FETCH_RESERVATION) {
        //transform start, end datetype to moment object
        console.log(action.payload.data);
        const newData = _.map(action.payload.data, interval => {
            let newValue = {};
            _.mapKeys(interval, (value, key) => {
                if (key === 'start' || key === 'end') {
                    newValue[key] = moment(value);
                } else {
                    newValue[key] = value;
                }
            });
            return newValue;
        })

        switch (action.subCategory) {
            case 'seminar':
                switch (action.RoomKey) {
                    case '301-417':
                        return { seminar: { '301-417': _.mapKeys(newData, 'id') } };
                    case '301-551':
                        return { seminar: { '301-551': _.mapKeys(newData, 'id') } };
                    case '302-308':
                        return { seminar: { '302-308': _.mapKeys(newData, 'id') } };
                    case '302-309':
                        return { seminar: { '302-309': _.mapKeys(newData, 'id') } };
                    case '302-309-2':
                        return { seminar: { '302-309-2': _.mapKeys(newData, 'id') } };
                    case '301-317':
                        return { seminar: { '301-317': _.mapKeys(newData, 'id') } };
                    case '302-317-3':
                        return { seminar: { '302-317-3': _.mapKeys(newData, 'id') } };
                    default:
                        return state
                }
            case 'lab':
                switch (action.RoomKey) {
                    case 'SoftWareLab':
                        return { lab: { 'SoftWareLab': _.mapKeys(newData, 'id') } };
                    case 'HardWareLab':
                        return { lab: { 'HardWareLab': _.mapKeys(newData, 'id') } };
                    default:
                        return state
                }
            default:
                return state;
        }
    }
    if (action.type === DELETE_RESERVATION) {
        _.omit(state[action.subCategory][action.RoomKey], action.payload)
    }
}
