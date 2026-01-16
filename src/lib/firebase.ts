import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClO0oh25WRZPmCvb8vmmPOmW0Trfp1IBQ",
  authDomain: "goldenenglishzac.firebaseapp.com",
  projectId: "goldenenglishzac",
  storageBucket: "goldenenglishzac.firebasestorage.app",
  messagingSenderId: "546248617535",
  appId: "1:546248617535:web:362a9e46de86d4467a128a",
  measurementId: "G-CYYZKDB8VC"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);