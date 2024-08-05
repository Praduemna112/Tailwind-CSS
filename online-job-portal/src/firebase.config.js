// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABXJg95BSckzIld7CJggkoIWb-dnNkDQY",
  authDomain: "online-job-portal-80b81.firebaseapp.com",
  projectId: "online-job-portal-80b81",
  storageBucket: "online-job-portal-80b81.appspot.com",
  messagingSenderId: "82742773309",
  appId: "1:82742773309:web:f9e0bfe8be64085bad4c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};