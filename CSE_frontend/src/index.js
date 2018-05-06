import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import MainNavigateBar from './components/MainNavigateBar';
import MainPage from './components/MainPage';
import NoticeCreate from './components/NoticeCreate';
import NoticeDetail from './components/NoticeDetail';
import NoticeList from './components/NoticeList';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <MainNavigateBar />
        <Switch> 
          <Route path="/notice/new" component={NoticeCreate} />
          <Route path="/notice/:id" component={NoticeDetail} />
          <Route path="/notice" component={NoticeList} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
