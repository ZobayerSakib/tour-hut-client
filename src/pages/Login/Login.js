import React from 'react';
import useAuth from '../../hooks/useAuth';
import './../Login/Login.css'
const Login = () => {
    const { signInWithGoogle } = useAuth()

    const loginFormController = e => {
        e.preventDefault();
        alert('Please Use Google Login System. Thanks')
    }
    return (
        <div className='formDiv'>
            <div className='loginForm mt-4'>
                <form onSubmit={loginFormController} >
                    <input type="email" placeholder='email' />
                    <br />
                    <input className='mt-1' type="password" placeholder='password' />
                    <br />
                    <input className='mt-1 sameDesign' type="submit" value="Register" />
                </form>
                <p><small>_______or______</small></p>
                <button className='sameDesign' onClick={signInWithGoogle} >Sign In With Google</button>

            </div>
        </div>
    );
};

export default Login;