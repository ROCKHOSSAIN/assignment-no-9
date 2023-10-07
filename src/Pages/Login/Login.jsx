import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { ImGoogle } from "react-icons/im";
const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-16'>

                <form className="card-body w-full md:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
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
                    <div className="form-control mt-6">
                        <button className="py-3 rounded-md bg-sky-600 text-white">Login</button>
                    </div>
                    <div className='mx-auto'>
                    <button className="flex items-center border-2 rounded-xl p-4 text-white bg-cyan-700">Login with Google
                    <ImGoogle className='ml-3'></ImGoogle></button>
                   
                </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
