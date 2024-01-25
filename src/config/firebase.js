import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBsZBaI5oUKpyx15HqSyAY8cXdn1HHOAts",
  authDomain: "biblioteca-virtual-642c6.firebaseapp.com",
  projectId: "biblioteca-virtual-642c6",
  storageBucket: "biblioteca-virtual-642c6.appspot.com",
  messagingSenderId: "443575357250",
  appId: "1:443575357250:web:563dfdde8c923299a742db",
  measurementId: "G-C71KVRBTE6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);