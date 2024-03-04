import React from 'react';
import { GoArrowRight } from "react-icons/go";
import pic from '../../images/hybridwork.png'










const FifthSection = () => {
    return (
        <div className='md:px-0 px-3 '>
            <div className=" md:mt-16 lg:mt-0 mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-28 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-sm">
                        <div className="max-w-xl mb-6">
                            <h2 className="text-start max-w-lg mb-6 font-sans  font-bold tracking-tight text-gray-900 md:text-[40px] text-4xl sm:leading-none">
                                Work together, <br />
                                <span className="inline-block">
                                    whenever you work
                                </span>
                            </h2>
                            <p className="text-start text-base text-gray-500 text-[16px]">
                                In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                            </p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div
                                className="flex justify-center items-center text-start gap-x-2 font-semibold  text-blue-500 hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer"
                            >
                                <p className=' border-b-2 border-blue-500 '>Learn more</p>
                                <GoArrowRight className='mt-1'></GoArrowRight>
                            </div>
                        </div>
                    </div>


                    <div >
                        <img
                            className="lg:mt-0 md:mt-3 mt-5  object-cover w-full h-80 rounded md:h-full lg:h-full"
                            src={pic}
                            alt="HeroImage"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FifthSection;