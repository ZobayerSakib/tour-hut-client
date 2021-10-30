import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
const Header = () => {
    return (
        <div className='headerDesign'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/packages'>Tour Packages</Link>
        </div>
    );
};

export default Header;