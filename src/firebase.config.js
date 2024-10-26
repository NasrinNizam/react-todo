// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA7xKPeKqt0MzkKd4-ouYt8u1UaXqQOyw",
  authDomain: "login-8e901.firebaseapp.com",
  projectId: "login-8e901",
  storageBucket: "login-8e901.appspot.com",
  messagingSenderId: "354052723786",
  appId: "1:354052723786:web:ee28b7a035899b67c302b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default app