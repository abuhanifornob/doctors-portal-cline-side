import React from 'react';

const AppointmentOption = ({option,setTreatmen}) => {
    const {slots,name,price}=option;
    return (

        <div className="card w-96 bg-base-100 shadow-xl text-center ">
            <div className="card-body">
                <h2 className="text-2xl text-primary font-bold text-center">{name}</h2>
                <p>{slots.length>0?slots[0]:"Try Another Day"}</p>
                <p>{slots.length} {slots.length>1?"SPACES":"SPACE"} AVAILABLE</p>
                <p className='text-xl'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatmen(option)} className="btn btn-primary" htmlFor="booking-modal"  disabled={slots.length===0}>Book Appointment</label>
                </div>
            </div>
        </div>

    );
};

export default AppointmentOption;