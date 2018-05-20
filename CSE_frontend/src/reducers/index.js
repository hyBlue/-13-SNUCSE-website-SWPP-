import { combineReducers } from 'redux';
import NoticesReducer from './reducer_notices';
import NewsReducer from './reducer_news';
import ProfessorsReducer from './reducer_professors';
import TagsReducer from './reducer_tags';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  notices: NoticesReducer,
  news: NewsReducer,
  professors: ProfessorsReducer,
  form: formReducer,
  tags: TagsReducer,
});

export default rootReducer;
