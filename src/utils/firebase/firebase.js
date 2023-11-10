// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8jZ0WPr8W4EYFPvwK8Q9ijvPKtQ9OS9c",
  authDomain: "mycot-399602.firebaseapp.com",
  projectId: "mycot-399602",
  storageBucket: "mycot-399602.appspot.com",
  messagingSenderId: "19546507113",
  appId: "1:19546507113:web:bda9b26970963826e59ff8",
  measurementId: "G-MH3Y8S6TZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;