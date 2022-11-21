import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/dashboard/users");
            const data = await res.json();
            return data
        }
    })
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
                           
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;