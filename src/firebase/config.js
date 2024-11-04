import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPNUNUkBS8amTeqCVOWf_zC1fqRjCi60E",
    authDomain: "agrippa-8f83b.firebaseapp.com",
    projectId: "agrippa-8f83b",
    storageBucket: "agrippa-8f83b.firebasestorage.app",
    messagingSenderId: "127405729735",
    appId: "1:127405729735:web:b3e9d5122d188b81e15be2",
    measurementId: "G-D58MTYG6NH"  
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

// Inicializar Autenticacion

export const auth = getAuth(app);