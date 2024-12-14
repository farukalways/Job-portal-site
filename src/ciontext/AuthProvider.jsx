import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () =>{
   return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }



  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log("currentUser", currentUser);
      setLoading(false)
    })
    return()=>{
      unsubscribe()
    }
  }, [])


   const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    signOutUser,
    googleLogin
   }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;