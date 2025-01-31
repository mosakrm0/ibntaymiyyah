// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7GRyVNbJr6teTwEzkkxr-Mg6BByGQt14",
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

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
  document.getElementById('theme-icon').textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

function setTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('theme-icon').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', setTheme);