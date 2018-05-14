import { combineReducers } from 'redux';
import NoticesReducer from './reducer_notices';
import NewsReducer from './reducer_news';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  notices: NoticesReducer,
  news: NewsReducer,
  form: formReducer
});

export default rootReducer;
