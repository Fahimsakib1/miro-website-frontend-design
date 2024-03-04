import React from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import GoogleFontLoader from 'react-google-font-loader';
import people1 from '../../images/people1.png'
import people2 from '../../images/people2.png'
import people3 from '../../images/people3.png'
import vmware from '../../images/vmware.png'
import docusign from '../../images/DocuSign.png'
import frog from '../../images/frog.png'







const TenthSection = () => {


    <GoogleFontLoader
        fonts={[
            {
                font: 'Roboto',
                weights: [400, 700],
            },
            {
                font: 'Manrope',
                weights: [400, 700],
            },
        ]}
        subsets={['cyrillic-ext', 'greek']}
    />








    return (
        <div>
            <div className="md:mt-24 lg:mt-10 mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8 lg:py-20">
                <h2 className="text-center mt-4  mb-6 font-sans md:text-[48px] font-bold  text-gray-900 text-3xl md:mx-auto">
                    Loved by the world's best teams
                </h2>
                <div className=" mt-6 inline-flex items-center justify-center h-[46px] px-6 font-medium text-[#4262FF] rounded-full border-2 border-[#4262FF]  cursor-pointer   hover:scale-105 hover:ease-in duration-300 delay-150">
                    <div className='flex justify-center items-center gap-x-1'>
                        <p>See all customer stories</p>
                        <MdOutlineArrowRightAlt className='md:mt-[4px] mt-1 text-[#4262FF]'></MdOutlineArrowRightAlt>
                    </div>
                </div>

                <div className="mt-[76px] md:px-12 px-4 mx-auto grid gap-x-10 gap-y-6 row-gap-5 mb-8 md:row-gap-16 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="duration-300 transform bg-white  hover:shadow-2xl rounded-lg hover:cursor-pointer">
                        <div className="h-full p-5  rounded-r shadow-sm">
                            {/* <h6 style={{ fontFamily: 'Manrope, monospaced' }} className="font-sans text-start text-black text-4xl mb-5"><span className='font-bold '>vm</span>ware</h6> */}
                            <img
                                className="mb-5 md:w-[288px] md:h-[62px] w-[240px] h-[48px]"
                                src={vmware}
                                alt="vmwareTextImage"
                            />
                            <p className="lg:w-10/12 w-full text-start text-[16px] text-gray-500">
                                “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white  hover:shadow-2xl rounded-lg hover:cursor-pointer">
                        <div className="h-full p-5  rounded-r shadow-sm">
                            {/* <h6 className="text-start text-black text-4xl mb-5 font-bold ">DocuSign</h6> */}
                            <img
                                className="mb-5 lg:w-[288px] lg:h-[62px] md:w-[278px] md:h-[62px] w-[240px] h-[48px]"
                                src={docusign}
                                alt="DocuSignTextImage"
                            />
                            <p className="lg:w-10/12 w-full text-start text-[16px] text-gray-500">
                                “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white  hover:shadow-2xl rounded-lg hover:cursor-pointer">
                        <div className="h-full p-5  rounded-r shadow-sm">
                            {/* <h6 className="text-start text-black text-4xl mb-5 font-bold ">frog</h6> */}
                            <img
                                className="mb-5 lg:w-[288px] lg:h-[62px] md:w-[278px] md:h-[62px] w-[240px] h-[48px]"
                                src={frog}
                                alt="frogTextImage"
                            />
                            <p className="lg:w-10/12 w-full text-start text-[16px] text-gray-500">
                                “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
                            </p>
                        </div>
                    </div>

                </div>

                <div className='lg:hidden mt-[40px] lg:flex-row md:flex-col flex-col lg:justify-around justify-center items-center md:gap-x-10 lg:gap-y-0 md:gap-y-16 gap-x-0 gap-y-5 lg:px-0 md:px-16 px-7'>
                    <div className=' flex justify-start   gap-x-4 lg:gap-y-0 gap-y-5 lg:mb-0 mb-6'>
                        <img
                            className="rounded-full w-[48px] h-[48px]"
                            src={people1}
                            alt="PeopleImage"
                        />
                        <div>
                            <h3 className='text-start text-[14px] text-gray-500'>Roxanne Mustafa</h3>
                            <h3 className='text-start text-[14px] text-gray-500'>Design Team Lead at VMware</h3>
                        </div>
                    </div>
                    <div className='flex justify-start  gap-x-4 lg:gap-y-0 gap-y-5 lg:mb-0 mb-6'>
                        <img
                            className="rounded-full w-[48px] h-[48px]"
                            src={people2}
                            alt="PeopleImage"
                        />
                        <div>
                            <h3 className='text-start text-[14px] text-gray-500'>Jane Ashley</h3>
                            <h3 className='text-start text-[14px] text-gray-500'>Head of Design at DocuSign</h3>
                        </div>
                    </div>
                    <div className='  flex justify-start  gap-x-4 lg:gap-y-0 gap-y-5 lg:mb-0 mb-6'>
                        <img
                            className="rounded-full w-[48px] h-[48px]"
                            src={people3}
                            alt="PeopleImage"
                        />
                        <div>
                            <h3 className='text-start text-[14px] text-gray-500'>Laura Baird</h3>
                            <h3 className='text-start text-[14px] text-gray-500'>Associate Design Director at frog</h3>
                        </div>
                    </div>
                </div>


                <div className='lg:flex hidden mt-[40px] lg:justify-around justify-center items-center  md:gap-x-10 lg:gap-y-0 md:gap-y-16 gap-x-0 gap-y-5 lg:px-0 md:px-16 px-7    '>
                    <div className=' flex justify-start   gap-x-4 lg:gap-y-0 gap-y-5 lg:mb-0 mb-6 hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer'>
                        <img
                            className="rounded-full w-[48px] h-[48px]"
                            src={people1}
                            alt="PeopleImage"
                        />
                        <div>
                            <h3 className='text-start text-[14px] text-gray-500'>Roxanne Mustafa</h3>
                            <h3 className='text-start text-[14px] text-gray-500'>Design Team Lead at VMware</h3>
                        </div>
                    </div>
                    <div className='flex justify-start  gap-x-4 lg:gap-y-0 gap-y-5 lg:mb-0 mb-6 hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer'>
                        <img
                            className="rounded-full w-[48px] h-[48px]"
                            src={people2}
                            alt="PeopleImage"
                        />
                        <div>
                            <h3 className='text-start text-[14px] text-gray-500'>Jane Ashley</h3>
                            <h3 className='text-start text-[14px] text-gray-500'>Head of Design at DocuSign</h3>
                        </div>
                    </div>
                    <div className='  flex justify-start  gap-x-4 lg:gap-y-0 gap-y-5 lg:mb-0 mb-6 hover:scale-110 hover:ease-in duration-300 delay-150 cursor-pointer'>
                        <img
                            className="rounded-full w-[48px] h-[48px]"
                            src={people3}
                            alt="PeopleImage"
                        />
                        <div>
                            <h3 className='text-start text-[14px] text-gray-500'>Laura Baird</h3>
                            <h3 className='text-start text-[14px] text-gray-500'>Associate Design Director at frog</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TenthSection;