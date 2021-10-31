import React from 'react';
import { Link } from 'react-router-dom';
import './../NotFound/NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className='notFound'>
                <h1>404</h1>
                <h3>Sorry, we can't find that page.</h3>
                <p>The page might have been moved or deleted.</p>
                <Link to='/home'>Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;