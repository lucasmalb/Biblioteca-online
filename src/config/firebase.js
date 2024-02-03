import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCraSjZ8p8Wx3l8fh9KvQnMafK4w5jmGBQ",
  authDomain: "biblioteca-virtual-4cda1.firebaseapp.com",
  projectId: "biblioteca-virtual-4cda1",
  storageBucket: "biblioteca-virtual-4cda1.appspot.com",
  messagingSenderId: "765526617492",
  appId: "1:765526617492:web:6ff261990f10e0ff7eb381",
  measurementId: "G-F5TM3NB157"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);