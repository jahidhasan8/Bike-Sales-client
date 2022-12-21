import React from 'react';
import ProductCategories from '../../ProductCategories/ProductCategories/ProductCategories';
import About from '../About/About';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import Banner from '../Banner/Banner';
import Discount from '../component/Discount';

const Home = () => {
    return (
        <div className='mx-4 mt-12 '>
            <Banner></Banner>
            <AdvertiseProducts></AdvertiseProducts>
            <ProductCategories></ProductCategories>
            <Discount></Discount>
            <About></About>
        </div>
    );
};

export default Home;