import React from 'react';

const ProductCard = ({product,setProductInfo}) => {


    return (

            <div  className="card  bg-base-100 shadow-xl">

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
                        <label onClick={()=>setProductInfo(product)}  htmlFor="booking-modal" className="btn btn-info text-white font-semibold">Book Now</label>
                    </div>
                </div>
            </div>

    );
};

export default ProductCard;