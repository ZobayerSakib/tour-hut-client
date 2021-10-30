import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [services, setServices] = useState([]);
    const [user, setUser] = useState('');
    const [tour, setTour] = useState([]);

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

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/tourPoint')
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    return {
        user,
        services,
        tour,
        signInWithGoogle,
        logOut
    }

};

export default useFirebase;