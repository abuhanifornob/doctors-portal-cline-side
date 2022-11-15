
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailabelAppointment = ({selectedDate}) => {
    const [appointmentOptions,setAppointmentOptions]=useState([]);
    const [treatmen,setTreatmen]=useState(null)

    useEffect(() => {
      fetch("appointmentOptions.json")
      .then(res=>res.json())
      .then(data=>setAppointmentOptions(data))
    }, []);

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
                ></BookingModal>
            }
            
          
        </div>
    );
};

export default AvailabelAppointment;