import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiTGVmLy5BC9NPoJfoy2c8VjhyhViE1_8",
    authDomain: "challenge-c5837.firebaseapp.com",
    databaseURL: "https://challenge-c5837.firebaseio.com",
    projectId: "challenge-c5837",
    storageBucket: "challenge-c5837.appspot.com",
    messagingSenderId: "729184007994",
    appId: "1:729184007994:web:7c7cc7fabeec42c29c4203",
    measurementId: "G-XH6XW5CE3D"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };




