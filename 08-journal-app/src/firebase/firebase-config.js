import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzh4ix-7lgUfdT-vRjXbHn1CYec8wGDSo',
  authDomain: 'react-app-cursos-fdc36.firebaseapp.com',
  databaseURL: 'https://react-app-cursos-fdc36.firebaseio.com',
  projectId: 'react-app-cursos-fdc36',
  storageBucket: 'react-app-cursos-fdc36.appspot.com',
  messagingSenderId: '111624717920',
  appId: '1:111624717920:web:f39bf41fb5c6e73fcaa505',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
