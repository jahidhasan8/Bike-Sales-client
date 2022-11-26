import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';

const CheckoutForm = ({ bookingData }) => {

    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [loading, setLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const { price,productName,email,_id } = bookingData
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
        setSuccessMessage('')
        setLoading(true)

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

        if (paymentIntent.status === 'succeeded'){
            
            const payment={
                price,
                transactionId:paymentIntent.id,
                bookingId:_id,
                email

            }
            fetch('http://localhost:5000/payments',{
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization:`bearer ${localStorage.getItem('jwToken')}`
                },
                body:json.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    setSuccessMessage('Your Payment Successful')
                    setTransactionId(paymentIntent.id)
                    toast.success('Your Payment Successful')
                }
            })
        }
        setLoading(false)
    

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
                <button className='btn btn-sm mt-5 btn-info' disabled={!stripe || !clientSecret || loading} type="submit">
                    Pay
                </button>
            </form>

            <p className='text-red-400'>{error}</p>
            {
                successMessage && <div>
                    <p className='font-bold mt-4'>{successMessage}</p>
                    <p>Your transactionId is <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
            
        </div>
    );
};

export default CheckoutForm;