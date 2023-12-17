import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCzVWs0UU_6PldsWj84wDVZo_kjbHB9LL8",
  authDomain: "recipe-container.firebaseapp.com",
  projectId: "recipe-container",
  storageBucket: "recipe-container.appspot.com",
  messagingSenderId: "814734936788",
  appId: "1:814734936788:web:9870abff093ed027864941"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);