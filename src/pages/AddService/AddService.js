import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import './../AddService/AddService.css'
const AddService = () => {
    const { loading } = useAuth();
    const nameRef = useRef();
    const imgRef = useRef();
    const infoRef = useRef();
    const priceRef = useRef();
    if (loading) {
        return <div className='text-center'>
            <div className="spinner-border text-secondary " role="status">
            </div>
        </div>
    }
    const formHandler = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = infoRef.current.value;
        const price = priceRef.current.value;

        const newService = { name, img, description, price }

        fetch('https://shrieking-pumpkin-23483.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then()


    }
    return (
        <div className='mt-4 formDesign'>
            <h2>Admin Panel</h2>
            <h4>Add New Service</h4>
            <div>
                <div className='formSize mx-auto '>
                    <form onSubmit={formHandler} className='formController' >
                        <input className='mt-2' ref={nameRef} type="text" placeholder='package name...' />
                        <br />
                        <input className='mt-2' ref={imgRef} type="img" placeholder='image Url' />
                        <br />
                        <input ref={infoRef} className='info mt-2' type="text" placeholder='Description' />
                        <br />
                        <input className='mt-2' ref={priceRef} type="number" placeholder='service price' />
                        <br />
                        <input className='inputSpecial' type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;