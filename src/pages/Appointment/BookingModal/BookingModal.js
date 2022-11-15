import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatmen, selectedDate,setTreatmen}) => {
    const { name, slots } = treatmen;
    const date = format(selectedDate, "PP");

    const handleBooking=(event)=>{
        event.preventDefault();
        const form=event.target;
        const date=form.date.value;
        const selectedOption=form.selectOption.value;
        const patient=form.name.value;
        const phone=form.phone.value;
        const email=form.email.value;
        console.log(date,selectedOption,name,phone,email);
        const booking={
            appointmentDate:date,
            treatmen:name,
            patient,
            phone,
            email,
            slot:selectedOption
        }
        console.log(booking);
        setTreatmen(false)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6'>
                        <input type="text" name="date" placeholder="Type here" className="input input-bordered w-full" value={date} readOnly />
                        <select name='selectOption' className="select select-primary w-full">
                            {
                                slots.map((slot,index)=><option 
                                value={slot}
                                key={index}
                                
                                >{slot}</option>)
                            }
                            
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="btn btn-primary  w-full" value="Summit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;