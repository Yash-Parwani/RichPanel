import { useEffect, useState } from "react"
import { Login, Register } from "./components"
import db, { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,userAuth =>{
      if(userAuth){
        // user is logged in

      }
      else{
        //user is logged out
      }
    })

    return unsubscribe;
  },[])

  return (
     <div className="bg-blue-700">
      <Register/>
     </div>
  )
}

export default App