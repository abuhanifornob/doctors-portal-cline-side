import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const serviceData=[
        {
            id:1,
            title:"Fluoride Treatment",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:fluoride
        },
        {
            id:2,
            title:"Cavity Filling",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:cavity
        },
        {
            id:3,
            title:"Teeth Whitening",
            describtion:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:whitening
        }
    ]
    return (
        <div className='mt-10'>
            <div className='text-center mb-4'>
                <h3 className='text-primary text-3xl font-bold'>OUR SERVICES</h3>
                <h4 className='fw-bold text-3xl font bold'>Services We Provide</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    serviceData.map(service=><Service
                     key={service.id}
                     service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;