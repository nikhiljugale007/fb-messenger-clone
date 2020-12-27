import firebase from 'firebase';


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyD5QxiY0NN2PWcpsuVu_4LZsRwCvq5pzhs",
    authDomain: "fb-messenger-clone-f99c1.firebaseapp.com",
    projectId: "fb-messenger-clone-f99c1",
    storageBucket: "fb-messenger-clone-f99c1.appspot.com",
    messagingSenderId: "38048655190",
    appId: "1:38048655190:web:b577b9fdffd6735e1f58f7",
    measurementId: "G-HDXJCZ0T01"
  });

const db = firebaseApp.firestore();

export  default db;    