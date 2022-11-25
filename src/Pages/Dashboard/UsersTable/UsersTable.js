import React from 'react';

const UsersTable = ({users}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>
                                <label className="btn btn-sm btn-error">Delete</label>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;