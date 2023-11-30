// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBAluIVzdjVLRqxoI1L-ag8Wff1uzGcEgI",
  authDomain: "react-fire-base-d2871.firebaseapp.com",
  projectId: "react-fire-base-d2871",
  storageBucket: "react-fire-base-d2871.appspot.com",
  messagingSenderId: "546330840244",
  appId: "1:546330840244:web:dfc3f0ccbc0cf999371be1"
};


const app = firebase.initializeApp(firebaseConfig);
export default app;