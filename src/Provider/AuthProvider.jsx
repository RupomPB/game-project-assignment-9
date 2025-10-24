import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    const auth = getAuth(app);

    // register user 
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    // user set up
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser )=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    },[auth])

    // user logout 
    const logoutUser =()=>{
        return signOut(auth);
    }

    // user login 
    const loginUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // sign in with google
    const signInGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // update user info
    const userInfo =(updatedData)=>{
       return updateProfile(auth.currentUser, updatedData);
    }

    // reset forget password
    const resetPassword = (email)=>{
       return sendPasswordResetEmail(auth, email)
        
    }

    const authData= {
        user,
        setUser,
        auth,
        logoutUser,
        createUser,
        loginUser,
        signInGoogle,
        loading,
        setLoading,
        userInfo,
        resetPassword,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;