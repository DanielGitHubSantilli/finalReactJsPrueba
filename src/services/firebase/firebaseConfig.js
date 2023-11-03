// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//esto de abajo lo puse del video porque la página de firestore no me lo dió:
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authdomain,
  projectId: process.env.REACT_APP_proyectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
