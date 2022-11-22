import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shareds/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (email) => {
        const proceed=window.confirm("Are You Sure , You want to Delete ?");
        if(proceed){
            fetch(`http://localhost:5000/doctors?email=${email}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        toast(`${email} is Delete Success`);
                        refetch();
                    }
    
                })
        }
       
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Phot</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, id) => <tr key={doctor._id}>
                                <th>{id + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={doctor.image} />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><button onClick={() => handleDelete(`${doctor.email}`)} className="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;