import React from 'react'; 
import pepole1 from "../../../assets/images/people1.png"
import pepole2 from "../../../assets/images/people2.png"
import pepole3 from "../../../assets/images/people3.png"
import Testimonial from './Testimonial';
import quote from"../../../assets/icons/quote.svg"
const Testimonials = () => {
    const testimonitData=[
        {
            id:1,
            discription:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name:'Winson Herry',
            address:'Bangladesh',
            img:pepole1
        },
        {
            id:2,
            discription:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name:'Taharat Banu',
            address:'Bangladesh',
            img:pepole2
        },
        {
            id:3,
            discription:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name:'Anjela Jary',
            address:'Bangladesh',
            img:pepole3
        },
    ]
    return (
        <div className='mt-24 ml-14'>
           <div className='flex justify-between'>
            <div>
            <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
            <h1 className='text-4xl font-bold'>What Our Patients Says</h1>
            </div>
            <div>
                <figure>
                    <img className=' w-24 lg:w-48 ' src={quote} alt="icon" />
                </figure>
            </div>
            
            
            </div> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                testimonitData.map(testmonialdata=><Testimonial
                key={testmonialdata.key}
                testmonialdata={testmonialdata}
                ></Testimonial>)
               }
            </div>
        </div>
    );
};

export default Testimonials;