import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import UserSeached from './Pages/UserSearched';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={UserSeached} />
      </Switch>
    </Router>
  );
}

export default Routes;
