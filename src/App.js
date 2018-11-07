import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'ress';

import Header from './components/organisms/header';
import Top from './containers/top';
import Footer from './components/organisms/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Router>
            <Header></Header>
          </Router>
          <Route path='/' exact component={Top}/>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
