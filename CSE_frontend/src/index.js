import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import 'draft-js/dist/Draft.css';
import 'babel-polyfill';

import MembersPage from './components/MembersCategory/MembersPage';
import ReservationPage from './components/ReservationCategory/ReservationPage';
import MainNavigateBar from './components/MainNavigateBar';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutCategory/AboutPage';
import AcademicPage from './components/AcademicCategory/AcademicPage';
import AdmissionPage from './components/AdmissionCategory/AdmissionPage';
import ResearchPage from './components/ResearchCategory/ResearchPage';
import NoticeCreate from './components/NoticeCategory/NoticeCreate';
import NoticeNewsPage from './components/NoticeCategory/NoticeNewsLayOut';
import NoticeDetail from './components/NoticeCategory/NoticeDetail';
import Login from './components/Login';
import NewsDetail from './components/NoticeCategory/NewsDetail';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div style={{height: '100%', width: '100%'}}>
        <Layout style={{height: "100vh", width: '100%'}}>
          <Header style={{height: '120px', lineHeight: '120px'}}>
            <MainNavigateBar />
          </Header>
          <Content>
            <Switch>
              <Route path="/sign_in" component={Login} />
              <Route path="/about/:category" component={AboutPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/academic/:category" component={AcademicPage} />
              <Route path="/academic" component={AcademicPage} />
              <Route path="/admissions/:category" component={AdmissionPage} />
              <Route path="/admissions" component={AdmissionPage} />
              <Route path="/research/:category" component={ResearchPage} />
              <Route path="/research" component={ResearchPage} />
              <Route path="/notice/new" component={NoticeCreate} />
              <Route path="/notice/:id" component={NoticeDetail} />
              <Route path="/news/:id" component={NewsDetail} />
              <Route path="/notice_news/:category/:postId?" component={NoticeNewsPage} />
              <Route path="/noitce_news" component={NoticeNewsPage} />
              <Route path="/members/:category" component={MembersPage} />
              <Route path="/members" component={MembersPage} />
              <Route path="/reservation/:category/:roomkey?" component={ReservationPage} />
              <Route path="/reservation" component={ReservationPage} />
              <Route path="/" component={MainPage} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
