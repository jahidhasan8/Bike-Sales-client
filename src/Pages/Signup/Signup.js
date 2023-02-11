import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import signup from '../../signup.json'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const [token] = useToken(userEmail)

    if (token) {
        navigate('/')
    }

    const handleSignup = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                // console.log(user);
                toast.success('Account created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserInfo(data.name, data.email, data.accountType)

                    })
                    .catch(error => toast.error(error.message))
            })

            .catch(error => {
                toast.error(error.message)

            })
    }

    const saveUserInfo = (name, email, accountType) => {
        const user = { name, email, accountType }

        fetch('https://assignment-12-server-five.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserEmail(email)
            })
    }

    return (
        <div className="h-[600px] lg:flex justify-evenly items-center text-slate-600 lg:mb-0 mb-96">

            
<div className="text-center lg:text-left w-96">
   <Lottie animationData={signup} />
                </div>

            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Signup</h2>

                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Options</span>
                        </label>
                        <select {...register('accountType')} className="select  input-bordered w-full max-w-xs">
                            <option disabled >Please select a option?</option>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be six characters or more' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-dark w-full mt-4' value="Signup" type="submit" />

                </form>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please login</Link></p>
            </div>
        </div>
    );
};

export default Signup;