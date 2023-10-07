import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Event = () => {
    const [blog,setblog] = useState([])
    useEffect(()=>{
        fetch('../../../public/healthfairData.json')
        .then(result=>result.json())
        .then(data=>setblog(data))
    },[])

    return (<div className='mt:10 md:mt-32'>
        <h1 className='text-6xl text-center font-Poppins'>Latest events</h1>
        <div className='mx-auto container grid grid-cols-1  md:grid-cols-3 gap-10 mt:10 md:mt-32'>
            
            
            {
                blog?.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    </div>
    );
};

export default Event;