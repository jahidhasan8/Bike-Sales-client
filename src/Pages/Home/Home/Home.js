import React from 'react';
import ProductCategories from '../../ProductCategories/ProductCategories/ProductCategories';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-4 mt-12 '>
            <Banner></Banner>
            <AdvertiseProducts></AdvertiseProducts>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;