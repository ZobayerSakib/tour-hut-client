import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import '../Header/Header.css'
const Header = () => {
    const { user, logOut, signInWithGoogle } = useFirebase()
    return (
        <div>
            <div className='headerDesign'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    user.displayName && <span><Link to='/add'>Add New Service</Link></span>
                }
                <NavLink to='/packages'>Tour Packages</NavLink>
                <span className='text-white'> {user.displayName} </span>
                {
                    user.email ? <button onClick={logOut}>Sign Out</button> :
                        // <Link to='/login'>Login</Link>
                        <button className='navButton' onClick={signInWithGoogle}>Login</button>
                }


            </div>

        </div>
    );
};

export default Header;