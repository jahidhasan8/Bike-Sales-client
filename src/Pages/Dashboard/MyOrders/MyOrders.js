import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    return (
        <div>
            <h2 className='text-2xl mb-4'>My Orders are</h2>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                           {/*  {
                                bookings &&
                                bookings?.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking?.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>

                                        }
                                        {
                                            booking?.price && booking.paid && <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                </tr>
                                )
                            } */}

                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default MyOrders;