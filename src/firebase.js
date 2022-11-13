// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMMxVMXX11W-UyIsUPgvHX_65e66xjvMs",
  authDomain: "portfolio-50924.firebaseapp.com",
  projectId: "portfolio-50924",
  storageBucket: "portfolio-50924.appspot.com",
  messagingSenderId: "139077320762",
  appId: "1:139077320762:web:29526937358febb04bb503",
  measurementId: "G-3XKZ60PQ2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
