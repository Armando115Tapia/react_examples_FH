import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        // esta autenticado
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking, setIsLoggedIn]);

  if (cheking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          ></PublicRoute>
          <PrivateRoute
            path="/"
            component={JournalScreen}
            isLoggedIn={isLoggedIn}
          ></PrivateRoute>

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
