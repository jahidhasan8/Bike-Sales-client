import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
 
const auth=getAuth(app)
export const AuthContext=createContext()
 
const AuthProvider = ({children}) => {
   const[user,setUser]=useState('')
     
   const[loading,setLoading]=useState(true)

//    create new user
 const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }

//   google login 

const googleLogin=(googleProvider)=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)

}

//  login with email,password
  const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

  }

  const updateUser=(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
  }
  
  // password reset
  const resetPassword=(email)=>{
   return sendPasswordResetEmail(auth,email)
  }

//   logout user 

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

// observer
   useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return()=>unsubscribe()

   },[])

   const authInfo={
    user,
    createUser,
    logIn,
    logOut,
    updateUser,
    loading,
    googleLogin,
    resetPassword

   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;