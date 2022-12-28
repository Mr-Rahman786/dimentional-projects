// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGsiDe9XTUefRdcFbzztnLQf0n8slcDVM",
    authDomain: "doctor-portal-81866.firebaseapp.com",
    projectId: "doctor-portal-81866",
    storageBucket: "doctor-portal-81866.appspot.com",
    messagingSenderId: "790746004917",
    appId: "1:790746004917:web:0b0b00841511589053adfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;