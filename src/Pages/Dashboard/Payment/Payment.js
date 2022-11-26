import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const bookingData = useLoaderData()
    const { productName, price, meeting, mobile, email, image } = bookingData

    const navigation=useNavigation()
    if(navigation.state==="loading"){
       return <Loader></Loader>
    }

    
    return (
        <div>
            <h2 className="text-3xl mb-2">Please pay for {productName}</h2>
            <span >Your payment amount is: <strong>${price}</strong></span>

            <div className='mt-4 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    bookingData={bookingData}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;