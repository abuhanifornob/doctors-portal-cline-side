import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../Shareds/Loading/Loading';

const Myappointment = () => {
    const { user } = useContext(AuthContext);
    // const url = `http://localhost:5000/booking?email=${user?.email}`;
    console.log(user);

    const { data: booking = [],isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    console.log(booking);
    if(isLoading){
        return<Loading></Loading>
    }
    return (

        <div>
            <h3>My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Services Name</th>
                            <th>appointment Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((booking, id) => <tr
                                key={id}
                                className="hover">
                                <th>{id + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatmen}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                  {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-sm btn-primary'>Pay</button>
                                    </Link>
                                  }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Myappointment;