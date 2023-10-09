import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import { ImGoogle } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from '../../Components/AuthContext/AuthProvider';
import app from '../../Components/Firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import swal from 'sweetalert';

const Login = () => {
  const auth = getAuth(app);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('its your location',location)
    const [error,seterror]= useState(null)
    const {signIn,googleSignIn}= useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
        console.log(result.user)
        swal("Welcome!", "User has been logged in successfully", "success");
        navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.error(error)
            seterror('Your Email or Password is wrong!!')

        })
    }
    const handleGoogle=()=>{

        googleSignIn()
        .then(result=>{
            console.log(result.user)
            swal("Welcome!", "User has been logged in successfully", "success");

        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-16'>

                <form onSubmit={handleLogin} className="card-body w-full md:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        error && <p className='text-red-500 text-xl font-bold'>{error}</p>
                    }
                    <p className="italic font-medium mt-5 text-black">Do not have an account?<Link to='/register' className="text-black font-bold text-base ml-5"> Register</Link></p>
                    <div className="form-control mt-6">
                        <button className="py-3 rounded-md bg-sky-600 text-white">Login</button>
                    </div>
                    <div className='mx-auto'>
                    <button onClick={handleGoogle} className="flex items-center border-2 rounded-xl p-4 text-white bg-cyan-700">Login with Google
                    <ImGoogle className='ml-3'></ImGoogle></button>
                   
                </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
