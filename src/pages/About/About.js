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
        <div className='okk'>
            <h2>Hello</h2>
        </div>
    );
};

export default About;