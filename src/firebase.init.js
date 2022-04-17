// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEdN4lcSC1MYG3xh4xkrlzY_2Dd2cNdMw",
    authDomain: "independent-service-b139c.firebaseapp.com",
    projectId: "independent-service-b139c",
    storageBucket: "independent-service-b139c.appspot.com",
    messagingSenderId: "333424857300",
    appId: "1:333424857300:web:854259faedc39d5ae5eb41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;