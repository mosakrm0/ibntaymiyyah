// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7GRyVNbJr6teTwEzkkxr",
  authDomain: "ibntaymiyyah.firebaseapp.com",
  projectId: "ibntaymiyyah",
  storageBucket: "ibntaymiyyah.firebasestorage.app",
  messagingSenderId: "638965015131",
  appId: "1:638965015131:web:3c2961de65705cef23157e",
  measurementId: "G-K90X9785KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);