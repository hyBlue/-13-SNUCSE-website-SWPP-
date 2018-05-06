import { combineReducers } from 'redux';
import NoticesReducer from './reducer_notices';

const rootReducer = combineReducers({
  notices: NoticesReducer,
});

export default rootReducer;
