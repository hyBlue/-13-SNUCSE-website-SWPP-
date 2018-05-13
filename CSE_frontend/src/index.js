import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import MainNavigateBar from './components/MainNavigateBar';
import MainPage from './components/MainPage';
import NoticeCreate from './components/NoticeCreate';
import NoticeUpdate from './components/NoticeUpdate';
import NoticeDetail from './components/NoticeDetail';
import NoticeList from './components/NoticeList';
import Login from './components/Login';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div style={{height: '100%'}}>
        <Layout style={{height: '100%', width: '100%'}}>
          <Header>
            <MainNavigateBar />
          </Header>
          <Content>
            <Switch>
              <Route path="/notice/new" component={NoticeCreate} />
              <Route path="/notice/:id" component={NoticeDetail} />
              {/* <Route path="/notice/:id/update" component={NoticeUpdate} /> */}
              <Route path="/notice" component={NoticeList} />
              <Route path="/sign_in" component={Login} />
              <Route path="/" component={MainPage} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>


      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
