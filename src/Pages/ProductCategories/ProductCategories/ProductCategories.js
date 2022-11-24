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

    /*  const handleCategory = (id) => {
         console.log(id)
     } */
    // onClick={() => handleCategory(category._id)}
    return (
        <div className='mt-16'>
            {/* <p className='text-center font-bold text-3xl mb-4'>All Category are :</p> */}
            <div className='grid grid-cols-3 gap-4 mb-4'>
                {
                    categories.map(category => <div className='text-center border bg-info' key={category._id}>

                        <p className='p-2 font-bold text-2xl text-center' ><Link to={`/products/${category._id}`}>{category.name}</Link></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;