import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    // register user 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user set up
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser )=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    },[auth])

    // user logout 
    const logoutUser =()=>{
        return signOut(auth);
    }

    // user login 
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const signInGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const authData= {
        user,
        setUser,
        auth,
        logoutUser,
        createUser,
        loginUser,
        signInGoogle,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;