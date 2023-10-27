import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB27H3n8mEoICov9DYdXcRQ_Y594RUASb8",
  authDomain: "nikestore-24247.firebaseapp.com",
  projectId: "nikestore-24247",
  storageBucket: "nikestore-24247.appspot.com",
  messagingSenderId: "559376476918",
  appId: "1:559376476918:web:379fca6b72711b3b58dad7",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

