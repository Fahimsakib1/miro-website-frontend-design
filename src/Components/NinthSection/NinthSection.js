import React, { useState } from 'react';
import pic1 from '../../images/NineSection1.png'
import pic2 from '../../images/Marketing.jpg'
import pic3 from '../../images/ProductManagement.jpg'
import pic4 from '../../images/Engineering.png'
import pic5 from '../../images/Consultant.jpg'
import pic6 from '../../images/AgileCoaches.jpg'
import pic7 from '../../images/Sales.png'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/AdobeXD.png'
import vector3 from '../../images/Vector3.png'
import vector4 from '../../images/Vector4.png'
import { GoArrowRight } from 'react-icons/go';
import { GrFormCheckmark } from "react-icons/gr";



const NinthSection = () => {
    const details = [
        {
            name: 'UX & Design',
            description1: 'Build low-fi wireframes',
            description2: 'Involve stakeholders in the design process',
            description3: 'Run engaging design workshops',
            picture: pic1,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
        {
            name: 'Marketing',
            description1: 'Marketing involves crafting strategic communication',
            description2: 'Data analytics plays role in marketing campaigns.',
            description3: 'Marketing goes beyond product features to create connections.',
            picture: pic2,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
        {
            name: 'Product Management',
            description1: 'Product management involves overseeing lifecycle of product',
            description2: 'Decision making is a cornerstone of product management. ',
            description3: 'Product managers create road maps with business goals.',
            picture: pic3,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
        {
            name: 'Engineering',
            description1: 'Engineering involves the application of scientific principles.',
            description2: 'projects often require collaboration among professionals',
            description3: 'It is a dynamic field that evolves technical advancements.',
            picture: pic4,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
        {
            name: 'Consultants',
            description1: 'Serves as problem solvers, leveraging their expertise.',
            description2: 'Bring an external and objective perspective to organizations',
            description3: 'Specialized knowledge tailored to the unique needs of clients.',
            picture: pic5,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
        {
            name: 'Agile Coaches',
            description1: 'Plays role in guiding teams to adopt Agile model.',
            description2: 'Focus on teams to organize and collaborate efficiently.',
            description3: 'Agile mindset involves a commitment to learning',
            picture: pic6,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
        {
            name: 'Sales',
            description1: 'Professional builds strong relationships with customers',
            description2: 'Sales involve effective prospecting and lead generation.',
            description3: 'Strong negotiation skills to navigate sales process ',
            picture: pic7,
            vector1: vector1,
            vector2: vector2,
            vector3: vector3,
            vector4: vector4
        },
    ];



    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    const handleCourseClick = (index) => {
        setSelectedCourseIndex(index);
    };






    return (
        <div className='md:px-0 px-3'>
            <div className=' md:mt-16 lg:mt-0 mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20'>

                <h1 className='mt-6 mb-8 md:text-5xl text-[26px] font-bold text-start'>Built for all kinds of teams</h1>
                <div className='mt-10 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 mx-auto md:gap-x-8 gap-x-6 md:gap-y-8 gap-y-6'>
                    {
                        details.map((course, index) => (
                            <button
                                key={index}
                                className={`${selectedCourseIndex === index ? 'bg-[#F2F2F2]' : 'border-2 border-gray-100'} text-black rounded-full  py-[11px] text-[12px] font-semibold`}
                                onClick={() => handleCourseClick(index)}
                            >
                                {course.name}
                            </button>
                        ))
                    }
                </div>


                <div>
                    <div className=" md:px-4 px-2 mt-12 grid gap-0 lg:grid-cols-2">
                        <div className="flex flex-col md:pr-8 xl:pr-0 lg:max-w-sm">
                            <div className="max-w-xl mb-6">
                                <div className='mt-3'>
                                    <div className='lg:w-3/4 md:w-11/12 w-full flex justify-start items-center gap-x-2'>
                                        <GrFormCheckmark className='text-lg'></GrFormCheckmark>
                                        <p className="text-start text-base text-gray-500 md:text-[17px] text-[16px]">
                                            {details[selectedCourseIndex].description1}
                                        </p>
                                    </div>
                                    <div className='lg:w-3/4 md:w-11/12 w-full mt-2 flex justify-start items-center gap-x-2'>
                                        <GrFormCheckmark className='text-lg'></GrFormCheckmark>
                                        <p className="text-start text-base text-gray-500 md:text-[17px] text-[16px]">
                                            {details[selectedCourseIndex].description2}
                                        </p>
                                    </div>
                                    <div className='lg:w-3/4 md:w-11/12 w-full mt-2 flex justify-start items-center gap-x-2'>
                                        <GrFormCheckmark className='text-lg'></GrFormCheckmark>
                                        <p className="text-start text-base text-gray-500 md:text-[17px] text-[16px]">
                                            {details[selectedCourseIndex].description3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[4px] flex justify-start items-center'>
                                <div
                                    className="flex justify-center items-center text-start gap-x-2 font-semibold  text-blue-500 "
                                >
                                    <p className=''>Learn more</p>
                                    <GoArrowRight className='mt-1'></GoArrowRight>
                                </div>
                            </div>

                            <div className='mt-[50px] '>

                                <p className=' text-gray-700 text-start'>Integrate your favorite tools</p>

                                <div
                                    className="mt-4 flex justify-start items-center gap-x-7"
                                >
                                    <img
                                        className="lg:mt-0 md:mt-3 mt-5  w-[27px] h-[27px]"
                                        src={details[selectedCourseIndex].vector1}
                                        alt="RelatedImage"
                                    />
                                    <img
                                        className="lg:mt-0 md:mt-3 mt-5  w-[27px] h-[27px]"
                                        src={details[selectedCourseIndex].vector2}
                                        alt="RelatedImage"
                                    />
                                    <img
                                        className="lg:mt-0 md:mt-3 mt-5  w-[27px] h-[27px]"
                                        src={details[selectedCourseIndex].vector3}
                                        alt="RelatedImage"
                                    />
                                    <img
                                        className="lg:mt-0 md:mt-3 mt-5  w-[27px] h-[27px]"
                                        src={details[selectedCourseIndex].vector4}
                                        alt="RelatedImage"
                                    />
                                </div>
                            </div>


                        </div>
                        <div >
                            <img
                                className="md:-ml-20 ml-0 lg:mt-0 md:mt-3 mt-5 object-cover w-full h-80 rounded md:h-full lg:h-full"
                                src={details[selectedCourseIndex].picture}
                                alt="RelatedImage"
                            />
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default NinthSection;