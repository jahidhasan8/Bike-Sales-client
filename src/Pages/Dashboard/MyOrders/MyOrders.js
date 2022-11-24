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

                          
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default MyOrders;