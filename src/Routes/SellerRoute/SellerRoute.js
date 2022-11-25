
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import useAccount from '../../hooks/useAccount';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
     const[account]=useAccount()


    if (loading) {
        return <Loader></Loader>
    }
    if (user && account==='seller') {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;