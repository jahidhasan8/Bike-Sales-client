import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';


const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: products = [], refetch } = useQuery({

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

    const handleAdvertiseProduct = (product) => {
        console.log(product);

        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('jwToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log((data));
                if (data.modifiedCount) {
                    toast.success('Advertise Successful')
                    refetch()
                }
            })
    }

    const handleDeleteProduct = (product) => {

        fetch(`http://localhost:5000/products/${product._id}`, {

            method: 'DELETE',

            headers: {
                authorization: `bearer ${localStorage.getItem('jwToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch()
                    toast.success(` ${product.productName} deleted successfully`)
                }
            })
    }

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

                            // products?.length &&
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
                                <td >

                                    {
                                        product?.sold ?
                                        <p className='font-bold'>Sold</p>
                                        :
                                        <p className='font-bold'>Available</p>
                                    }
                                </td>
                                <td>
                                    {
                                        product.advertise ?
                                            <button disabled className='btn btn-sm font-bold '>Advertised</button>
                                            :
                                            <button onClick={() => handleAdvertiseProduct(product)} className='btn btn-info btn-sm'>Advertise</button>
                                    }

                                </td>
                                <td>
                                    <button onClick={()=>handleDeleteProduct(product)} className='btn btn-error btn-sm'>Delete</button>
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