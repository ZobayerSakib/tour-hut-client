import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
            <div className='p-5'>
                <h5>Your Selecting Package</h5>
                <h1 className='detailsName'>{tourPackage.name}</h1>
                <p>{tourPackage.description}</p>
                <p>{tourPackage.price}TK Per day </p>
                <img width='300' src={tourPackage.img} alt="" />
                <br />
                <br />
                <Link to='/orderComplete'><button className='inputDesign'>Proceed to Order</button></Link>
            </div>
        </div>
    );
};

export default Details;