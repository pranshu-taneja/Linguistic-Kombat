// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJz2yJQk_cLVqw7m4vZb03cRS-FL2RYsA",
  authDomain: "linguistic-kombat.firebaseapp.com",
  projectId: "linguistic-kombat",
  storageBucket: "linguistic-kombat.appspot.com",
  messagingSenderId: "564417012653",
  appId: "1:564417012653:web:c445777824c16f9638f724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
