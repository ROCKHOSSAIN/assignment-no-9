import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthProvider'
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleSignOut = () => {

        logout()
            .then()
            .catch()
    }
    const navlinks =
        <>
            <li className='font-Poppins'><NavLink to='/'>Home</NavLink> </li>
            <li className='font-Poppins'><NavLink to='/about'>About Us</NavLink> </li>
            {
                user &&
                <>
                    <li className='font-Poppins'><NavLink to='/blog'>Blog</NavLink> </li>
                    <li className='font-Poppins'><NavLink to='/favourite'>Bookmarks</NavLink> </li>
                    <li className='font-Poppins'><NavLink to='/dashboard'>Review</NavLink> </li>
                </>
            }
            <li className='font-Poppins'><NavLink to='/contact'>Contact</NavLink> </li>




        </>
    return (
        <div>
            <div className='bg-black text-white'>

                <div className="navbar  container mx-auto ">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className=" lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                {navlinks}
                            </ul>
                        </div>
                        <img className='w-[160px] md:w-[220px]' src="https://i.ibb.co/ZGgdvdg/logo.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-4">
                        {
                            user ?
                                <>
                                    <span className='text-xs md:text-base'>{user.displayName ? user.displayName : 'Md Alif Hossain Rocky'}</span>
                                    <span><img className='w-[30px] md:w-[40px]' src={user.photoURL ? user.photoURL : 'https://i.ibb.co/0VghLK3/2-2.jpg'} alt="" /></span>

                                    <button onClick={handleSignOut} className="bg-white text-black  md:p-2 ">Sign Out</button>
                                </>
                                :
                                <Link to="/login">
                                    <button className="btn">Sign In</button>
                                </Link>

                        }

                        {/* <Link to="/register">
                            <button className="btn">Register</button>
                        </Link> */}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Navbar;