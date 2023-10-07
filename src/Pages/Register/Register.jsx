import Navbar from "../../Components/Navbar/Navbar";
import { ImGithub,ImGoogle } from "react-icons/im";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="py-24">

            <form className="bg-cyan-800 card-body w-full md:w-1/3 mx-auto ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text text-white">Confirm Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Confirm Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Age</span>
                    </label>
                    <input type="number" name="age" placeholder="Age" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Date of Birth</span>
                    </label>
                    <input type="date" name="dateOfBirth" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Address</span>
                    </label>
                    <textarea name="address" placeholder="Address" className="textarea textarea-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="py-3 rounded-xl bg-[#ad1457] text-white out">Register</button>
                </div>
                <hr />
                <h1 className="text-center text-white text-xl ">OR</h1>
                <div className="flex flex-row justify-between">
                    <button className="flex items-center border-2 rounded-xl p-4 text-white">Register with Google
                    <ImGoogle className="ml-3"></ImGoogle>
                    </button>

                    <button className="flex items-center border-2 rounded-xl p-4 text-white">Register with Github
                    <ImGithub className="ml-3">flex items-center </ImGithub>
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Register;
