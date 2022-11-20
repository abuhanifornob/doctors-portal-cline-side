import { error } from 'daisyui/src/colors';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser,userProfileUpdate}=useContext(AuthContext);
    const[signUpError,setSignUpError]=useState("");
    const navigate=useNavigate();



   
    const onSubmit = data =>{
        console.log(data);
        setSignUpError("")
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
             toast("SignUp Success!!!")
            const userinfo={
                displayName:data.name
            }
            userProfileUpdate(userinfo)
            .then(()=>{
                navigate("/")
            })
            .catch(()=>{})
        })
        .catch(error=>
            {
                console.error(error);
                setSignUpError(error.message);
            })
    } 
    return (
        <div className='h-[556px] flex justify-center items-center ' >
            <div className='w-96 p-7 shadow-xl'>
                <h1 className='text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full" />
                        {errors.email && <span className='text-yellow-600'>This field is required</span>}
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
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required:"This Filed is Must ber Filup", maxLength:{value:18,message:"Don't Use More then 18 Cherecter "}, minLength: { value:6,message: "password Must be 6 Charecter " },
                        pattern:{
                            value:/(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/,
                            message:"Password must Be Strong"
                        },
                    
                    })} type="password" placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <span className='text-yellow-600'>{errors.password?.message}</span>}
                        <label className="label">
                            <span className="label-text">Forgot Password ?</span>
                        </label>

                    </div>
                    {
                        signUpError && <p className='text-red-700'>{signUpError}</p>
                    }
                    <input className='btn btn-secondary w-full mt-2' type="submit" value={"Sign Up"} />

                </form>

                <label className="label text-sm ">
                    <span className="label-text">Your Have a Account?<Link to="/login" className='text-primary'>Please Log In</Link></span>
                </label>


                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                </div>
                <button className="btn btn-outline btn-ghost w-full ">CONTINUE WITH GOOGLE</button>

            </div>


        </div>
   
    );
};

export default SignUp;