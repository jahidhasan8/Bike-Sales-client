
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAccount from '../../hooks/useAccount';
import Loader from '../../Pages/Shared/Loader/Loader';


const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
     const[account,isLoading]=useAccount(user?.email)


    if (loading || isLoading) {
        return <Loader></Loader>
    }
    if (user && account==='admin') {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;