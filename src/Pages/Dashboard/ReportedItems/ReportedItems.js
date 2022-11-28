import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ReportedItems = () => {


    const { data: products = [], refetch } = useQuery({

        queryKey: ['products'],

        queryFn: async () => {

            const res = await fetch('http://localhost:5000/products/reported', {

                headers: {
                    authorization: `bearer ${localStorage.getItem('jwToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteReportedProduct = (id) => {

        fetch(`http://localhost:5000/products/${id}`, {

            method: 'DELETE',

            headers: {
                authorization: `bearer ${localStorage.getItem('jwToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch()
                    toast.success('Reported Product deleted successfully')
                }
            })
    }


    return (
        <div>
            <h2 className='text-3xl'>Reported Items are</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            products?.length &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.sellerEmail}</td>
                                <td>{product.productName}</td>
                                <td>{product.resalePrice}</td>

                                <td><p className='font-bold'>Reported</p></td>
                                <td>
                                    <button onClick={() => handleDeleteReportedProduct(product._id)} className='btn btn-error btn-sm'>Delete</button>
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

export default ReportedItems;