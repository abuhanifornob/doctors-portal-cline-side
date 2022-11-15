import React, { useState } from 'react'
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
   
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="Dental Chair" className="max-w-sm rounded-lg shadow-2xl ml-6" />
                    <div>
                       <DayPicker
                       mode='single'
                       selected={selectedDate}
                       onSelect={setSelectedDate}
                
                       />

                       <p>Available Appointments on {format(selectedDate,"PP")}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;