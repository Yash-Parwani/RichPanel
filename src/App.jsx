import { useEffect, useState } from "react"
import { Login, Register } from "./components"
import db, { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, setSubscription } from "./features/userSlice";
const App = () => {
  //fetching the user stored in the redux using useSelector
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,userAuth =>{
      if(userAuth){
        // user is logged in
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
        }));

      }
      else{
        //user is logged out
        dispatch(
          logout()
        );
      }
    })

    return unsubscribe;
  },[dispatch])

  return (
     <div className="bg-blue-700">
      <Register/>
     </div>
  )
}

export default App