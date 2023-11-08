import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArSzMTUx_iOUUtzKQhwOcisC99nKTa5Fg",
  authDomain: "court-booking-bcbc7.firebaseapp.com",
  projectId: "court-booking-bcbc7",
  storageBucket: "court-booking-bcbc7.appspot.com",
  messagingSenderId: "475875254289",
  appId: "1:475875254289:web:dba6b4d41a730871cdd1b0",
  measurementId: "G-GC115JNE6D"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//init services

const db = getFirestore();

//collection ref
const colRef = collection(db, 'venues');

//get collection data
getDocs(colRef)
.then((snapshot)=>{
    console.log(snapshot.docs)
})
