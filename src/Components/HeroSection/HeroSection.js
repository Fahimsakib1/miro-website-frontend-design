import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaGoogle } from "react-icons/fa6";
import heroImage from '../../images/heroImage.png'





const HeroSection = () => {

    <GoogleFontLoader
        fonts={[
            {
                font: 'Roboto',
                weights: [400, '400i'],
            },
            {
                font: 'Open Sans',
                weights: [400, 700],
            },
        ]}
        subsets={['cyrillic-ext', 'greek']}
    />



    return (

        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20">
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="lg:pr-0">
                        <h5 className="text-black text-start mb-4 md:text-4xl text-3xl font-bold" style={{ fontFamily: 'Open Sans, monospaced' }}>
                            Take ideas from
                            <br />
                            better to best
                        </h5>
                        <p className="font-semibold text-start mb-6 text-gray-600">
                            Miro is your team's visual platform to connect, <br />
                            collaborate, and create — together.
                        </p>




                        <input type="email" placeholder=" Enter your work email" className="px-4 py-[8px] input input-bordered w-full  rounded-full max-w-lg flex justify-start items-start" />
                        <div className="mt-3 w-full px-4 py-[8px] font-semibold rounded-full shadow bg-[#4262FF] max-w-lg hover:bg-blue-700 ">
                            <div className='text-center flex justify-center items-center gap-x-1'>
                                <p className='text-center text-white'>Sign up free</p>
                                <MdOutlineArrowRightAlt className='md:mt-[6px] mt-1 text-white text-2xl'></MdOutlineArrowRightAlt>
                            </div>
                        </div>
                        <p className="mt-2  text-start mb-4 text-gray-400">Collaborate with your team within minutes</p>

                        <div className="mt-8 md:w-4/6 w-full px-4 py-4 font-semibold rounded-md shadow  bg-gray-200 max-w-lg  ">
                            <div className='flex justify-center items-center gap-x-8'>
                                <div>
                                    <div className='flex justify-start items-start gap-x-2'>
                                        <BsStarFill className='md:text-xl text-lg text-orange-500'></BsStarFill>
                                        <BsStarFill className='md:text-xl text-lg text-orange-500'></BsStarFill>
                                        <BsStarFill className='md:text-xl text-lg text-orange-500'></BsStarFill>
                                        <BsStarFill className='md:text-xl text-lg text-orange-500'></BsStarFill>
                                        <BsStarHalf className='md:text-xl text-lg text-orange-500'></BsStarHalf>
                                    </div>
                                    <p className='md:text-[14px] text-[12px] text-black text-start font-normal'>Based on 5149+ reviews:</p>
                                </div>
                                <div className='flex justify-center items-center gap-x-3'>
                                    <FaGoogle className='mr-1 md:text-[20px] text-[18px] font-bold text-black'></FaGoogle>
                                    <p className='md:text-[18px] text-[16px] font-bold text-black'>GetApp</p>
                                    <p className='md:text-[18px] text-[16px] font-bold text-black'>Capterra</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div >
                        <img
                            className="lg:mt-0 md:mt-3 mt-5  object-cover w-full h-80 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                            src={heroImage}
                            alt="HeroImage"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HeroSection;