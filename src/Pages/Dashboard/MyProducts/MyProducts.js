import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';


const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: products = [] } = useQuery({

        queryKey: ['products', user?.email],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {

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
            <h2 className="text-3xl">My Products are</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sale status</th>
                            <th>Advertising</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            products?.length &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.resalePrice}</td>
                                <td>available</td>
                                <td>
                                    {<Link><button className='btn btn-info btn-sm'>Advertise</button></Link>}

                                </td>
                                <td>
                                    <button className='btn btn-error btn-sm'>Delete</button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;