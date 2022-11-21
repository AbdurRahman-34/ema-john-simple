// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChU1uswalN9Hks-nqnKcZ36g0lg8b9fOI",
  authDomain: "ema-john-simple-ecd6e.firebaseapp.com",
  projectId: "ema-john-simple-ecd6e",
  storageBucket: "ema-john-simple-ecd6e.appspot.com",
  messagingSenderId: "989284134093",
  appId: "1:989284134093:web:fa17027a2296a2fc610d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

