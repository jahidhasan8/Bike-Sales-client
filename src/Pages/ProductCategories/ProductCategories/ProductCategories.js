import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';

const ProductCategories = () => {

     const [categories, setCategories]=useState([])
     const[loading,setLoading]=useState(true)
     useEffect(()=>{
         
        axios.get('http://localhost:5000/categories')
        .then(data=>{
            
            setCategories(data.data)
            setLoading(false)
            
        })
        .catch((error) => {
            toast.error(error.message);
         });
     },[])
    
     if(loading){
        return <Loader></Loader>
     }
  
    return (
        <div className='mt-16'>
           
            <div className='grid grid-cols-3 gap-4 mb-4'>
                {
                    categories.map(category => <div className='text-center border bg-info' key={category._id}>

                <p className='p-2 font-bold text-2xl text-center text-white' ><Link to={`/products/${category._id}`}>{category.name}</Link></p>
                    </div>)
                }
                
            </div>
        </div>
    );
};

export default ProductCategories;