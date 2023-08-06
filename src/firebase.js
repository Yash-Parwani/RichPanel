import {initializeApp} from 'firebase/app' // v9

// firebase db
import { getFirestore} from "firebase/firestore"


// firebase auth
import {
  getAuth
} from 'firebase/auth'

const firebaseConfig = {
     apiKey: `${import.meta.env.REACT_APP_FIREBASE_KEY}`,
    authDomain: `${ import.meta.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${import.meta.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${import.meta.env.REACT_APP_APP_ID}`
};

initializeApp(firebaseConfig) // v9 way to initialze firebase to use all functionalities


//const db = firebaseApp.firestore();  v8 way to initialize db
const db = getFirestore();

const auth = getAuth(); // v9 firebase

export {auth}
export default db;