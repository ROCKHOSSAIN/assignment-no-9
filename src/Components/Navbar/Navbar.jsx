import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    const navlinks =
        <>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/about'>About Us</NavLink> </li>
            <li><NavLink to='/blog'>Blog</NavLink> </li>
            <li><NavLink to='/favourite'>Favourite</NavLink> </li>


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
                        <img className='lg:w-1/3' src="../../../images/logo.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-4">
                        <Link to="/login">
                            <button className="btn">Sign In</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
           
               

        </div>
    );
};

export default Navbar;