// Import the functions you need from the SDKs you need
console.log("Firebase.js loaded");


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkpxckWm_WRGUguqBYwBShq0ubTs8Hnnk",
    authDomain: "unreal-4be35.firebaseapp.com",
    projectId: "unreal-4be35",
    storageBucket: "unreal-4be35.appspot.com",
    messagingSenderId: "672534894590",
    appId: "1:672534894590:web:2bb5821bdd65d6b51092af",
    measurementId: "G-KDSYJBV6FH"
  };

  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
};