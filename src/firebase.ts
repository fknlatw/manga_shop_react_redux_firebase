import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_MANGA_SHOP_APP_API_KEY ,
    authDomain: "manga-shop-react-redux-ts-fb.firebaseapp.com",
    projectId: "manga-shop-react-redux-ts-fb",
    storageBucket: "manga-shop-react-redux-ts-fb.firebasestorage.app",
    messagingSenderId: "100982674416",
    appId: "1:100982674416:web:ec776a3a224da209a0c335",
    measurementId: "G-52EEGGYY8W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
  

