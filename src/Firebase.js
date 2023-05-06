// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfuFqWtXUdBUI8yVUeDpbCrxVYXjv5Hn4",
  authDomain: "sport-cars-luxury-firestore.firebaseapp.com",
  projectId: "sport-cars-luxury-firestore",
  storageBucket: "sport-cars-luxury-firestore.appspot.com",
  messagingSenderId: "257571399992",
  appId: "1:257571399992:web:a72194c8e85011ec59b9cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDb= getFirestore(app);