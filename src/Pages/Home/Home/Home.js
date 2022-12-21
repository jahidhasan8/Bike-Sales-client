import React from 'react';
import ProductCategories from '../../ProductCategories/ProductCategories/ProductCategories';
import About from '../About/About';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import Banner from '../Banner/Banner';
import BannerShop from '../component/BannerShop';
import Clients from '../component/Clients';
import Discount from '../component/Discount';

const Home = () => {
    return (
        <div className='mx-4 mt-12 '>
            <Banner></Banner>
            <AdvertiseProducts></AdvertiseProducts>
            <ProductCategories></ProductCategories>
            <Discount></Discount>
            <Clients></Clients>
            <BannerShop></BannerShop>
            <About></About>
        </div>
    );
};

export default Home;