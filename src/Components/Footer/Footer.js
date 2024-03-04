import React from 'react';
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/Youtube.png';
import { GoDash } from "react-icons/go";
import path from '../../images/Path2.png'











const Footer = () => {


    return (
        <div>
            <div className=' mb-0 pb-0 mt-48 bg-[#02033B] '>
                <div
                >
                    <footer className="footer  px-10 pt-24 pb-16  text-white   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-12 ">

                        <div className='md:mt-0 -mt-6'>
                            <span className="text-[23px] text-white font-bold mb-[30px] font-mono">Scan.Detect.Remove.</span>
                            <div
                                className="mt-4 flex justify-start items-center gap-x-[36px]"
                            >
                                <img
                                    className="hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer hover:-translate-y-1 w-[36px] h-[36px]" 
                                    title='Twitter'
                                    src={twitter}
                                    alt="TwitterImage"
                                />
                                <img
                                    className="hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer hover:-translate-y-1 w-[36px] h-[36px]"
                                    title='Facebook'
                                    src={facebook}
                                    alt="FacebookImage"
                                />
                                <img
                                    className="hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer hover:-translate-y-1  w-[36px] h-[36px]"
                                    title='YouTube'
                                    src={youtube}
                                    alt="YoutubeImage"
                                />
                            </div>
                            <div className='mt-8 flex justify-start items-center gap-x-6'>
                                <p className="text-[11px] hover:text-amber-500 text-gray-400 underline hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer ">Privacy Policy</p>
                                <p className="text-[11px] hover:text-amber-500 text-gray-400 underline hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer ">Terms of Service</p>
                            </div>
                            <p className='mt-[48px] text-[11px] text-gray-400 text-start'>Copyright © 2022 Certo Software Limited | Registered in <br /> England & Wales No. 10072356</p>
                            <p className='mt-[8px] text-[11px] text-gray-400'>Designed & developed by <span className='underline hover:text-amber-500 hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer '>Bigger Picture</span></p>
                        </div>


                        <div>
                            <span className="text-[35px] font-bold text-white mt-2">Miro.</span>
                            <hr className=' w-[158px] mt-[25px] border-2 border-gray-500 font-bold  mb-[40px]' />
                            <div className='mb-5 flex justify-start items-center gap-x-3 hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer '>
                                <GoDash className='text-[30px] text-[#FFC247]'></GoDash>
                                <p className="text-[19px] text-[#FFC247] font-bold">iPhone</p>
                            </div>
                            <div className='mb-5 flex justify-start items-center gap-x-3 hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer '>
                                <GoDash className='text-[30px] text-[#FFC247]'></GoDash>
                                <p className="text-[19px] text-[#FFC247] font-bold">Android</p>
                            </div>
                            <div className='mb-5 flex justify-start items-center gap-x-3 hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer '>
                                <GoDash className='text-[30px] text-[#FFC247]'></GoDash>
                                <p className="text-[19px] text-[#FFC247] font-bold">Help</p>
                            </div>
                            <div className='mb-5 flex justify-start items-center gap-x-3 hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer '>
                                <GoDash className='text-[30px] text-[#FFC247]'></GoDash>
                                <p className="text-[19px] text-[#FFC247] font-bold">About</p>
                            </div>
                            <div className='mb-5 flex justify-start items-center gap-x-3 hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer '>
                                <GoDash className='text-[30px] text-[#FFC247]'></GoDash>
                                <p className="text-[19px] text-[#FFC247] font-bold">Insights</p>
                            </div>
                        </div>

                        {/* Only visible for Large and Small devices. Hidden for medium devices.  */}
                        <div className="lg:block sm:block block md:hidden relative mx-auto">
                            <img
                                src={path}
                                alt="PathImage"
                                className="w-full h-auto"
                            />
                            <div className="w-full p-[36px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  ">
                                <h1 className="lg:mt-1 mt-3 lg:text-[23px] text-[18px] text-start text-black font-bold">Sign up to our newsletter</h1>
                                <p className="lg:mt-[21px] mt-[14px] lg:text-[15px] text-[13px] text-start text-black">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                                <div className='lg:mb-0 mb-4 lg:mt-[36px] mt-[16px] '>
                                    <fieldset className="w-full space-y-1 text-gray-100">
                                        <div className="flex">
                                            <input type="text" placeholder="Email address" className="text-[15px] px-4 flex flex-1 text-start border sm:text-sm  py-2 rounded-l-full bg-white text-gray-700 " />
                                            <span className="text-white flex items-center px-5  sm:text-sm rounded-r-full  bg-[#02033B] cursor-pointer hover:bg-gray-950" title='Submit'>Submit</span>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                    </footer>

                    
                    {/* Only visible for medium devices. Hidden for Large and Small devices.  */}
                    <div className="lg:hidden md:block sm:hidden hidden mb-16 w-1/2 relative mx-auto">
                        <img
                            src={path}
                            alt="PathImage"
                            className="w-full h-auto"
                        />
                        <div className=" p-[36px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                            <h1 className="text-[20px] text-start text-black font-bold">Sign up to our newsletter</h1>
                            <p className="mt-2 text-[13px] text-start text-black">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <div className='mb-3 mt-[26px]'>
                                <fieldset className="w-full space-y-1 text-gray-100">
                                    <div className="flex">
                                        <input type="text" placeholder="Email address" className="text-[15px] px-4 flex flex-1 text-start border sm:text-sm py-2 rounded-l-full bg-white text-gray-700  " />
                                        <span className="text-white flex items-center px-5  sm:text-sm rounded-r-full  bg-[#02033B] hover:bg-gray-950 cursor-pointer" title='Submit'>Submit</span>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    
                    
                    <div className=' pb-[96px] px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-10'>
                        <p className='lg:w-[550px] md:w-3/5 w-11/12 text-gray-400 md:text-start text-justify md:text-[13px] text-[13px]'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;