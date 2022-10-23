import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCebm1jXGK3MeZy5RoiZU4c9sl8rLvyVnk",
  authDomain: "my-firebaseproject01.firebaseapp.com",
  projectId: "my-firebaseproject01",
  storageBucket: "my-firebaseproject01.appspot.com",
  messagingSenderId: "121682876952",
  appId: "1:121682876952:web:b6b898cfab9d4507e1816d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const usersignInWithPopup = () => signInWithPopup(auth, provider);
