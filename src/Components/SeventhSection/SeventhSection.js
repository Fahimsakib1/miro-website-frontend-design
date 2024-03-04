import React from 'react';
import layer from '../../images/Layer/1.jpg'
import left from '../../images/Layer/left.png'
import right from '../../images/Layer/right.png'
import { MdOutlineArrowRightAlt } from 'react-icons/md';



const SeventhSection = () => {
    return (
        <div>
            <div className='md:mt-16 lg:mt-0 mt-10 px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-16 lg:py-20'>
                <div className='relative'>
                    <img className='w-full lg:h-[400px] md:h-[350px] h-[380px] rounded-lg' src={layer} alt="LayerImage" />
                    <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  ">
                        <div className='flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10'>
                            <img className=' lg:ml-0 md:ml-4 md:mt-10 lg:mt-0  mt-4 ml-0 lg:w-3/5 md:w-1/2 w-3/5 lg:h-[430px] md:h-[360px]  ' src={left} alt="LeftImage" />
                            <div className=''>
                                <div className='md:block hidden absolute lg:-top-20 md:-top-8 -top-6 lg:right-0 md:-right-10 -right-36'>
                                    <img className='lg:w-full md:w-3/5  mx-auto w-1/3' src={right} alt="RightImage" />
                                </div>
                                <div className='md:hidden block absolute -top-16 -ml-32'>
                                    <img className='flex justify-end items-end w-1/2  mx-auto ' src={right} alt="RightImage" />
                                </div>
                                <div className=''>
                                    <h1 className='lg:text-[22px] text-[21px] font-bold text-center'>The Ways We Work</h1>
                                    <p className='mt-2 lg:text-[18px] md:text-[16px] text-[16px] text-center'>How has our relationship with work changed?</p>
                                    <div className=" lg:mt-2 mt-5 inline-flex items-center justify-center lg:h-[46px] h-[40px] lg:px-10 px-6 font-medium text-white transition rounded-full  bg-[#4262FF] hover:bg-blue-600 cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150 md:mb-0 mb-8">
                                        <div className='flex justify-center items-center gap-x-1'>
                                            <p>View the report</p>
                                            <MdOutlineArrowRightAlt className='md:mt-[6px] mt-1 text-white text-2xl'></MdOutlineArrowRightAlt>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeventhSection;