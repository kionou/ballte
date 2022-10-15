import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getFirestore,collection} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMM75kxOlwvY9thnXDkHJXuEz5Y1lXIEc",
  authDomain: "nutrition-d83b7.firebaseapp.com",
  projectId: "nutrition-d83b7",
  storageBucket: "nutrition-d83b7.appspot.com",
  messagingSenderId: "704295793085",
  appId: "1:704295793085:web:e08782d8f08772e15f22d4"
};


const app = initializeApp(firebaseConfig);
const data = getFirestore(app)
export const storage = getStorage(app);
export const auth = getAuth(app);


export const usercollection = collection(data,'users')