import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCUIx1KRJnfRisH7ieQSZGPdPLvuGd1jFc",
    authDomain: "database-be57e.firebaseapp.com",
    databaseURL: "https://database-be57e-default-rtdb.firebaseio.com",
    projectId: "database-be57e",
    storageBucket: "database-be57e.appspot.com",
    messagingSenderId: "1048929118094",
    appId: "1:1048929118094:web:bc195f0473a4ea9dc126df",
    measurementId: "G-3GQ2RBZLTK"
  };

  export default firebase.initializeApp(firebaseConfig);