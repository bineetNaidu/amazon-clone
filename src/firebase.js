import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEYS,
  authDomain: process.env.REACT_APP_FIREBASE_KEYS,
  databaseURL: process.env.REACT_APP_FIREBASE_KEYS,
  projectId: process.env.REACT_APP_FIREBASE_KEYS,
  storageBucket: process.env.REACT_APP_FIREBASE_KEYS,
  messagingSenderId: process.env.REACT_APP_FIREBASE_KEYS,
  appId: process.env.REACT_APP_FIREBASE_KEYS,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
