import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [services, setServices] = useState([]);
    const [user, setUser] = useState('');
    const [tour, setTour] = useState([]);
    const [loading, setLoading] = useState(true)

    // console.log(user)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)

    }
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    useEffect(() => {
        const url = 'https://shrieking-pumpkin-23483.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('https://shrieking-pumpkin-23483.herokuapp.com/tourPoint')
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    return {
        user,
        services,
        tour,
        loading,
        signInWithGoogle,
        logOut
    }

};

export default useFirebase;