import React from 'react';
import Loader from '../../Shared/Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
const ProductCategories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    const handleCategory = (id) => {
        console.log(id)
    }
    return (
        <div className='mt-16'>
            <p className='text-center font-bold text-3xl mb-4'>All Category are :</p>
            {
                categories.map(category => <div className='text-center' key={category._id}>

                    <p  onClick={() => handleCategory(category._id)} className='p-2 font-bold text-2xl' ><Link>{category.name}</Link></p>
                </div>)
            }
        </div>
    );
};

export default ProductCategories;