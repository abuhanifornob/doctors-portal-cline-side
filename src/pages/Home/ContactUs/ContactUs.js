import React from 'react';
import img from "../../../assets/images/appointment.png"

const ContactUs = () => {
    return (
        <section className='mt-8'  style={{
            background:`url(${img})`
        }}>
             <div className='w-[359px] lg:w-[450px] mx-auto'>
            <div className='text-center my-12'>
                <h3 className='text-primary font-bold text-xl'>Contact Us</h3>
                <h2 className='text-4xl  text-white'>Stay connected with us</h2>
                </div>
                <div>
                <form className='gap-8'>
                <input type="text" placeholder="Email Address" className="input w-full mb-4 " />
                <input type="text" placeholder="Subjects" className="input w-full mb-4 " />
                <textarea className="textarea textarea-bordered h-24 w-full mb-4" placeholder="Your Message"></textarea>
                <div className='flex justify-center '>
                <button className="btn btn-primary my-6" type='submit'>Submit</button>
                </div>
                
            
                
                </form>
                </div>
               
            
        </div>
        </section>
       
    );
};

export default ContactUs;