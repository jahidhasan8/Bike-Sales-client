import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';

const UsersTable = ({ users,refetch }) => {

    const [deleteField, setdeleteField] = useState(null)

    const dismisModal = () => {
        setdeleteField(null)
    }

    const handleDelete = (user) => {
        console.log(user);

        fetch(`http://localhost:5000/users/${user._id}`, {

            method: 'DELETE',

            headers: {
                authorization: `bearer ${localStorage.getItem('jwToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount >0) {

                    refetch()
                    toast.success(` ${user.name} deleted successfully`)
                }
            })
    }
    return (
        <>
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

                                    <label onClick={() => setdeleteField(user)} htmlFor="delete-modal" className="btn btn-sm btn-error">Delete</label>

                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteField && <DeleteModal

                    text={`Are you sure, you want to delete`}
                    dismisModal={dismisModal}
                    action={handleDelete}
                    infoData={deleteField}

                >

                </DeleteModal>
            }
        </>
    );
};

export default UsersTable;