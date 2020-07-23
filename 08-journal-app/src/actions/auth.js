// import { types } from '../types/types';

import Swal from 'sweetalert2';
import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.email));
        dispatch(finishLoading());
      })
      .catch((e) => {
        console.log(e);
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error');
      });
  };
};

export const starRegisterWithEmailPasswordName = (email, password, name) => {
  // como es una tarea asyncrona se debe usar el thunk
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        // console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        // console.log(e);
        Swal.fire('Error', e.message, 'error');
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log('start coogle login');
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, name: displayName },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
