import React from 'react';

const Blog = ({ blog }) => {
    const { id ,image, title,description } = blog
    return (
        <div>
           

        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='md:h-[250px] md:w-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-br from-green-300 to-blue-500">Explore it!!</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;