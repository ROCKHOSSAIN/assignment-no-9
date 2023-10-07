import React from 'react';

const Expert = () => {
    return (
        <div className='mx-auto container  mt-10 '>
        <h1 className='text-center text-5xl font-bold font-Poppins mb-10'>Our Experts</h1>
            <div className='gap-20 flex flex-col md:flex-row  justify-center items-center'>
            <div>
                <div className="card w-full md:h-[500px] shadow-xl bg-">
                    <figure><img className='' src="https://i.ibb.co/JvGZgZC/Therapist-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Nutritionist!</h2>
                        <p>Dr. Emily Smith</p>
                        <div className="card-actions justify-end">
                            <p className="">Email: nutritionist@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="card w-full h-[500px] shadow-xl bg-">
                    <figure><img className='' src="https://i.ibb.co/1ZKs4QW/Nutritionist.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Physical Therapist!</h2>
                        <p>Dr. John Davis, PT</p>
                        <div className="card-actions justify-end">
                            <p className="">Email: physicaltherapist@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="card w-full h-[500px] shadow-xl bg-">
                    <figure><img className='' src="https://i.ibb.co/hWGXt4k/Psychologist.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Psychologist!</h2>
                        <p>Dr. Watson</p>
                        <div className="card-actions justify-end">
                            <p className="">Email: psychologist@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Expert;