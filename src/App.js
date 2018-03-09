import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <ul className="Menu">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
