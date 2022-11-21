import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shareds/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {data:specialties =[],isLoading}=useQuery({
        queryKey:["specialties"],
        queryFn:async()=>{
            const res= await fetch("http://localhost:5000/appointmentspecialty");
            const data=await res.json();
            return data;
        }
        })
    const handleAddDoctor = data => {
        console.log(data);
    }
    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div className='w-96 p-7 shadow-xl'>
            <h2 className='text-2xl text-primary'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full" />
                    {errors.name && <span className='text-yellow-600'>This field is required</span>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full" />
                    {errors.email && <span className='text-yellow-600'>This field is required</span>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty", { required: true })} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick the Specialty</option>
                        {
                            specialties.map(specialty=> <option
                            key={specialty._id}
                            value={specialty.name}
                            >{specialty.name}</option>)
                        }
                       
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Phot</span>
                    </label>
                    <input {...register("img", { required: true })} type="file" placeholder="Chose Photo" className="input input-bordered w-full" />
                    {errors.img && <span className='text-yellow-600'>This field is required</span>}
                </div>

                {/* {
                        signUpError && <p className='text-red-700'>{signUpError}</p>
                    } */}
                <input className='btn btn-secondary w-full mt-2' type="submit" value="Add Doctor" />

            </form>

        </div>
    );
};

export default AddDoctor;