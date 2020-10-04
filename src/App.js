import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
