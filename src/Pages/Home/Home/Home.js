import React from 'react';
import ProductCategories from '../../ProductCategories/ProductCategories/ProductCategories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-4 mt-12 '>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;