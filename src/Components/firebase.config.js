 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBk6AD7pVWSUulXrAiDpwLnouAnXJqgLH8",
  authDomain: "edcare-ae4c3.firebaseapp.com",
  projectId: "edcare-ae4c3",
  storageBucket: "edcare-ae4c3.firebasestorage.app",
  messagingSenderId: "961216847074",
  appId: "1:961216847074:web:0e43d0c70eb95ff4e4d2bb"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;