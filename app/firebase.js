// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrXwNOZ_Te7K_LqpFNY_P-ejA147-pMKI",
  authDomain: "expense-tracker-f2133.firebaseapp.com",
  projectId: "expense-tracker-f2133",
  storageBucket: "expense-tracker-f2133.appspot.com",
  messagingSenderId: "1097723409035",
  appId: "1:1097723409035:web:dc74755e79da0ed8fc9a8e",
  measurementId: "G-NZL84H7CF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);