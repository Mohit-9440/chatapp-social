import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkm7pt1BzaC7yl7be-dllC_iV6UyE4tyc",
  authDomain: "chat-85265.firebaseapp.com",
  projectId: "chat-85265",
  storageBucket: "chat-85265.appspot.com",
  messagingSenderId: "52195420789",
  appId: "1:52195420789:web:d809367aed0d2d1c0c663c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
