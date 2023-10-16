import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZUr7M0z0hP_kGDo4r6-AK8zGunIxREwQ",
  authDomain: "nwitter-reloaded-32daf.firebaseapp.com",
  projectId: "nwitter-reloaded-32daf",
  storageBucket: "nwitter-reloaded-32daf.appspot.com",
  messagingSenderId: "839348849734",
  appId: "1:839348849734:web:f4fbfcf7960f67f23b4e47",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
