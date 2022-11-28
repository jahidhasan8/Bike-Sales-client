import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../ProductCategories/ProductCard/ProductCard';
import BookingModal from '../../BookingModal/BookingModal';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AdvertiseProducts = () => {

    const [productInfo, setProductInfo] = useState(null)
    const{user}=useContext(AuthContext)

    const { data: advertised = [],isLoading } = useQuery({

        queryKey: ['advertised'],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/products/advertised`, {

                headers: {
                    authorization: `bearer ${localStorage.getItem('jwToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    
    if(isLoading){
        return <Loader></Loader>
    }

  

    return (
        <div className='mt-14'>

            {
                user?.email &&
                advertised.length && 
                <h2 className='text-xl font-bold text-center'>Advertised products are</h2>
            }

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-16 px-4'>
                {
                     user?.email &&
                    advertised.map(product => <ProductCard
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

export default AdvertiseProducts;