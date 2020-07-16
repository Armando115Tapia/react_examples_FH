import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { DCScreen } from '../components/dc/DCScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}></Route>
          <Route exact path="/hero/:heroeId" component={HeroeScreen}></Route>
          <Route exact path="/dc" component={DCScreen}></Route>
          <Route exact path="/search" component={SearchScreen}></Route>
          <Redirect to="/marvel"></Redirect>
        </Switch>
      </div>
    </>
  );
};
