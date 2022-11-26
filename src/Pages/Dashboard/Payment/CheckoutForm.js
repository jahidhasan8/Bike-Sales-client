import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ bookingData }) => {

    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price,productName,email } = bookingData
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('jwToken')}`

            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({

            type: 'card',
            card,
        });

        if (error) {

            setError(error.message)
            toast.error(error.message)
        }

        else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
           clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email:email
                    },
                },
            },
        );

        if(confirmError){
             setError(confirmError.message)
            toast.error(confirmError.message)
            return
        }
        console.log(paymentIntent); 

    }
    return (
        <div>
            <form onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-5 btn-info' disabled={!stripe || !clientSecret} type="submit">
                    Pay
                </button>
            </form>

            {/* <p className='text-red-600'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId <span className='font-bold'>{transactionId}</span></p>
                </div>
            } */}
            <p className='text-red-600'>{error}</p>
        </div>
    );
};

export default CheckoutForm;