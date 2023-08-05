import {initializeApp} from 'firebase/app' // v9

// firebase db
import { getFirestore} from "firebase/firestore"


// firebase auth
import {
  getAuth
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDgptwC5Capp29PudU8700wt32g-g6D0BQ",
    authDomain: "richpanel-43c1f.firebaseapp.com",
    projectId: "richpanel-43c1f",
    storageBucket: "richpanel-43c1f.appspot.com",
    messagingSenderId: "268590845859",
    appId: "1:268590845859:web:f72eece75114ddec7d5416"
};

initializeApp(firebaseConfig) // v9 way to initialze firebase to use all functionalities


//const db = firebaseApp.firestore();  v8 way to initialize db
const db = getFirestore();

const auth = getAuth(); // v9 firebase

export {auth}
export default db;