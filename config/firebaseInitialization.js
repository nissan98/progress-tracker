// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIGxiiKxuMaSzobPZwLLnEJRo8ynAWLw0",
  authDomain: "tinderclone-8e866.firebaseapp.com",
  databaseURL: "https://tinderclone-8e866-default-rtdb.firebaseio.com",
  projectId: "tinderclone-8e866",
  storageBucket: "tinderclone-8e866.firebasestorage.app",
  messagingSenderId: "412472106005",
  appId: "1:412472106005:web:ea1bb9407a749db998421c",
  measurementId: "G-0CWFSECJSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)