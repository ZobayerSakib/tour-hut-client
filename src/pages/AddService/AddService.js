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

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then()

        // e.preventDefault();
    }
    return (
        <div className='mt-4 formDesign'>
            {/* <h3>Add new Services</h3> */}
            <div>
                <div className='formSize mx-auto '>
                    <form onSubmit={formHandler} className='formController' >
                        <input ref={nameRef} type="text" placeholder='package name...' />
                        <br />
                        <input ref={imgRef} type="img" placeholder='image Url' />
                        <br />
                        <input ref={infoRef} className='info' type="text" placeholder='Description' />
                        <br />
                        <input ref={priceRef} type="number" placeholder='service price' />
                        <br />
                        <input type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;