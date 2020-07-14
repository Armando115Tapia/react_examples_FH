import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
            <Route exact path="/" component={HomeScreen}></Route>
            <Redirect to="./"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
