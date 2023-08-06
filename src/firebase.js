import {initializeApp} from 'firebase/app' // v9

// firebase db
import { getFirestore} from "firebase/firestore"


// firebase auth
import {
  getAuth
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCiu1HY4F5ZhwhfTvQpoVOXL5txncpmM_Y",
  authDomain: "richpanel-b13ad.firebaseapp.com",
  projectId: "richpanel-b13ad",
  storageBucket: "richpanel-b13ad.appspot.com",
  messagingSenderId: "694875130179",
  appId: "1:694875130179:web:250e21680b9ea5267607f6"
};

initializeApp(firebaseConfig) // v9 way to initialze firebase to use all functionalities


//const db = firebaseApp.firestore();  v8 way to initialize db
const db = getFirestore();

const auth = getAuth(); // v9 firebase

export {auth}
export default db;