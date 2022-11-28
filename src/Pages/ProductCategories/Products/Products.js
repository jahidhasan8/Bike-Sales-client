import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {

    const products = useLoaderData()
    const[productInfo,setProductInfo]=useState(null)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-16 px-4'>
                {   
                   products.length &&
                    products?.map(product => <ProductCard
                        key={product._id}
                        product={product}
                         setProductInfo={setProductInfo}
                    >

                    </ProductCard>)
                    
                }
            </div>

           {
            productInfo &&
             <BookingModal
             product={productInfo}
             setProductInfo={setProductInfo}
             >
 
             </BookingModal>
           }
        </div>
    );
};

export default Products;