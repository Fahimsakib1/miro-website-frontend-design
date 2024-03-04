import React from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const ForthSection = () => {
    return (
        <div>
            <div className=" md:mt-24 lg:mt-10 mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div className=''>
                        <div className='lg:-ml-20 md:ml-28 sm:ml-28 ml-20 -mt-12 absolute  w-3/4 mx-auto'>
                            <p className="mb-10 rotate-12 inline-block px-6  py-[6px]  text-xs font-bold tracking-wider bg-yellow-400 text-black uppercase rounded-xl ">
                                Your Idea Starts Here
                            </p>
                        </div>
                    </div>
                    <h2 className="mt-4 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            Collaborate without
                        </span> <br />
                        constraints
                    </h2>
                </div>
                <div className="md:px-12 px-4 mx-auto grid gap-10 row-gap-5 mb-8 md:row-gap-16 lg:grid-cols-3 sm:grid-cols-2">
                    <div className=" duration-300 transform bg-white  hover:shadow-2xl rounded-lg hover:cursor-pointer">
                        <div className="h-full p-5  rounded-r shadow-sm">
                            <h6 className="text-start text-black text-lg mb-5 font-bold leading-5">Free forever</h6>
                            <p className="text-justify text-sm text-gray-500">
                                Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <br /> <span className='text-blue-600 font-medium'>pricing plans</span> for more features.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white  hover:shadow-2xl rounded-lg hover:cursor-pointer">
                        <div className="h-full p-5  rounded-r shadow-sm">
                            <h6 className="text-start text-black text-lg mb-5 font-bold leading-5">Easy integrations</h6>
                            <p className="text-justify text-sm text-gray-500">
                                Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full <br />  list in our <span className='text-blue-600 font-medium'>Marketplace</span>.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white  hover:shadow-2xl rounded-lg hover:cursor-pointer">
                        <div className="h-full p-5  rounded-r shadow-sm">
                            <h6 className="text-start text-black text-lg mb-5 font-bold leading-5">Security first</h6>
                            <p className="text-justify text-sm text-gray-500">
                                We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more <br /> at our <span className='text-blue-600 font-medium'> Trust Center</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" mt-10 inline-flex items-center justify-center h-[46px] px-10 font-medium text-white transition rounded-full  bg-[#4262FF] hover:bg-blue-600 cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150">
                    <div className='flex justify-center items-center gap-x-1'>
                        <p>Sign up free</p>
                        <MdOutlineArrowRightAlt className='md:mt-[6px] mt-1 text-white text-2xl'></MdOutlineArrowRightAlt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForthSection;