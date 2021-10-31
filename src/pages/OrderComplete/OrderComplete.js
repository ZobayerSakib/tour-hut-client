import React from 'react';
import './../OrderComplete/OrderComplete.css'
const OrderComplete = () => {
    return (
        <div>
            <div className='text-center orderResult mt-4'>
                <h1 className='orderTitle'>Congratulations!!!</h1>
                <h3>Your Order proceed Successfully.</h3>
                <p>Thanks For Buying our package</p>
            </div>
        </div>
    );
};

export default OrderComplete;