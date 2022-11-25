import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import UsersTable from '../UsersTable/UsersTable';


const AllBuyers = () => {

    const { data: users = [], isLoading, refetch } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/users?accountType=${'buyer'}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('jwToken')}`
                    }
                })
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }
    });


    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h2 className="text-3xl mb-6">All Buyers are: {users.length}</h2>

            <UsersTable

                users={users}
                refetch={refetch}

            ></UsersTable>

        </div>
    );
};

export default AllBuyers;