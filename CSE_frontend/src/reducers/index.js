import { combineReducers } from 'redux';
import NoticesReducer from './reducer_notices';
import NewsReducer from './reducer_news';
import MembersReducer from './reducer_members';
import TagsReducer from './reducer_tags';
import ReservationReducer from './reducer_reservatoin';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  notices: NoticesReducer,
  news: NewsReducer,
  members: MembersReducer,
  reservation: null,
  form: formReducer,
  tags: TagsReducer,
});

export default rootReducer;
