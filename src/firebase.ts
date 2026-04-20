import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0CA59MZWFmXjqsv5kUfYqpsiQ9GUdkEY",
  authDomain: "eagle-hitech.firebaseapp.com",
  projectId: "eagle-hitech",
  storageBucket: "eagle-hitech.firebasestorage.app",
  messagingSenderId: "422249044774",
  appId: "1:422249044774:web:213a99a181a9f0a31effe7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
