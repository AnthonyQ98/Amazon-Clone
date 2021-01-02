// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDViUrXF8FgCQics8gGDUs6K7x-uES8MIM",
  authDomain: "ia-5bb99.firebaseapp.com",
  projectId: "ia-5bb99",
  storageBucket: "ia-5bb99.appspot.com",
  messagingSenderId: "956032527728",
  appId: "1:956032527728:web:4555719621b9541cf7b3b5",
  measurementId: "G-WG7EG0TRTP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
