import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../../fitebase/firebase.config';


export const AuthContext = createContext();
const auth =getAuth(app);



const AuthProvider = ({children}) => {
const [user, setUser] =useState(null);
const [loading, setLoading] =useState(true);


// 1.Create a new User >>
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
};


// 2.Login with email and password >>
const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

//3. Sign In with Google >>
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  }



  // Sign In with Github >>
  const githubLogin = () => {
    return signInWithPopup(auth, new GithubAuthProvider() )
  }



// .Logout any user >>
const logOut = () => {
  return signOut(auth);
}





useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    console.log(currentUser);
    setUser(currentUser);
  } );
  return () => {
    return unsubscribe()
  }
}, [])

  const authInfo ={
    user,
    logIn,
    loading,
    createUser,
    logOut,
    googleSignIn,
    githubLogin
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;