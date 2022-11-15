import React from 'react';

const Testimonial = ({ testmonialdata }) => {
    const { discription, name, address, img } = testmonialdata;
    return (
        <div className="card w-96  rounded-lg shadow-2xl">
            <div className="card-body items-center text-start">

                <p>{discription}</p>
                <div className="card-actions justify-end items-center gap-7">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                    <div className=''>
                        <h3>{name}</h3>
                        <h4>{address}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;