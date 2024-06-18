import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAnp3D7W-0se11rKRg1JE1wgFEJq0j16Js",
  authDomain: "olx-clone-505d5.firebaseapp.com",
  projectId: "olx-clone-505d5",
  storageBucket: "olx-clone-505d5.appspot.com",
  messagingSenderId: "1070800175877",
  appId: "1:1070800175877:web:36ca5301cd9ec0abd5ed6c",
  measurementId: "G-4118L1KFWC",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
