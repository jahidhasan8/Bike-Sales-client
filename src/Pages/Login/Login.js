import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';
import Lottie from "lottie-react";
import login from '../../login.json'
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { logIn, googleLogin, updateUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('')

    const location = useLocation()
    const [token] = useToken(userEmail)

    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (data) => {
        console.log(data);

        logIn(data.email, data.password)

            .then(result => {
                const user = result.user
                // console.log(user)
                setUserEmail(data.email)
                toast.success(' login successful')

            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)

            })

    }

    const handleGoogleLogin = () => {

        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('Google login Successful')

                const userInfo = {
                    displayName: user.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserInfo(user.displayName, user.email)

                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const saveUserInfo = (name, email) => {
        const user = { name, email }

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
        <div className="h-[600px] lg:flex justify-evenly items-center text-slate-600 mb-44 ">

<div className="text-center lg:text-left">
   <Lottie animationData={login} />
                </div>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be six characters or more' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-dark w-full mt-4' value="Login" type="submit" />

                </form>
                <p>Do not have an account? <Link className='text-secondary' to="/signup">Please Signup</Link></p>


                <div className="divider text-slate-600">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full btn-dark'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;