import React from 'react';

const Banner = () => {
    return (
        <div className='bg relative '>
            <div className='absolute md:left-44 md:top-60  text-white  '>

                <h1 className='font-Squada text-7xl mb-5 '>WELCOME TO <br />
                    HEALTH FAIRS DIRECT
                </h1>
                <span className='font-Poppins '>

                    we are helping hundreds of businesses to open their business while providing <br /> a safe environment thru our Virtual and On-Site, Health & Wellness Events.
                </span>
            </div>
            <img className='absolute top-[610px] md:top-[726px] ' src="../../../images/wave.svg" alt="" />
            {/* <div className='md: md:ml-52 text-white'>

               
            </div> */}
        </div>
    );
};

export default Banner;