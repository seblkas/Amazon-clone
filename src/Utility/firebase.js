
import firebase from "firebase/compat/app";
import {getAuth} from"firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVaqWYEDpiKTE0fPDI9i9-DK4cnmebEdU",
  authDomain: "clone-e2813.firebaseapp.com",
  projectId: "clone-e2813",
  storageBucket: "clone-e2813.appspot.com",
  messagingSenderId: "321486729204",
  appId: "1:321486729204:web:e2ce7d337b7bc9235e93a1",
};

// Initialize Firebase
const app = firebase. initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
