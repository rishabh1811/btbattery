import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBirPuKXWeG_4BpXKnaI94-FRQD5B6kTL8",
  authDomain: "clone-8986d.firebaseapp.com",
  projectId: "clone-8986d",
  storageBucket: "clone-8986d.appspot.com",
  messagingSenderId: "448821953743",
  appId: "1:448821953743:web:02cfc091e8f648eabd63ba",
  measurementId: "G-WY46Q4KXL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)