import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './../Home/Home.css'

const Home = () => {
    const { tour, services, loading } = useAuth();
    if (loading) {
        return <div className='text-center'>
            <div className="spinner-border text-secondary " role="status">
            </div>
        </div>
    }
    return (
        <div className='homePage'>
            <div className='homeBoxBanner'>
                <div className=' p-4 text-white text-right '>
                    <h1>Travelling is Our Hobby </h1>
                    <p>This will be your special Journey with us</p>
                    <h4>We  are providing you an best environment </h4>
                    <h5>Thanks. Happy Tour, Happy Journey</h5>
                </div>
            </div>

            <div className='packages text-center mt-5'>
                <h1>Select Your Best Package. Awesome Journey</h1>
                <p>The World is your and Just Think about it and Travel</p>

            </div>

            <div className='servicesDesign'>
                {
                    services.map(service => <div className='service'
                        key={service._id}
                    >
                        <h3>{service.name}</h3>
                        <img width='300' height='250' src={service.img} alt="imag" />
                        <p>{service.description}</p>
                        <p>{service.price} / Per day</p>
                        <Link to={`/services/details/${service._id}`}>
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
                        <p><i className="fa-4x fas fa-house-user"></i></p>
                        <p>What are the things you should always do on a trip? Plan a trip with us and we will tell you all about it.</p>
                    </div>
                </div>
                <div className='tourPartDesign mt-4'>
                    {
                        tour.map(tourism => <div className='singleTourPart'
                            key={tourism._id}
                        >
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
                        <p><i className="fa-4x fas fa-plus"></i></p>
                        <p>We are connecting with you by our regular uploading Post.</p>
                    </div>
                </div>

                <div className='post mt-4'>
                    <div>
                        <h3>Advantage of Travel</h3>
                        <h5>Charming Feelings and Love</h5>
                        <p>The importance of travel ranges from lower chances of heart disease to relieving stress and anxiety. On top of the health benefits, travel can also enhance your creativity, your sense of happiness and satisfaction</p>
                    </div>
                    <div>
                        <h3>Gaining From Travelling</h3>
                        <h5>Loyal Feelings and Love</h5>
                        <p>People may travel to learn something specific: a new language, a new cuisine, aspects of a different culture, or a deeper appreciation of faith or spirituality. As a bonus, they'll take away more than their specific goal.</p>
                    </div>
                    <div>
                        <h3>Travel and Life</h3>
                        <h5>This World is big Place of a Life</h5>
                        <p>Traveling promotes happiness and helps you take your mind off stressful situations. This leads to lower cortisol levels, making you feel more calm and content. “It also helps us reflect on our personal goals and interests,” adds Greenberg</p>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default Home;