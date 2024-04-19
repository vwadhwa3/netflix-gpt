// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_7eLWlDLicx-FioSbvEC6hh6Oq1vwJKs",
  authDomain: "netflix-gpt-ae7f9.firebaseapp.com",
  projectId: "netflix-gpt-ae7f9",
  storageBucket: "netflix-gpt-ae7f9.appspot.com",
  messagingSenderId: "722212301190",
  appId: "1:722212301190:web:f35a57f9c592a9b27d2407",
  measurementId: "G-30MLYPZ2TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();