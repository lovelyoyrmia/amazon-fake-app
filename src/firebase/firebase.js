import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyBaI44s7hauphtW8qy6zGfVckQOYWMOT2A",
  authDomain: "clone-e461b.firebaseapp.com",
  projectId: "clone-e461b",
  storageBucket: "clone-e461b.appspot.com",
  messagingSenderId: "67464670766",
  appId: "1:67464670766:web:0e9937dffb71aa86e739bf",
  measurementId: "G-SXW86S62H6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
