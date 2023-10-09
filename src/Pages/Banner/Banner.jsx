import React from 'react';

const Banner = () => {
    return (
        <div className='bg relative '>
            <div className='absolute md:left-44 md:top-60  text-white ' data-aos="flip-up">

                <h1 className='font-Squada text-center md:text-start text-2xl md:text-7xl mb-5 ' >WELCOME TO <br />
                    HEALTH FAIRS DIRECT
                </h1>
                <span className='font-Poppins text-center md:text-start md:p-0'>

                    We are helping hundreds of businesses to open their business while providing <br /> a safe environment through our Virtual and On-Site, Health & Wellness Events.
                </span>
            </div>
            <img className='absolute hidden md:block top-[610px] md:top-[726px] ' src="../../../images/wave.svg" alt="" />
            {/* <div className='md: md:ml-52 text-white'>

               
            </div> */}
        </div>
    );
};

export default Banner;