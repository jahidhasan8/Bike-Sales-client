import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../Loader/Loader';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => toast.error(error.message))
    }

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        axios.get('https://assignment-12-server-five.vercel.app/categories')
            .then(data => {

                setCategories(data.data)
                setLoading(false)

            })
            .catch((error) => {
                toast.error(error.message);
            });
    }, [])

    if (loading) {
        return <Loader></Loader>
    }

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {
            categories.length > 0 &&
            categories.map(category => <li key={category._id}>
                <Link to={`/products/${category._id}`} className={'rounded-xl capitalize'}> {category.name}</Link>
            </li>)
        }

        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link onClick={handleLogout}>LogOut</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar flex rounded-md justify-between bg-[#3abff8]  text-black font-bold">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold text-black">Bike Sales</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {navMenu}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;