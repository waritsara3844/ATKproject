import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVc7GhTuXiU-y0X8mjFKICRA5ynRJo9pE",
  authDomain: "atkresult-2d9e3.firebaseapp.com",
  projectId: "atkresult-2d9e3",
  storageBucket: "atkresult-2d9e3.appspot.com",
  messagingSenderId: "991569099747",
  appId: "1:991569099747:web:d8038a4d79f4093e213ed6",
  measurementId: "G-67967NC8HL",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase);
const auth = getAuth(firebase);

console.log("Firebase initialized");

export default boot(({ app }) => {
  app.config.globalProperties.$firebase = firebase;
  app.config.globalProperties.$db = db;
  app.config.globalProperties.$auth = auth;
});

export { firebase, db, auth };
