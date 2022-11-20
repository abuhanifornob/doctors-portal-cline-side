
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shareds/Loading/Loading';

const AvailabelAppointment = ({selectedDate}) => {
    // const [appointmentOptions,setAppointmentOptions]=useState([]);
    const [treatmen,setTreatmen]=useState(null);
    const date=format(selectedDate,"PP");

    //.............................  React Queary .................................................
    // const {data:appointmentOptions=[]}=useQuery({
    //     queryKey:["appointmentOptions"],
    //     queryFn:()=>fetch("http://localhost:5000/appointmentOptions")
    //     .then(res=>res.json())
    // })

    //........................Another Way Data Fetching for React Query...........................
    const {data:appointmentOptions=[],refetch,isLoading}=useQuery({
        queryKey:['appointmentOptions'],
        queryFn:async()=>{
           const res= await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
           //const res= await fetch(`http://localhost:5000/vs2/appointmentOptions`)

            const data =await res.json()
            return data
        }
    })


    // useEffect(() => {
    //   fetch("http://localhost:5000/appointmentOptions")
    //   .then(res=>res.json())
    //   .then(data=>setAppointmentOptions(data))
    // }, []);
//....................React Queary isLoasing Hook................
    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div className='mt-10'>
            <h3 className='text-2xl text-primary text-center '>Available Appointments on {format(selectedDate,"PP")}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                appointmentOptions.map(option=><AppointmentOption
                key={option._id}
                option={option}
                setTreatmen={setTreatmen}
                ></AppointmentOption>
                )
            }
            </div>
            {
              treatmen && 
                <BookingModal
                 treatmen={treatmen}
                 selectedDate={selectedDate}
                 setTreatmen={setTreatmen}
                 refetch={refetch}
                ></BookingModal>
            }
            
          
        </div>
    );
};

export default AvailabelAppointment;