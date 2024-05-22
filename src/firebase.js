// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaX9QGwZWSzulHzdKAsQs9Mwhld4UeuHk",
  authDomain: "lakesauto-f0954.firebaseapp.com",
  projectId: "lakesauto-f0954",
  storageBucket: "lakesauto-f0954.appspot.com",
  messagingSenderId: "242812646735",
  appId: "1:242812646735:web:813659a208c42c051dc13a",
  measurementId: "G-TS4KP9T3XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const analytics = getAnalytics(app);