import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import MainNavigateBar from './components/MainNavigateBar';
import MainPage from './components/MainPage';
import AboutCSE from './components/AboutCSE';
import AboutGreetings from './components/AboutGreetings';
import AboutHistory from './components/AboutHistory';
import AboutCareer from './components/AboutCareer';
import AboutClubs from './components/AboutClubs';
import AboutClubGuardian from './components/clubs/AboutClubGuardian';
import AboutClubBacchus from './components/clubs/AboutClubBacchus';
import AboutClubSoccer301 from './components/clubs/AboutClubSoccer301';
import AboutClubStein from './components/clubs/AboutClubStein';
import AboutClubSnups from './components/clubs/AboutClubSnups';
import AboutClubWaffle from './components/clubs/AboutClubWaffle';
import AboutClubUpnl from './components/clubs/AboutClubUpnl';
import AboutFacilities from './components/AboutFacilities';
import AboutFacilityOffice from './components/facilities/AboutFacilityOffice';
import AboutFacilitySlab from './components/facilities/AboutFacilitySlab';
import AboutFacilityHWlab from './components/facilities/AboutFacilityHWlab';
import AboutFacilityHaedong from './components/facilities/AboutFacilityHaedong';
import AboutFacilitySWlab from './components/facilities/AboutFacilitySWlab';
import AboutFacilitySeminarroom from './components/facilities/AboutFacilitySeminarroom';
import AboutFacilityServerroom from './components/facilities/AboutFacilityServerroom';
import AboutFacilityStudentroom from './components/facilities/AboutFacilityStudentroom';
import AboutContact from './components/AboutContact';
import AboutDirections from './components/AboutDirections';
import UnderGraduate from './components/UnderGraduate';
import UnderCourses from './components/undergraduate/UnderCourses';
import UnderDependency from './components/undergraduate/UnderDependency';
import UnderRecommended from './components/undergraduate/UnderRecommended';
import UnderGeneralReq from './components/undergraduate/UnderGeneralReq';
import UnderDegreeReq from './components/undergraduate/UnderDegreeReq';
import UnderCourseChanges from './components/undergraduate/UnderCourseChanges';
import UnderScholarships from './components/undergraduate/UnderScholarships';
import NoticeCreate from './components/NoticeCreate';
import NoticeUpdate from './components/NoticeUpdate';
import NoticeDetail from './components/NoticeDetail';
import NoticeList from './components/NoticeList';
import Login from './components/Login';
import ProfessorsList from './components/ProfessorsList';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

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
              <Route path="/sign_in" component={Login} />
              <Route path="/about/CSE" component={AboutCSE} />
              <Route path="/about/greetings" component={AboutGreetings} />
              <Route path="/about/history" component={AboutHistory} />
              <Route path="/about/career-options" component={AboutCareer} />
              <Route path="/about/student-clubs" component={AboutClubs} />
              <Route path="/about/student-club/가디언" component={AboutClubGuardian} />
              <Route path="/about/student-club/바쿠스" component={AboutClubBacchus} />
              <Route path="/about/student-club/사커301" component={AboutClubSoccer301} />
              <Route path="/about/student-club/슈타인" component={AboutClubStein} />
              <Route path="/about/student-club/스눕스" component={AboutClubSnups} />
              <Route path="/about/student-club/와플스튜디오" component={AboutClubWaffle} />
              <Route path="/about/student-club/유피넬" component={AboutClubUpnl} />
              <Route path="/about/facilities" component={AboutFacilities} />
              <Route path="/about/facility/학부-행정실" component={AboutFacilityOffice} />
              <Route path="/about/facility/s-lab" component={AboutFacilitySlab} />
              <Route path="/about/facility/소프트웨어-실험실" component={AboutFacilitySWlab} />
              <Route path="/about/facility/하드웨어-실험실" component={AboutFacilityHWlab} />
              <Route path="/about/facility/해동학술정보실" component={AboutFacilityHaedong} />
              <Route path="/about/facility/학생-공간-및-동아리-방" component={AboutFacilityStudentroom} />
              <Route path="/about/facility/세미나실" component={AboutFacilitySeminarroom} />
              <Route path="/about/facility/서버실" component={AboutFacilityServerroom} />
              <Route path="/about/contact-us" component={AboutContact} />
              <Route path="/about/directions" component={AboutDirections} />
              <Route path="/undergraduate" component={UnderGraduate} />
              <Route path="/undergraduate/courses" component={UnderCourses} />
              <Route path="/undergraduate/course-dependency-graph" component={UnderDependency} />
              <Route path="/undergraduate/recommended-tracks" component={UnderRecommended} />
              <Route path="/undergraduate/general-education-requirements" component={UnderGeneralReq} />
              <Route path="/undergraduate/degree-requirements" component={UnderDegreeReq} />
              <Route path="/undergraduate/course-changes" component={UnderCourseChanges} />
              <Route path="/undergraduate/scholarships" component={UnderScholarships} />
              <Route path="/notice/new" component={NoticeCreate} />
              <Route path="/notice/:id" component={NoticeDetail} />
              {/* <Route path="/notice/:id/update" component={NoticeUpdate} /> */}
              <Route path="/notice" component={NoticeList} />
              <Route path="/news/:id" component={NewsDetail} />
              <Route path="/news" component={NewsList} />
              <Route path="/members" component={ProfessorsList} />
              <Route path="/" component={MainPage} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>


      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
