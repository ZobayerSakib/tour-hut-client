import React from 'react';
import { Link } from 'react-router-dom';
import './../Footer/Footer.css'
const Footer = () => {
    return (
        <div className='footerDesign mt-5'>
            <div className='footerDiv'>
                <div>
                    <h4>Opening Ours</h4>
                    <p>The weather started getting rough the tiny ship was lost the min ting a maximum.</p>
                    <div className='openingDiv'>
                        <div>
                            <p>Monday-Friday</p>
                            <p>Saturday</p>
                            <p>Sunday</p>

                        </div>
                        <div>
                            <p>10:00 am to 9:00 pm</p>
                            <p>10:00 am to 5:00 pm</p>
                            <p>7:30 am to 10:00 pm</p>


                        </div>
                    </div>
                </div>
                <div>
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/about">Service Rates</Link></li>
                        <li><Link to="/about">Our Packages</Link></li>
                        <li><Link to="/about">Portfolio</Link></li>
                        <li><Link to="/about">Contact Us</Link></li>

                    </ul>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <p>The weather started getting rough tining</p>
                    <p>Travelling just Awesome</p>
                    <input type="text" name="" id="" placeholder='Your E-mail' />
                    <br />
                    <button className='mt-2'>SUBSCRIBE NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;