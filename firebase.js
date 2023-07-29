// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSGY4wWuoD620G5ByPsRDqTDaXt9LKhak",
  authDomain: "facebook-93489.firebaseapp.com",
  projectId: "facebook-93489",
  storageBucket: "facebook-93489.appspot.com",
  messagingSenderId: "225753869476",
  appId: "1:225753869476:web:88d0426a48ba533b228a31",
  measurementId: "G-9L1Y00J7NS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


