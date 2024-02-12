import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzFIM_6PZ2_xD3X5WvKP7QhFcL_-c5Jgk",
  authDomain: "library-88310.firebaseapp.com",
  projectId: "library-88310",
  storageBucket: "library-88310.appspot.com",
  messagingSenderId: "508798838220",
  appId: "1:508798838220:web:214f53b7e9f3446d016969",
  measurementId: "G-28R7PXCYFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
