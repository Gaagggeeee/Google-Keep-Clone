import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3_A_sMzUN4z3dZsqk9q4RFh0uEQ8-L88",
    authDomain: "keep-clone-78eb0.firebaseapp.com",
    projectId: "keep-clone-78eb0",
    storageBucket: "keep-clone-78eb0.appspot.com",
    messagingSenderId: "1021381686153",
    appId: "1:1021381686153:web:bbee47876d23729d7da758",
    measurementId: "G-QS0J557NF6"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;