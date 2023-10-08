import React from 'react';

const Singleblog = ({ blog }) => {
    const { image, description, date, title } = blog
    return (
        <div >
            <div className="card bg-base-100 shadow-xl container mx-auto py-20">
                <figure><img className=' relative' src={image} alt="Shoes" /></figure>
                <div className="card-body mt-10 w-2/3 mx-auto">
                    <p>{date}</p>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Singleblog;