// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXQQMkdaET4vAs0qsXXEgBpk49_e8OuhI",
  authDomain: "job-protal-8027b.firebaseapp.com",
  projectId: "job-protal-8027b",
  storageBucket: "job-protal-8027b.firebasestorage.app",
  messagingSenderId: "853547719483",
  appId: "1:853547719483:web:afdd3a00a01cf8bc23351e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth