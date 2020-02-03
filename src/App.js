import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home'
import Store from './components/Store'

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
                    <Store />
                  </Route>
              </Switch>
            </Router>
          </div>
    )
  }
}

export default App;
