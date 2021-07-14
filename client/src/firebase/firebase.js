import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjm22aLKq4r_IAobGKHkSs1dJG6CosGVA",
    authDomain: "yourshop-eb4f6.firebaseapp.com",
    projectId: "yourshop-eb4f6",
    storageBucket: "yourshop-eb4f6.appspot.com",
    messagingSenderId: "339565529313",
    appId: "1:339565529313:web:8ec042ee15c77729794fa0",
    measurementId: "G-5D0R4R2SDQ"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
