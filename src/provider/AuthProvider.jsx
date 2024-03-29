import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


const auth=getAuth(app)

export const AuthContext= createContext(null)
const googleProvider= new GoogleAuthProvider();

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

    const signInWithGoogle= () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
      }

      const logOut= () =>{
        setLoading(true)
            return signOut (auth)
        }

        const userProfileUpdate= (name,photo) =>{
            return updateProfile (auth.currentUser , {
              displayName: name,
              photoURL: photo
            })
         }


    useEffect( ()=>{
         
        const unsubscribe=  onAuthStateChanged( auth, currentUser =>{
            console.log('logged in user', currentUser);
            setUser(currentUser);
            setLoading(false)
   
           } );
           return () =>{
           return unsubscribe ()
          }
         } , [] )

     const authInfo={
        user, loading,createUser,signIn,signInWithGoogle,logOut,userProfileUpdate
     }
  

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;