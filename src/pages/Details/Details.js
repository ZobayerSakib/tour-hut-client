import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './../Details/Details.css'
const Details = () => {
    const { id } = useParams();
    const [tourPackage, setTourPackage] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [])
    return (
        <div className='text-center mt-5'>
            <div>
                <h5>Your Selecting Package</h5>
                <h1 className='detailsName'>{tourPackage.name}</h1>
                <p>{tourPackage.description}</p>
            </div>
        </div>
    );
};

export default Details;