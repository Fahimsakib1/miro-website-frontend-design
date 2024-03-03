import React, { useState } from 'react';
import pic1 from '../../images/Brainstorming.png'
import pic2 from '../../images/diagramming.png'
import pic3 from '../../images/workshop.png'
import pic4 from '../../images/Scrum.png'
import pic5 from '../../images/mapping.png'
import pic6 from '../../images/research.png'
import pic7 from '../../images/StrategicPlanning.png'
import { GoArrowRight } from 'react-icons/go';




const EighthSection = () => {
    const details = [
        {
            name: 'Brainstorming',
            description: 'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.',
            picture: pic1
        },
        {
            name: 'Diagramming',
            description: 'Diagramming is a visual representation technique used to convey complex information, relationships, or processes through the use of graphical elements. It is a powerful tool for simplifying and clarifying complex ideas.',
            picture: pic2
        },
        {
            name: 'Meetings & Workshops',
            description: 'Meetings and workshops are integral components of effective communication, collaboration, and productivity within organizations. They serve as forums for idea exchange, decision-making, problem-solving, and fostering team synergy.',
            picture: pic3
        },
        {
            name: 'Scrum Events',
            description: 'Scrum, an agile framework for project management that structure the workflow and facilitate communication within development teams. Sprint Planning initiates each iteration to be done. ',
            picture: pic4
        },
        {
            name: 'Mapping',
            description: 'Mapping is a process of creating visual representations to convey information, relationships or spatial data. It can include various types such as mind mapping for organizing thoughts between ideas of partial data',
            picture: pic5
        },
        {
            name: 'Research & Design',
            description: 'Research and design are integral stages in the development of products, services, or solutions. Research involves gathering and analyzing information to understand user needs, market trends, and existing solutions.',
            picture: pic6
        },
        {
            name: 'Strategic Planning',
            description: 'Strategic planning is a systematic process that organizations undertake to define their long-term goals and objectives. It involves assessing the current state to achieve desired outcomes.',
            picture: pic7
        },
    ];



    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    const handleCourseClick = (index) => {
        setSelectedCourseIndex(index);
    };


    return (
        <div className='md:px-0 px-3'>
            <div className=' md:mt-16 lg:mt-0 mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20'>

                <h1 className='mt-6 mb-8 md:text-5xl text-[26px] font-bold text-start'>Built for the way you work</h1>
                <div className='mt-10 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 mx-auto md:gap-x-5 gap-x-6 md:gap-y-8 gap-y-6'>
                    {
                        details.map((course, index) => (
                            <button
                                key={index}
                                className={`${selectedCourseIndex === index ? 'bg-[#F2F2F2]' : 'border-2 border-gray-100'} text-black rounded-full px-2 py-[11px] text-[12px] font-semibold`}
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
                                <h2 className="mt-3 text-start max-w-lg mb-6 font-sans font-semibold text-gray-700 md:text-[18px] text-[16px]">
                                    {details[selectedCourseIndex].name}
                                </h2>
                                <p className="text-start text-base text-gray-500 md:text-[17px] text-[16px]">
                                    {details[selectedCourseIndex].description}
                                </p>
                            </div>
                            <div className='mt-[24px] flex justify-start items-center'>
                                <div
                                    className="flex justify-center items-center text-start gap-x-2 font-semibold  text-blue-500 "
                                >
                                    <p className=''>Learn more</p>
                                    <GoArrowRight className='mt-1'></GoArrowRight>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img
                                className="md:-ml-10 ml-0 lg:mt-0 md:mt-3 mt-5 object-cover w-full h-80 rounded md:h-full lg:h-full"
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

export default EighthSection;