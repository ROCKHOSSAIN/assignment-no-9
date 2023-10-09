import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { ImGithub, ImGoogle } from "react-icons/im";
import { AuthContext } from "../../Components/AuthContext/AuthProvider";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import app from "../../Components/Firebase/firebase.config";
import swal from 'sweetalert';
import { HiEyeOff, HiEye } from "react-icons/hi";


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    
    const [RegistrationError, setRegistrationError] = useState(null)
    const [showpassword, setshowpassword] = useState(false)
    const auth = getAuth(app);
  
    const handleSubmit = e => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget)
        // console.log(e.currentTarget)
        // const email = form.get('email')
        // const password = form.get('password')
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value
        console.log(email, password)

        if (password.length < 6) {
            setRegistrationError('You have to put atleast 6 password')
        }
        else if (!/[A-Z]/.test(password)) {
            setRegistrationError('Your password should have atleast one upper case')
            return;
        }
        else if (!/[@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setRegistrationError('Your password should have atleast one special character')
            return;
        }
        createUser(email, password)
            .then(result => {
                //if the user is created then it will take the values  and send here
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                   console.error(error)
                  });
                console.log(result.user)
                swal("User has been created successfully");
                signOut(auth)
                e.target.reset();
            })
            .catch(error => {
                console.error(error)
            })
           
    }
    const handleGoogle = () => {

        googleSignIn()
            .then(result => {
                console.log(result.user)
                swal("Congratulations!!", "User has been created successfully", "success");

            })
            .catch(error => {
                console.error(error)
            })
    }
   
    return (
        <div>
            <Navbar></Navbar>
            <div className="py-24">

                <form onSubmit={handleSubmit} className="bg-cyan-800 card-body w-full md:w-1/3 mx-auto ">
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
                        <input
                            type={showpassword ? "text" : "password"}
                            name="password"
                            placeholder="Password" className="input input-bordered relative" required />
                        <div>
                            <span onClick={() => setshowpassword(!showpassword)} className="absolute bottom-[182px] md:bottom-[390px] right-[40px] md:right-[620px]">
                                {
                                    showpassword ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>
                                }
                            </span>
                        </div>
                        {/* <label className="label">
                            <span className="label-text text-white">Confirm Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Confirm Password" className="input input-bordered" required /> */}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">PhotoURL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Enter Your Photo URL" className="input input-bordered" required />
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
                    {
                        RegistrationError && <p className="text-xl text-red-400">{RegistrationError}</p>
                    }
                    <p className="italic font-medium mt-5 text-white">Already have an account?<Link to='/login' className="text-white font-bold text-base ml-5"> Login</Link></p>
                    <div className="form-control mt-6">
                        <button className="py-3 rounded-xl bg-[#ad1457] text-white out">Register</button>
                    </div>
                    <hr />
                    <h1 className="text-center text-white text-xl ">OR</h1>
                    <div className="flex flex-row justify-between">
                        <button onClick={handleGoogle} className="flex items-center border-2 rounded-xl p-4 text-white">Register with Google
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
