import React from 'react';
import { Checkmark } from 'react-checkmark'
import toast from 'react-hot-toast';


const ProductCard = ({ product, setProductInfo }) => {


    const handleReport = (product) => {
        console.log(product);

        fetch(`http://localhost:5000/products/report/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('jwToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    toast.success(`${product.productName} reported Successfully`)
                    
                }
            })
    } 
  

    return (

        <div className="card  bg-base-100 shadow-xl">

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

                    {

                        <span className='mt-1'>
                            <Checkmark size='15px' color='blue' />
                        </span>

                    }

                    <span>Mo: {product.mobile}</span>
                    <span>{product.location}</span>
                </div>
                <p>{product.date}</p>

                <div className="card-actions justify-between mt-2">

                    <label onClick={() => handleReport(product)} className="btn btn-info text-white font-semibold">Report</label>

                    <label onClick={() => setProductInfo(product)} htmlFor="booking-modal" className="btn btn-info text-white font-semibold">Book Now</label>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;