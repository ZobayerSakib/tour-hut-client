import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Header/Header.css'
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className='headerDesign'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    user.displayName && <span><Link to='/add'>Add New Service</Link></span>
                }
                <NavLink to='/orderPlace'>Tour Packages</NavLink>
                <span className='text-white'> {user.displayName} </span>

                {
                    user.email ? <button onClick={logOut}>Sign Out</button> :

                        <NavLink to='/login'><button className='navButton'>Login</button></NavLink>
                }


            </div>

        </div>
    );
};

export default Header;