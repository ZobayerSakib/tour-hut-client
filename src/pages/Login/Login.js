import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div className='loginForm'>
            <form >
                <h3>Login Form</h3>
                <button onClick={signInWithGoogle} >Sign In With Google</button>
            </form>
        </div>
    );
};

export default Login;