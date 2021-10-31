import React from 'react';
import useAuth from '../../hooks/useAuth';
import '../../pages/About/About.css'
const About = () => {
    const { loading } = useAuth()
    if (loading) {
        return <div className='text-center'>
            <div class="spinner-border text-secondary " role="status">
            </div>
        </div>
    }
    return (
        <div className='aboutDiv'>
            <div className='mt-5 text-center p-4'>
                <h3>Our thinking of your better Service</h3>
                <p>Welcome to TOUR HUT where business and leisure blend together. Enjoying an unrivaled location, overlooking the Bay of Bengal (only 25 yards from the Bay water) and sitting in the laps of hills, we offer deluxe accommodation in 181 well appointed guest rooms and suites. The panoramic view of the ocean, the majestic hills and the natural beauty of the tamarind trees are all wonderfully complemented by luxury facilities and Bangladeshi hospitality.</p>
            </div>


            <div className='aboutInfo p-4 text-center' >
                <div>
                    <div className='fontController' >
                        <p><i className="fa-4x fas fa-bus text-primary"></i></p>
                    </div>
                    <h4>Best Service Best Hotel Package</h4>

                    <p className='mb-1'>Hour Guest Reception.</p>
                    <p className='mb-1'>Healthy Breakfast.</p>
                    <p className='mb-1'>Complimentary Electronics Chargers</p>
                    <p className='mb-1'>Best Travel Environment</p>

                </div>


                <div>
                    <div className='fontController' >
                        <p><i className="fa-4x fas fa-car-side text-primary"></i></p>
                    </div>
                    <h4>Trying us Making Perfect </h4>
                    <p>Our Package and Service you can believe for a single reason and that we are trying to make our service and package only for your better experience</p>
                </div>
                <div>
                    <div className='fontController' >
                        <p><i className="fa-4x fas fa-id-card-alt text-primary"></i></p>
                    </div>
                    <h4>Our contact Info for Tourist</h4>
                    <p className='mb-1'>CONTACT US</p>
                    <p className='mb-1'><b>Email:</b>tourhut231@gmail.com</p>
                    <p className='mb-1'><b>Phone:</b>01325643636</p>
                    <p className='mb-1'><b>Fax:</b>8723467387324786</p>
                    <p className='mb-1'><b>Office 24hr:</b>235374</p>
                </div>
            </div>
        </div>
    );
};

export default About;