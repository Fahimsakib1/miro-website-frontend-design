import React from 'react';
import image1 from '../../images/Wallmart1.png'
import image2 from '../../images/Cisco1.png'
import image3 from '../../images/Volvo.png'
import image4 from '../../images/deloitte.png'
import image5 from '../../images/Okta.png'

const ThirdSection = () => {
    return (
        <div className='mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20'>
            <h1 className='text-center text-lg text-gray-600'>Trusted by 45M+ users</h1>
            <div className='mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mx-auto md:gap-x-10 md:gap-y-0 gap-y-3'>
                <div>
                    <img className='mx-auto lg:w-40 md:w-64 w-56 lg:h-24 md:h-20 h-28' src={image1} alt="" />
                </div>
                <div>
                    <img className='mx-auto lg:w-40 md:w-64 w-40 lg:h-12 md:h-16 h-12 lg:mt-5 md:mt-1 mt-0 md:mb-0 mb-6' src={image2} alt="" />
                </div>
                <div>
                    <img className='mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-20' src={image3} alt="" />
                </div>
                <div>
                    <img className='mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} alt="" />
                </div>
                <div>
                    <img className='mx-auto lg:w-40 md:w-64 w-40 lg:h-24 md:h-20 h-20' src={image5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;