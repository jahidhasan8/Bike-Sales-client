import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';

const ProductCategories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        axios.get('https://assignment-12-server-five.vercel.app/categories')
            .then(data => {

                setCategories(data.data)
                setLoading(false)

            })
            .catch((error) => {
                toast.error(error.message);
            });
    }, [])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='mt-16'>

            <div className='grid grid-cols-3 gap-4 mb-4'>
                {
                    categories.map(category => <div className='text-center border bg-info' key={category._id}>

                    <Link to={`/products/${category._id}`}>
            <div className="card h-32  items-center card-side cursor-pointer shadow-xl px-5 py-5 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 flex justify-between">
                <div>
                    <figure><img src={category.image} alt="bikeimage" className='w-24 rounded-lg' /></figure>
                </div>
                <div className="card-body text-white">
                    <h2 className="card-title font-bold text-3xl">{category.name}</h2>
                </div>
            </div>
        </Link>

                    </div>)
                }

            </div>
        </div>
    );
};

export default ProductCategories;