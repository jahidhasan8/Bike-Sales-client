import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {

    const products = useLoaderData()

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-16 px-4'>
                {
                    products.map(product => <div key={product._id} className="card  bg-base-100 shadow-xl">
                        <figure><img className='h-60 w-full' src={product.image} alt="Bike" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productName}</h2>
                            <p>{product.description.slice(0, 100) + '...'}</p>
                            <p>Purchase Year: {product.purchaseYear}</p>
                            <div className='flex justify-between font-bold'>
                            <span>Original Price : ${product.originalPrice}</span>
                            <span>Price: ${product.resalePrice}</span>
                            </div>
                            <p>Condition : {product.condition}</p>
                            <div className='flex justify-between'>
                                <span>Seller: {product.sellerName}</span>
                                <span>Mo: {product.mobile}</span>
                                <span>{product.location}</span>
                            </div>
                            <p>{product.date}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;