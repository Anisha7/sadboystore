import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home'

class App extends Component {

  render() {
    return (
      <div className="wrapper">
            <Router>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/store">
                    <div>HELLO, store</div>
                  </Route>
              </Switch>
            </Router>
          </div>
    )
  }
}

export default App;
