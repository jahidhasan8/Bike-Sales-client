import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const BookingModal = ({ product,setProductInfo }) => {

    const { user } = useContext(AuthContext)
    const { productName,_id, resalePrice,image } = product
   


    const handleBooking = (e) => {

        e.preventDefault()
        const form = e.target
        const meeting = form.meeting.value
        const email = form.email.value
        const mobile = form.mobile.value
        const price = form.price.value

        const booking = {

            productName,
            mobile,
            email,
            price,
            meeting,
            image,
            productId:_id


        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    setProductInfo(null)
                    toast.success('Booking Successful')
            
                }
                else {
                    toast.error(data.message)
                }
            })

    }  
 

        return (
            <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative text-slate-600">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-4'>

                            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input w-full input-bordered" />

                            <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Your email" className="input w-full input-bordered" />

                            <input name='mobile' required type="number" placeholder="Your mobile number" className="input w-full input-bordered" />

                            <input name='meeting' required type="text" placeholder="Meeting location" className="input w-full input-bordered" />

                            <input name='productName' type="text" defaultValue={productName} disabled placeholder="Product Name" className="input w-full input-bordered" />

                            <input name='price' defaultValue={resalePrice} disabled type="text" placeholder="Product Price" className="input w-full input-bordered" />
                            <br />
                            
                            <input className='btn btn-info w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default BookingModal;