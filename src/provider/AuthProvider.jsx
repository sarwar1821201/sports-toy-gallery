import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';


const auth=getAuth(app)

export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
  
    const [user, setUser] =useState(null);
    const [loading, setLoading]= useState(true)

    const createUser= (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     const authInfo={
        user, loading,createUser,signIn
     }
  

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;