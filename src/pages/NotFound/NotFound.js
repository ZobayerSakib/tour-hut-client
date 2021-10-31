import React from 'react';
import { Link } from 'react-router-dom';
import './../NotFound/NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className='notFound'>
                <h1>404</h1>
                <p>Opps! Your page was not found. Please try again</p>
                <Link to='/home'>Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;