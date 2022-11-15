import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailabelAppointment from '../AvailabelAppointment/AvailabelAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            
            <AvailabelAppointment
            selectedDate={selectedDate}
            ></AvailabelAppointment>
        </div>
    );
};

export default Appointment;