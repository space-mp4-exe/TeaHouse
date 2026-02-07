import{initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYZKwD41XA1OWf923pHHE7opPzlxSn0Nw",
    authDomain: "teahouse-1796b.firebaseapp.com",
    projectId: "teahouse-1796b",
    storageBucket: "teahouse-1796b.firebasestorage.app",
    messagingSenderId: "995369480678",
    appId: "1:995369480678:web:881697aa3803843bfde627",
    measurementId: "G-60GTVFRRXX"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {auth, db};