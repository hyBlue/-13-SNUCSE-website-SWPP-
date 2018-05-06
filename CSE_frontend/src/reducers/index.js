import { combineReducers } from 'redux';
import NoticesReducer from './reducer_notices';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  notices: NoticesReducer,
  form: formReducer
});

export default rootReducer;
