import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

 export const AuthContext=createContext()
 const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInEmailPassword=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userProfileUpdate=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLongin=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe();
 },[])
    const authInfo={
        createUser,
        singInEmailPassword,
        user,
        logout,
        userProfileUpdate,
        loading,
        googleLongin,

    }
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;