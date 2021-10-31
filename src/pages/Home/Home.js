import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './../Home/Home.css'

const Home = () => {
    const { tour, services, loading } = useAuth();
    if (loading) {
        return <div className='text-center'>
            <div class="spinner-border text-secondary " role="status">
            </div>
        </div>
    }
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
                        <Link to='/orderPlace'>
                            <button>Buy Now</button>
                        </Link>

                    </div>)

                }
            </div>


            {/*----------------- This is Explore Section Of The Home Page ------------*/}

            <div className='px-3 mt-5'>
                <div className='explore1'>
                    <div className='explore2'>
                        <h2>Did You Know</h2>
                        <p>Icon Bosbe House Icon</p>
                        <p>What are the things you should always do on a trip? Plan a trip with us and we will tell you all about it.</p>
                    </div>
                </div>
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


            {/*--------------- This is post section of Home Page-------------------- */}

            <div className='px-3 mt-5'>
                <div className='explore1'>
                    <div className='explore2'>
                        <h2>Our Regular Post</h2>
                        <p>We are connecting with you by our regular uploading Post.</p>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Home;