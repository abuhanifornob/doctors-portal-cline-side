import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data
        }
    });
    const handleMakeAdmin=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:"PUT",
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount>0){
            refetch();
           }
        })
    }
    return (
        <div>
            <h2>This is All User Part</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,id)=><tr
                            key={user._id}
                            className="hover">
                            <th>{id+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    !user?.role &&   <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-sm btn-primary">Make Admin</button>
                                }
                               </td>
                            <td><button className="btn btn-sm btn-danger">Delete</button></td>
                           
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;