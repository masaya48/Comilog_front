import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'ress';

import Header from './components/organisms/header';
import Top from './containers/top';
import Ranking from './components/pages/ranking';
import Mypage from './components/pages/mypage';
import Exhibit from './components/pages/exhibit';
import ComicDetail from './components/pages/comic-detail';
import Footer from './components/organisms/footer';
import Login from './components/pages/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Router>
            <Header></Header>
          </Router>
          <Route path='/' exact component={Top}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/ranking' exact component={Ranking}/>
          <Route path='/mypage' exact component={Mypage}/>
          <Route path='/exhibit' exact component={Exhibit}/>
          <Route path='/comic' exact component={ComicDetail}/>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
