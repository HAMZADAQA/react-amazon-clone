import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBNOGvdVUgxUn8jc1-lCHyPm8_uqPNIlxQ",
        authDomain: "clone-db775.firebaseapp.com",
        databaseURL: "https://clone-db775.firebaseio.com",
        projectId: "clone-db775",
        storageBucket: "clone-db775.appspot.com",
        messagingSenderId: "199937401327",
        appId: "1:199937401327:web:297abdf38dff423f81561a",
        measurementId: "G-FQ3T1TLSSP"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
