import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imgKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()


    const { data: categories = [], isLoading } = useQuery({

        queryKey: ['categories'],

        queryFn: async () => {

            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data
        }
    })
    const handleAddProduct = (data) => {
        console.log(data);
        let date = new Date()
        let options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        const formatDate = (date.toLocaleTimeString("en-us", options));

        const image = data.image[0]
        const formData = new FormData();

        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const product = {
                        sellerName: data.sellerName,
                        mobile: data.mobile,
                        sellerEmail: user?.email,
                        productName: data.productName,
                        condition: data.condition,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        purchaseYear: data.purchaseYear,
                        location: data.location,
                        categoryId: data.category,
                        description: data.description,
                        image: imageData.data.url,
                        date: formatDate

                    }

                    //  saving products to mongodb by post method
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('jwToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('product added successfully')
                            navigate('/dashboard/myproducts')

                        })
                }

            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='w-96 p-12'>
            <h2 className="text-2xl">Add Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" {...register("sellerName", {
                        required: "Name is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile</span>
                    </label>
                    <input type="number" {...register('mobile', {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobile && <p className='text-red-400'>{errors.mobile.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" {...register('productName', {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.productName && <p className='text-red-400'>{errors.productName.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select {...register('condition')} className="select  input-bordered w-full max-w-xs">
                        <option disabled >Please select a condition?</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="number" {...register('originalPrice', {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-400'>{errors.originalPrice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="number" {...register('resalePrice', {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-400'>{errors.resalePrice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Purchase Year</span>
                    </label>
                    <input type="number" {...register('purchaseYear', {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchaseYear && <p className='text-red-400'>{errors.purchaseYear.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" {...register('location', {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-400'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select {...register('category')} className="select  input-bordered w-full max-w-xs">
                        <option disabled >Please select a Category</option>
                        {
                            categories.map(category => <option key={category._id}
                                value={category._id}>{category.name}</option>)
                        }

                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description', {
                        required: true
                    })} className="textarea textarea-bordered w-full max-w-xs" placeholder="Text"></textarea>

                    {errors.description && <p className='text-red-400'>{errors.description.message}</p>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: "photo is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-400'>{errors.image.message}</p>}
                </div>
                <input className='btn btn-info w-full mt-4' value="Add Product" type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;