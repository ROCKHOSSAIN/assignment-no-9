import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import Singleblog from './Singleblog';

const BlogCards = () => {
    const{id} = useParams();
    const blogs = useLoaderData();
    const showblogs = blogs.find(blog=>blog.id==id);
    console.log(showblogs)
    return (
        
        <div>
            <Navbar></Navbar>
            <Singleblog blog={showblogs}></Singleblog>
        </div>
    );
};

export default BlogCards;