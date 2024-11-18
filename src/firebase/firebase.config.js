// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqpY42jiMzwbc87Izpo4xD_KePQ7c9BW8",
  authDomain: "assignment-9-9ae37.firebaseapp.com",
  projectId: "assignment-9-9ae37",
  storageBucket: "assignment-9-9ae37.firebasestorage.app",
  messagingSenderId: "273293598194",
  appId: "1:273293598194:web:92eccdea903a98bfb91f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;