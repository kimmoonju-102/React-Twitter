import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdUSvz6ieZi7KrZWCSa0Tb0zvs1sV3C-I",
  authDomain: "react-twitter-b8533.firebaseapp.com",
  projectId: "react-twitter-b8533",
  storageBucket: "react-twitter-b8533.appspot.com",
  messagingSenderId: "1039154822978",
  appId: "1:1039154822978:web:49212e0a2818b9fbe212db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
