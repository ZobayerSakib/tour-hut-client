import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState('')
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])


    return {
        user,
        signInWithGoogle,
        logOut
    }

};

export default useFirebase;