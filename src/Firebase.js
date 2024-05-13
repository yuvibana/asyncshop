import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAJPt88fPZn7lyuI_TR4APlHp7zWlm5qOc",
    authDomain: "login-auth-8bdbd.firebaseapp.com",
    projectId: "login-auth-8bdbd",
    storageBucket: "login-auth-8bdbd.appspot.com",
    messagingSenderId: "664554900615",
    appId: "1:664554900615:web:e8c38d7eeb8b383ee9bc22"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;