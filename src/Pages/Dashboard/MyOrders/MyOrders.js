import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: bookings = [] } = useQuery({

        queryKey: ['bookings', user?.email],

        queryFn: async () => {

            const res = await fetch(`https://assignment-12-server-five.vercel.app/bookings?email=${user?.email}`, {

                headers: {
                    authorization: `bearer ${localStorage.getItem('jwToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h2 className='text-2xl mb-4'>My Orders are</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            bookings?.length ?
                                bookings?.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={booking.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.productName}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        {
                                            booking?.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-info btn-sm'>Pay</button></Link>

                                        }
                                        {
                                            booking?.price && booking.paid &&
                                            <button disabled className='btn btn-sm btn-info'>Paid</button>
                                        }

                                    </td>
                                </tr>
                                )
                                :
                                <></>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;