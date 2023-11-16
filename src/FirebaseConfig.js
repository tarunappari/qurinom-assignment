import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyWUxRgaQiV8LageISEgv7RNuU0nf6C7I",
    authDomain: "type-speed-website.firebaseapp.com",
    projectId: "type-speed-website",
    storageBucket: "type-speed-website.appspot.com",
    messagingSenderId: "368582916046",
    appId: "1:368582916046:web:ef7b2945368f78bf2cdd9f",
    measurementId: "G-ZH6JETQF1G"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)

  const db = getFirestore(firebaseApp);

  export {auth,db};