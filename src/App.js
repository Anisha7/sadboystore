import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home'
import Store from './components/Store'
import Item from './components/Item'

class App extends Component {

  render() {
    return (
      <div className="wrapper">
            <Router>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/store">
                    <Store />
                  </Route>
                  {/* <Route path="/store/:item">
                    <Item />
                  </Route> */}
                  <Route path="/item/:item" component={Item} />
              </Switch>
            </Router>
          </div>
    )
  }
}

export default App;
