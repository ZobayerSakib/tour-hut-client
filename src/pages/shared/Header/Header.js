import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import '../Header/Header.css'
const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div className='headerDesign'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/packages'>Tour Packages</Link>
            <span> {user.displayName} </span>
            {
                user.email ? <button onClick={logOut}>Sign Out</button> :
                    <Link to='/login'><button>Login</button></Link>
            }


        </div>
    );
};

export default Header;