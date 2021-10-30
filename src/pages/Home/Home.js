import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TourPackage from '../TourPackage/TourPackage';
import './../Home/Home.css'

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (


        <>
            <div className='homeBoxBanner'>
                <h1>Travelling is Our Hobby </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facere iste ipsum eum numquam ad, fugit sunt accusantium debitis a.</p>
            </div>

            <div className='packages text-center mt-5'>
                <h1>Select Your Best Package. Awesome Journey</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi tenetur tempora voluptates fugiat dolore.</p>

            </div>

            <div className='servicesDesign'>
                {
                    services.map(service => <div className='service'>
                        <h3>{service.name}</h3>
                        <img width='300' height='250' src={service.img} alt="imag" />
                        <p>{service.description}</p>
                        <p>{service.price} / Per day</p>
                        <Link to='buyPackage'>
                            <button>Buy Now</button>
                        </Link>

                    </div>)

                }
            </div>

        </>
    );
};

export default Home;