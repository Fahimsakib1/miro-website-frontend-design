import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp, MdOutlineArrowRightAlt } from 'react-icons/md';
import { TbWorld } from "react-icons/tb";
import GoogleFontLoader from 'react-google-font-loader';
import './Header.css'











const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //States and functions for the dropdown menu for Product
    const [toggleArrowForDropDown1, setToggleArrowForDropDown1] = useState(false);
    const [openDropDownHeader1, setOpenDropDownHeader1] = useState(false)
    const handleDropDownMenuOpen1 = () => {
        setOpenDropDownHeader1(!openDropDownHeader1);
        setToggleArrowForDropDown1(!toggleArrowForDropDown1)
    }

    //States and functions for the dropdown menu for Solutions
    const [toggleArrowForDropDown2, setToggleArrowForDropDown2] = useState(false);
    const [openDropDownHeader2, setOpenDropDownHeader2] = useState(false)
    const handleDropDownMenuOpen2 = () => {
        setOpenDropDownHeader2(!openDropDownHeader2);
        setToggleArrowForDropDown2(!toggleArrowForDropDown2)
    }


    //States and functions for the dropdown menu for Resources
    const [toggleArrowForDropDown3, setToggleArrowForDropDown3] = useState(false);
    const [openDropDownHeader3, setOpenDropDownHeader3] = useState(false)
    const handleDropDownMenuOpen3 = () => {
        setOpenDropDownHeader3(!openDropDownHeader3);
        setToggleArrowForDropDown3(!toggleArrowForDropDown3)
    }

    <GoogleFontLoader
        fonts={[
            {
                font: 'Nova Square',
                weights: [400, 700],
            },
        ]}
        subsets={['cyrillic-ext', 'greek']}
    />














    //Code for making the header sticky while scrolling
    const [sticky, setSticky] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 600 ? "is-sticky" : "";
        setSticky(stickyClass);
    };






    return (
        <div>
            
            
            {/* Not Sticky Header*/}
            {/* <div className={`${isMenuOpen ? '' : 'bg-white shadow-xl'}  px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-10 lg:px-8`}>
                <div className="relative flex items-center justify-between ">
                    <div className=" flex justify-center items-center">
                        <div
                            className="flex justify-center items-center  mr-8 ml-2 text-4xl font-bold  text-gray-900"
                        >
                            <p className='-mt-2' style={{ fontFamily: 'Nova Square, monospaced' }}>miro</p>
                        </div>

                        <ul className="flex items-center hidden space-x-6 lg:flex">
                            <div className="dropdown dropdown-end">
                                <div
                                    onClick={handleDropDownMenuOpen1}
                                    tabIndex={0}
                                    role="button"
                                    className={`cursor-pointer -ml-1  py-0 `}
                                >
                                    <div className=" flex justify-center items-center " title='All Products'>
                                        <p className={` text-gray-700 text-[16px] normal-case font-semibold hover:text-blue-800 cursor-pointer`}>Product</p>
                                        <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown1 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                    </div>
                                </div>
                                {
                                    openDropDownHeader1 &&
                                    <>
                                        <div
                                            tabIndex={0}
                                            className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                            <div className="card-body">
                                                <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Product 1</li>
                                                <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Product 2</li>
                                                <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Product 3</li>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="dropdown dropdown-end">
                                <div
                                    onClick={handleDropDownMenuOpen2}
                                    tabIndex={0}
                                    role="button"
                                    className={`cursor-pointer -ml-1  py-0 `}
                                >
                                    <div className=" flex justify-center items-center " title='More Solutions'>
                                        <p className={` text-gray-700 text-[16px] normal-case font-semibold hover:text-blue-800 cursor-pointer`}>Solution</p>
                                        <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown2 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                    </div>
                                </div>
                                {
                                    openDropDownHeader2 &&
                                    <>
                                        <div
                                            tabIndex={0}
                                            className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                            <div className="card-body">
                                                <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 1</li>
                                                <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 2</li>
                                                <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 3</li>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    onClick={handleDropDownMenuOpen3}
                                    tabIndex={0}
                                    role="button"
                                    className={`cursor-pointer -ml-1  py-0 `}
                                >
                                    <div className=" flex justify-center items-center " title='Resources'>
                                        <p className={` text-gray-700 text-[16px] normal-case font-semibold hover:text-blue-800 cursor-pointer`}>Resources</p>
                                        <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown3 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                    </div>
                                </div>
                                {
                                    openDropDownHeader3 &&
                                    <>
                                        <div
                                            tabIndex={0}
                                            className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                            <div className="card-body">
                                                <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 1</li>
                                                <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 2</li>
                                                <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 3</li>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <li>
                                <a
                                    href="/"
                                    aria-label="Enterprise"
                                    title="Enterprise"
                                    className="font-medium  text-gray-700 duration-200 hover:text-blue-800 cursor-pointer"
                                >
                                    Enterprise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    aria-label="Pricing"
                                    title="Pricing"
                                    className="font-medium  text-gray-700  duration-200 hover:text-blue-800 cursor-pointer"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-5 lg:flex">
                        <li>
                            <div className='flex justify-center items-center gap-x-1'>
                                <TbWorld className='text-gray-800  text-[28px]'></TbWorld>
                                <p className='font-medium text-[16px]  text-gray-700 duration-200 hover:text-blue-800 cursor-pointer'>EN</p>
                            </div>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Contact Sales"
                                title="Contact Sales"
                                className="font-medium  text-gray-700  duration-200 hover:text-blue-800 cursor-pointer"
                            >
                                Contact Sales
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Login"
                                title="Login"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-800 cursor-pointer"
                            >
                                Login
                            </a>
                        </li>
                        <div className="inline-flex items-center justify-center h-[50px] px-5 font-medium text-white transition rounded-full  bg-[#4262FF] hover:bg-blue-700 cursor-pointer  hover:scale-105 hover:ease-in duration-300 delay-150">
                            <div className='flex justify-start items-center gap-x-1'>
                                <p>Sign up free</p>
                                <MdOutlineArrowRightAlt className='text-white text-xl'></MdOutlineArrowRightAlt>
                            </div>
                        </div>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50 "
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-6 text-black" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="  bg-white shadow-xl rounded">
                                    <div className="flex items-center justify-between mb-4">

                                        <div
                                            className="flex justify-center items-center  mr-8 ml-2 text-4xl font-bold  text-gray-900"
                                        >
                                            <p className='-mt-2 lg:px-0 md:px-4 md:py-3 p-5 '>miro</p>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 bg-gray-950 rounded-full -mt-2 mr-4 transition duration-200  focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="md:w-8 w-6 text-white font-extrabold" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="md:pb-6 pb-4 space-y-6">

                                            <li>
                                                <div className="dropdown dropdown-end">
                                                    <div
                                                        onClick={handleDropDownMenuOpen1}
                                                        tabIndex={0}
                                                        role="button"
                                                        className={`cursor-pointer -ml-1  py-0 `}
                                                    >
                                                        <div className=" flex justify-center items-center " >
                                                            <p className={` text-gray-700 text-[16px] normal-case font-bold hover:text-blue-800 cursor-pointer`}>Product</p>
                                                            <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown1 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                                        </div>
                                                    </div>
                                                    {
                                                        openDropDownHeader1 &&
                                                        <>
                                                            <div
                                                                tabIndex={0}
                                                                className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                                <div className="card-body">
                                                                    <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Product 1</li>
                                                                    <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Product 2</li>
                                                                    <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Product 3</li>
                                                                </div>
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </li>

                                            <li>
                                                <div className="dropdown dropdown-end">
                                                    <div
                                                        onClick={handleDropDownMenuOpen2}
                                                        tabIndex={0}
                                                        role="button"
                                                        className={`cursor-pointer -ml-1  py-0 `}
                                                    >
                                                        <div className=" flex justify-center items-center " >
                                                            <p className={` text-gray-700 text-[16px] normal-case font-bold hover:text-blue-800 cursor-pointer`}>Solution</p>
                                                            <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown2 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                                        </div>
                                                    </div>
                                                    {
                                                        openDropDownHeader2 &&
                                                        <>
                                                            <div
                                                                tabIndex={0}
                                                                className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                                <div className="card-body">
                                                                    <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 1</li>
                                                                    <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 2</li>
                                                                    <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 3</li>
                                                                </div>
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </li>

                                            <li>
                                                <div className="dropdown dropdown-end">
                                                    <div
                                                        onClick={handleDropDownMenuOpen3}
                                                        tabIndex={0}
                                                        role="button"
                                                        className={`cursor-pointer -ml-1  py-0 `}
                                                    >
                                                        <div className=" flex justify-center items-center">
                                                            <p className={` text-gray-700 text-[16px] normal-case font-bold hover:text-blue-800 cursor-pointer`}>Resources</p>
                                                            <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown3 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                                        </div>
                                                    </div>
                                                    {
                                                        openDropDownHeader3 &&
                                                        <>
                                                            <div
                                                                tabIndex={0}
                                                                className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                                <div className="card-body">
                                                                    <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 1</li>
                                                                    <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 2</li>
                                                                    <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 3</li>
                                                                </div>
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </li>

                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Enterprise"
                                                    title="Enterprise"
                                                    className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Enterprise
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Pricing"
                                                    title="Pricing"
                                                    className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Contact Sales"
                                                    title="Contact Sales"
                                                    className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Contact Sales
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Login"
                                                    title="Login"
                                                    className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Login
                                                </a>
                                            </li>


                                            <div className=" inline-flex items-center justify-center h-[50px] px-10 font-medium text-white transition duration-200 rounded-full  bg-[#4262FF] hover:bg-blue-600 cursor-pointer">
                                                <div className='flex justify-center items-center gap-x-1'>
                                                    <p>Sign up free</p>
                                                    <MdOutlineArrowRightAlt className='md:mt-[6px] mt-1 text-white text-2xl'></MdOutlineArrowRightAlt>
                                                </div>
                                            </div>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div> */}

            
            
            
            {/* Sticky Header For All Devices */}
            <div className={`${sticky}`}>
                <div className={`top-0 sticky z-50 ${sticky ? 'bg-[#031133] ' : ' md:bg-white sm:bg-white bg-white'}`}>

                    <div className={`${isMenuOpen ? '' : 'bg-white shadow-xl'}  px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-10 lg:px-8`}>
                        <div className="relative flex items-center justify-between ">
                            <div className=" flex justify-center items-center">
                                <div
                                    className="flex justify-center items-center  mr-8 ml-2 text-4xl font-bold  text-gray-900"
                                >
                                    <p className='-mt-2' style={{ fontFamily: 'Nova Square, monospaced' }}>miro</p>
                                </div>

                                <ul className="flex items-center hidden space-x-6 lg:flex">
                                    <div className="dropdown dropdown-end">
                                        <div
                                            onClick={handleDropDownMenuOpen1}
                                            tabIndex={0}
                                            role="button"
                                            className={`cursor-pointer `}
                                        >
                                            <div className=" group flex justify-center items-center hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer" title='All Products'>
                                                <p className={` text-gray-700 text-[14px] normal-case font-semibold hover:text-blue-800   `}>Product</p>
                                                <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700 group-hover:text-blue-800 ${!toggleArrowForDropDown1 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                            </div>
                                        </div>
                                        {
                                            openDropDownHeader1 &&
                                            <>
                                                <div
                                                    tabIndex={0}
                                                    className={`mt-5 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                    <div className="card-body">
                                                        <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Product 1</li>
                                                        <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Product 2</li>
                                                        <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Product 3</li>
                                                        <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Product 4</li>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>

                                    <div className="dropdown dropdown-end">
                                        <div
                                            onClick={handleDropDownMenuOpen2}
                                            tabIndex={0}
                                            role="button"
                                            className={`cursor-pointer -ml-1  py-0 `}
                                        >
                                            <div className=" group flex justify-center items-center hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer " title='More Solutions'>
                                                <p className={` text-gray-700 text-[14px] normal-case font-semibold hover:text-blue-800 cursor-pointer`}>Solution</p>
                                                <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700 group-hover:text-blue-800  ${!toggleArrowForDropDown2 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                            </div>
                                        </div>
                                        {
                                            openDropDownHeader2 &&
                                            <>
                                                <div
                                                    tabIndex={0}
                                                    className={`mt-5 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                    <div className="card-body">
                                                        <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Solution 1</li>
                                                        <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Solution 2</li>
                                                        <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Solution 3</li>
                                                        <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Solution 4</li>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div
                                            onClick={handleDropDownMenuOpen3}
                                            tabIndex={0}
                                            role="button"
                                            className={`cursor-pointer -ml-1  py-0 `}
                                        >
                                            <div className=" group flex justify-center items-center hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer " title='Resources'>
                                                <p className={` text-gray-700 text-[14px] normal-case font-semibold hover:text-blue-800 cursor-pointer`}>Resources</p>
                                                <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  group-hover:text-blue-800 ${!toggleArrowForDropDown3 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                            </div>
                                        </div>
                                        {
                                            openDropDownHeader3 &&
                                            <>
                                                <div
                                                    tabIndex={0}
                                                    className={`mt-5 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                    <div className="card-body">
                                                        <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Resource 1</li>
                                                        <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Resource 2</li>
                                                        <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Resource 3</li>
                                                        <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer rounded-sm`}>Resource 4</li>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <li className="font-medium text-[14px] text-gray-700 hover:text-blue-800 cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150 ">
                                        Enterprise
                                    </li>
                                    <li className="font-medium text-[14px] text-gray-700 hover:text-blue-800 cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150 ">
                                        Pricing
                                    </li>
                                </ul>
                            </div>
                            <ul className="flex items-center hidden space-x-5 lg:flex">
                                <li>
                                    <div className='group flex justify-center items-center gap-x-1    cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150 '>
                                        <TbWorld className='group-hover:text-blue-800 text-gray-800  text-[28px]'></TbWorld>
                                        <p className='font-medium text-[14px]  text-gray-700 duration-200 hover:text-blue-800 group-hover:text-blue-800 cursor-pointer'>EN</p>
                                    </div>
                                </li>
                                <li className="font-medium text-[14px] text-gray-700 hover:text-blue-800 cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150 ">
                                    Contact Sales
                                </li>
                                <li className="font-medium text-[14px] text-gray-700 hover:text-blue-800 cursor-pointer hover:scale-105 hover:ease-in duration-300 delay-150 ">
                                    Login
                                </li>
                                <div className="inline-flex items-center justify-center h-[50px] px-5 font-medium text-white transition rounded-full  bg-[#4262FF] hover:bg-blue-700 cursor-pointer  hover:scale-105 hover:ease-in duration-300 delay-150">
                                    <div className='flex justify-start items-center gap-x-1'>
                                        <p>Sign up free</p>
                                        <MdOutlineArrowRightAlt className='text-white text-xl'></MdOutlineArrowRightAlt>
                                    </div>
                                </div>
                            </ul>
                            <div className="lg:hidden">
                                <button
                                    aria-label="Open Menu"
                                    title="Open Menu"
                                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50 "
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <svg className="w-6 text-black" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                        />
                                    </svg>
                                </button>
                                {isMenuOpen && (
                                    <div className="absolute top-0 left-0 w-full">
                                        <div className="  bg-white shadow-xl rounded">
                                            <div className="flex items-center justify-between mb-4">

                                                <div
                                                    className="flex justify-center items-center  mr-8 ml-2 text-4xl font-bold  text-gray-900"
                                                >
                                                    <p className='-mt-2 lg:px-0 md:px-4 md:py-3 p-5 '>miro</p>
                                                </div>
                                                <div>
                                                    <button
                                                        aria-label="Close Menu"
                                                        title="Close Menu"
                                                        className="p-2 bg-gray-950 rounded-full lg:-mt-2 md:mt-3 -mt-2 lg:mr-4 md:mr-5 mr-3 transition duration-200  focus:outline-none focus:shadow-outline"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <svg className="md:w-8 w-6 text-white font-extrabold" viewBox="0 0 24 24">
                                                            <path
                                                                fill="currentColor"
                                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul className="md:pb-6 pb-4 space-y-6">

                                                    <li>
                                                        <div className="dropdown dropdown-end">
                                                            <div
                                                                onClick={handleDropDownMenuOpen1}
                                                                tabIndex={0}
                                                                role="button"
                                                                className={`cursor-pointer -ml-1  py-0 `}
                                                            >
                                                                <div className=" flex justify-center items-center " >
                                                                    <p className={` text-gray-700 text-[16px] normal-case font-bold hover:text-blue-800 cursor-pointer`}>Product</p>
                                                                    <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown1 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                                                </div>
                                                            </div>
                                                            {
                                                                openDropDownHeader1 &&
                                                                <>
                                                                    <div
                                                                        tabIndex={0}
                                                                        className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                                        <div className="card-body">
                                                                            <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Product 1</li>
                                                                            <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Product 2</li>
                                                                            <li onClick={() => { setOpenDropDownHeader1(false); setToggleArrowForDropDown1(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Product 3</li>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="dropdown dropdown-end">
                                                            <div
                                                                onClick={handleDropDownMenuOpen2}
                                                                tabIndex={0}
                                                                role="button"
                                                                className={`cursor-pointer -ml-1  py-0 `}
                                                            >
                                                                <div className=" flex justify-center items-center " >
                                                                    <p className={` text-gray-700 text-[16px] normal-case font-bold hover:text-blue-800 cursor-pointer`}>Solution</p>
                                                                    <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown2 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                                                </div>
                                                            </div>
                                                            {
                                                                openDropDownHeader2 &&
                                                                <>
                                                                    <div
                                                                        tabIndex={0}
                                                                        className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                                        <div className="card-body">
                                                                            <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 1</li>
                                                                            <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 2</li>
                                                                            <li onClick={() => { setOpenDropDownHeader2(false); setToggleArrowForDropDown2(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Solution 3</li>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="dropdown dropdown-end">
                                                            <div
                                                                onClick={handleDropDownMenuOpen3}
                                                                tabIndex={0}
                                                                role="button"
                                                                className={`cursor-pointer -ml-1  py-0 `}
                                                            >
                                                                <div className=" flex justify-center items-center">
                                                                    <p className={` text-gray-700 text-[16px] normal-case font-bold hover:text-blue-800 cursor-pointer`}>Resources</p>
                                                                    <MdKeyboardArrowUp className={`mt-[2px] text-xl text-gray-700  ${!toggleArrowForDropDown3 ? 'rotate-180 ' : 'rotate-0'}`}></MdKeyboardArrowUp>
                                                                </div>
                                                            </div>
                                                            {
                                                                openDropDownHeader3 &&
                                                                <>
                                                                    <div
                                                                        tabIndex={0}
                                                                        className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl rounded-sm`} >
                                                                        <div className="card-body">
                                                                            <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-2 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 1</li>
                                                                            <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 2</li>
                                                                            <li onClick={() => { setOpenDropDownHeader3(false); setToggleArrowForDropDown3(false) }} className={` text-black hover:bg-gray-300 -mt-1 py-2 px-3 text-md font-bold cursor-pointer`}>Resource 3</li>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Enterprise"
                                                            title="Enterprise"
                                                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Enterprise
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Pricing"
                                                            title="Pricing"
                                                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Pricing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Contact Sales"
                                                            title="Contact Sales"
                                                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Contact Sales
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            aria-label="Login"
                                                            title="Login"
                                                            className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        >
                                                            Login
                                                        </a>
                                                    </li>


                                                    <div className=" inline-flex items-center justify-center h-[50px] px-10 font-medium text-white transition duration-200 rounded-full  bg-[#4262FF] hover:bg-blue-600 cursor-pointer">
                                                        <div className='flex justify-center items-center gap-x-1'>
                                                            <p>Sign up free</p>
                                                            <MdOutlineArrowRightAlt className='md:mt-[6px] mt-1 text-white text-2xl'></MdOutlineArrowRightAlt>
                                                        </div>
                                                    </div>

                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    );
};

export default Header;