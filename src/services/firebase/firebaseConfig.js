// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt2aZioLxeaAJxolbbneaEnbmddX1l77I",
  authDomain: "mi-primer-app-d88a4.firebaseapp.com",
  projectId: "mi-primer-app-d88a4",
  storageBucket: "mi-primer-app-d88a4.appspot.com",
  messagingSenderId: "118721400945",
  appId: "1:118721400945:web:82e3fb335399562d970bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
