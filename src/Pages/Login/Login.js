import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {logIn,googleLogin}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = (data) => {
        console.log(data);

        logIn(data.email,data.password)

        .then(result=>{
            const user=result.user 
            console.log(user)
            toast.success(' login successful')
           
        })
        .catch(error=>{
            console.log(error.message)
            toast.error(error.message)
        
        })
     
    }

    const handleGoogleLogin=()=>{
        googleLogin(googleProvider)
        .then(result=>{
            const user=result.user
            console.log(user);
            toast.success('Google login Successful')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }


    return (
        <div className="h-[600px] flex justify-center items-center text-slate-600">
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