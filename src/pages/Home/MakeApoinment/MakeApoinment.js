import React from 'react';
import appointment from "../../../assets/images/doctor.png"
import bgAppointment from "../../../assets/images/appointment.png"


const MakeApoinment = () => {
    return (
        <div className="hero mt-32" 
        style={{ backgroundImage: `url(${bgAppointment})` }}
        >
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={appointment} className="lg:w-1/2 hidden md:block lg:block rounded-lg shadow-2xl lg:-mt-32" />
                <div className='pl-12 pb-4 py-10'>
                    <h3 className='font-bold text-xl text-primary mb-6'>Appointment</h3>
                    <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">
            Get Started
          </button>
                </div>
            </div>
        </div>
    );
};

export default MakeApoinment;