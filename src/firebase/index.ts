import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD7fxEdloaE08hxGryRV6I6yiyI-xYrhFQ",
    authDomain: "jamshid-movie-app.firebaseapp.com",
    projectId: "jamshid-movie-app",
    storageBucket: "jamshid-movie-app.appspot.com",
    messagingSenderId: "1020167401941",
    appId: "1:1020167401941:web:fff7581c99306549838d5c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {db,auth};