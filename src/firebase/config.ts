import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE4F_l5cwYmVIsYocUVB7ssrZDpQ9p_PM",
  authDomain: "dayschallenge-9a8f9.firebaseapp.com",
  projectId: "dayschallenge-9a8f9",
  storageBucket: "dayschallenge-9a8f9.appspot.com",
  messagingSenderId: "1046882772248",
  appId: "1:1046882772248:web:f36f566595a70af441aa6d",
  measurementId: "G-5LFSDD6YWD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
