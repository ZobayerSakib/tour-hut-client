import React from 'react';
import './../AddService/AddService.css'
const AddService = () => {
    return (
        <div className='mt-4 formDesign'>
            <h3>Add new Services</h3>
            <div className='formControlle'>
                <form className='formController' >
                    <input type="text" placeholder='package name...' />
                    <br />
                    <input type="img" placeholder='image Url' />
                    <br />
                    <textarea name="" id="" cols="40" rows="10"></textarea>
                    <br />
                    <input type="number" placeholder='service price' />
                    <br />
                    <input type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;