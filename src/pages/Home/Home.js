import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './../Home/Home.css'

const Home = () => {
    const { tour, services } = useFirebase();
    // const tour = [
    //     { title: 'View and Environment', info: 'This awesome view will attract you when you will come to see this weather. We are waiting for your Tour.a journey for business, pleasure, or education often involving a series of stops and ending at the starting point also', img: 'https://i.ibb.co/GRq8xpk/img-1.jpg' },

    //     { title: 'Cool and freshness Travel', info: 'To go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another. to proceed or advance in any way.', img: 'https://i.ibb.co/N6b5T51/img-2.jpg' },

    //     { title: 'Natural Feelings Heaven', info: 'This awesome view will attract you when you will come to see this weather. We are waiting for your Tour.a journey for business, pleasure, or education often involving a series of stops and ending at the starting point also', img: 'https://i.ibb.co/87n74fG/img-3.jpg' },

    //     { title: 'Beauty is Travelling', info: 'To go from one place to another, as by car, train, plane, or ship; take a trip; journey: to travel for pleasure. to move or go from one place or point to another. to proceed or advance in any way.', img: 'https://i.ibb.co/KG1V0YH/img-4.jpg' },
    // ]


    return (

        <div className='homePage'>
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
            {/* https://ibb.co/3cnjrdW
https://ibb.co/ccV0Y0b
https://ibb.co/5RXRxSC
https://ibb.co/BP1TzmR */}

            <div className='px-3 mt-5'>
                <h2>Did You Know</h2>
                <p>Icon Bosbe House Icon</p>
                <p>What are the things you should always do on a trip? Plan a trip with us and we will tell you all about it.</p>
                <div className='tourPartDesign mt-4'>
                    {
                        tour.map(tourism => <div className='singleTourPart'>
                            <img className='mt-3' width='200' height='200' src={tourism.img} alt="" />
                            <h4 className='mt-2'>{tourism.title}</h4>
                            <p className='mt-1'>{tourism.info}</p>

                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;