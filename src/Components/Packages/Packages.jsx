import React from 'react';
import { HiCheck } from "react-icons/hi";
const Packages = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-6xl font-Poppins text-center mb-10'>Pac<span className='text-sky-500'>kages</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                {/* 1st card */}
                <div className="card w-full shadow-xl" data-aos="zoom-out-left"  data-aos-duration="1500">
                    <figure className='flex-col'>
                        <h1 className='text-xl font-Squada'>Silver Vitality</h1>
                        <br />
                        <del className='opacity-80'><p className='opacity-80 font-medium'>Normally $59</p></del>
                        <h1 className='text-red-600 mt-1 text-4xl font-bold'>47 $</h1>
                    </figure>
                    <div className="card-body">
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Access to all basic health fair activities.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Health screenings to assess your well-being.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Participation in informative wellness workshops.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Fitness demonstrations to kickstart your journey to fitness.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">A chance to discover various wellness tips and tricks.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Opportunities to connect with local healthcare professionals.</h2>
                        </div>

                        <div className="justify-center card">
                            <button className="rounded-3xl p-3 bg-teal-500 text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* 2nd card  */}
                <div className="card w-full shadow-xl" data-aos="zoom-out-up"  data-aos-duration="1500">
                    <figure className='flex-col'>
                        <h1 className='text-xl font-Squada'>Platinum Wellness</h1>
                        <br />
                        <del className='opacity-80'><p className='opacity-80 font-medium'>Normally $169</p></del>
                        <h1 className='text-red-600 mt-1 text-4xl font-bold'>137 $</h1>
                    </figure>
                    <div className="card-body">
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Priority access to all health fair workshops</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Personalized fitness consultation with a expert</h2>
                        </div>

                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Exclusive access to specialized workshops .</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Complimentary access to fitness classes and wellness demos.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Wellness product samples and discount coupons.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Opportunities to connect with local healthcare professionals.</h2>
                        </div>

                        <div className="justify-center card">
                            <button className="rounded-3xl p-3 bg-teal-500 text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* 3rd card  */}
                <div className="card w-full shadow-xl" data-aos="zoom-out-right"  data-aos-duration="1500">
                    <figure className='flex-col'>
                        <h1 className='text-xl font-Squada'>Diamond Health</h1>
                        <br />
                        <del className='opacity-80'><p className='opacity-80 font-medium'>Normally $249</p></del>
                        <h1 className='text-red-600 mt-1 text-4xl font-bold'>187 $</h1>
                    </figure>
                    <div className="card-body">
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">VIP access to all health fair activities </h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">One to one consultations with renowned experts.</h2>
                        </div>
                       
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Exclusive entry to an advanced wellness seminar led by experts.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Personalized fitness assessment and tailored workout plan.</h2>
                        </div>
                        
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Gourmet healthy meals throughout the event.</h2>
                        </div>
                        <div className='flex '>
                            <HiCheck className='text-green-600 mt-1 rounded-full bg-gray-300'></HiCheck>
                            <h2 className="text-base font-Poppins">Fast-track access to health screenings and resources.</h2>
                        </div>

                        <div className="justify-center card">
                            <button className="rounded-3xl p-3 bg-teal-500 text-white">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Packages;