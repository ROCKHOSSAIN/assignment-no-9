import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div >
        <div className='text-4xl flex items-center justify-center '>
            Its An Error page<br />
        </div>
        <span className='text-9xl flex justify-center'>404</span>
        <div className='text-center'>
        <Link className="/">
        
        <button className='btn btn-primary'>
            GO BACK TO HOME
        </button>
        </Link>
        </div>
    </div>
    );
};

export default Errorpage;