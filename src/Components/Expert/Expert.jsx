import React from 'react';

const Expert = () => {
    return (
        <div className='mx-auto container  mt-10 ' >
            <h1 className='text-center text-5xl font-bold font-Poppins mb-10'>Our Experts</h1>
            <div className='gap-20 flex flex-col md:flex-row  justify-center items-center'>
                <div className='overflow-x-hidden'>
                    <div className="card w-full  shadow-xl bg-" data-aos="fade-right"  data-aos-duration="2000">
                    {/* data-aos="fade-right" data-aos-duration="2000" */}
                        <figure><img className='h-[350px] ' src="https://i.ibb.co/JvGZgZC/Therapist-1.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dr. Emily Smith </h2>
                            <p className='font-Poppins'>Nutritionist!</p>
                            <div className="card-actions justify-end">
                                <p className="font-medium font-Poppins">Email: nutritionist@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="card w-full  shadow-xl bg-" >
                    {/* data-aos="fade-up" data-aos-duration="2000" */}

                        <figure><img className='h-[350px] ' src="https://i.ibb.co/1ZKs4QW/Nutritionist.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dr. John Davis, PT</h2>
                            <p className='font-Poppins'> Physical Therapist!</p>
                            <div className="card-actions justify-end">
                                <p className="font-medium font-Poppins">Email: physicaltherapist@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-x-hidden'>
                    <div className="card w-full shadow-xl bg-" data-aos="fade-left" data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="2000">
                    {/* data-aos="fade-left" data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="2000" */}
                        <figure><img className='h-[350px] ' src="https://i.ibb.co/hWGXt4k/Psychologist.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Dr. Watson!</h2>
                            <p className='font-Poppins'>Psychologist!</p>
                            <div className="card-actions justify-end">
                                <p className="font-medium font-Poppins">Email: psychologist@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;