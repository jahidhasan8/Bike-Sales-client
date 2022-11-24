// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkEuBwuuSKezkVFnz7DuSDdPrHnps5Jqg",
  authDomain: "bike-sales-a4a21.firebaseapp.com",
  projectId: "bike-sales-a4a21",
  storageBucket: "bike-sales-a4a21.appspot.com",
  messagingSenderId: "1051627936626",
  appId: "1:1051627936626:web:13795ecf0c53c62ad1dbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app