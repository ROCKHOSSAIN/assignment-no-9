import React, { useEffect, useState } from 'react';
import BookMarks from './BookMarks';
import Navbar from '../../Components/Navbar/Navbar';

const Favourite = () => {
    const [details,setdetails] = useState([])
    const [noFound,setNoFound] = useState(false);
    useEffect(()=>{
        const blogItems = JSON.parse(localStorage.getItem('bookmarks'));
        if(blogItems){
            setdetails(blogItems)
            console.log(details)
        }
        else{
            setNoFound('no data found')
        }
        
    },[])
    return (
        <div>
            <Navbar></Navbar>

            {
                noFound?<p className='h-[80vh] flex justify-center items-center'>{noFound}</p> : 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10 w-full md:w-2/3 mx-auto'>
                    {
                        
                        details.map(detail=><BookMarks key={detail.id} detail={detail}></BookMarks>)
                    }
                </div>
            }
        </div>
    );
};

export default Favourite;