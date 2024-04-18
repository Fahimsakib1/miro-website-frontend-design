import React from 'react';
import image1 from '../../images/Walmart.png'
import image2 from '../../images/Cisco.png'
import image3 from '../../images/Volvo.png'
import image4 from '../../images/deloitte.png'
import image5 from '../../images/Okta.png'






const PracticeForAccessibilityChecking = () => {
    return (
        <div>



            {/* image tags (with empty alt attribute, missing alt attribute) added for accessibility checking */}
            <div className='md:mt-16 lg:mt-10 mt-10 mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20'>
                <h1 className='text-center text-lg text-gray-600'>Trusted by 45M+ users</h1>
                <div className='mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mx-auto md:gap-x-10 md:gap-y-0 gap-y-3'>
                    <div className=''>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-56 lg:h-24 md:h-20 h-28' src={image1} alt='' />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-40 lg:h-12 md:h-16 h-12 lg:mt-5 md:mt-1 mt-0 md:mb-0 mb-6' src={image2} alt='bbb' />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-20' src={image3} />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-40 lg:h-24 md:h-20 h-20' src={image5} alt='$%#@*' />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-40 lg:h-24 md:h-20 h-20' src={image5} alt='*(%%)' />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-40 lg:h-24 md:h-20 h-20' src={image5} alt='Tree' />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} />
                    </div>
                    <div>
                        <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} alt='' />
                        <div>
                            <img className='hover:scale-105 hover:ease-in duration-300 delay-150 cursor-pointer mx-auto lg:w-40 md:w-64 w-48 lg:h-24 md:h-20 h-24' src={image4} alt="^%$^*" />
                        </div>
                    </div>
                </div>
            </div>




            {/* buttons added for accessibility checking */}
            <div>
                <button>First Button</button>
                <button>Second Button</button>
                <button>Third Button</button>
                <button>Forth Button</button>
                <button>Fifth Button</button>
                <button></button>
                <button>$&*%&^%</button>
                <button>#@$^</button>
                <button>&$^&*&%</button>
                <button className='text-black px-4 py-3 bg-blue-700 rounded-sm'></button>
                <button className='text-black px-4 py-3 bg-blue-700 rounded-sm'></button>
            </div>




            {/* anchors added for accessibility checking */}
            <div>
                <a href='www.youtube.com'>B</a>
                <a href='www.youtube.com'>a</a>
                <a href='www.youtube.com'>Z</a>
                <a href='www.youtube.com'> </a>
                <a href='www.youtube.com'></a>
                <a href='www.youtube.com'>Youtube</a>
                <a href='www.google.com'>Google</a>
                <a href='www.twitter.com'>Twitter</a>
                <a href='www.instagram.com'>Instagram</a>
                <a href='www.instagram.com'>$%*^%#%%</a>
                <a href='www.instagram.com'> </a>
                <a href='www.aaaa.com'>Website</a>
                <a href='www.aaaa.com'>&^^^^</a>
                <a href='$$^^^*(('></a>
                <a href='&^$#^^^*(('></a>
                <a href=''>Sa</a>
                <a href=' '>Fa</a>
                <a>AAA</a>
                <a> </a>
                <a> rvgrththtytyj</a>
                <a> </a>
                <a>ergthyjujk </a>
                <a> </a>
                <a> </a>
                <a>yhtyjtyjyuju</a>
                <a> </a>
            </div>








            {/* forms added for accessibility checking */}

            {/* Form to check the empty form label */}
            <div>
                <form>
                    <div>
                        <label for="name"></label>
                        <input id="name" type="text" autocomplete="name" />
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <input id="address" type="text" autocomplete="address" />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input id="email" type="email" autocomplete="email" />
                    </div>
                    <div>
                        <label for="mobile">   </label>
                        <input id="mobile" type="text" autocomplete="mobile" />
                    </div>
                </form>
            </div>


            {/* Form to check the empty form label */}
            <div>
                <form>
                    <div>
                        <label for="Country"></label>
                        <input id="Country" type="text" autocomplete="Country" />
                    </div>
                    <div>
                        <label for="Capital"></label>
                        <input id="Capital" type="text" autocomplete="Capital" />
                    </div>
                    <div>
                        <label for="Population"></label>
                        <input id="Population" type="number" autocomplete="Population" />
                    </div>
                </form>
            </div>


            {/* Form to check the multiple empty form label */}
            <div>
                <form>
                    <div>
                        <label for="Man"></label>
                        <label for="Man"></label>
                        <input type="text" autocomplete="Man" />
                    </div>
                    <div>
                        <label for="Capital">Capital</label>
                        <input type="text" autocomplete="Capital" />
                    </div>
                    <div>
                        <label for="Money"></label>
                        <label for="Money"></label>
                        <input type="number" autocomplete="Money" />
                    </div>
                </form>
            </div>



            {/* Form to check the multiple empty form label with a span tag inside the form label*/}
            <div>
                <form>
                    <div>
                        <label for="Man1"></label>
                        <label for="Man1"></label>
                        <input type="text" autocomplete="Man1" />
                    </div>
                    <div>
                        <label for="Capital1">Capital</label>
                        <input type="text" autocomplete="Capital1" />
                    </div>
                    <div>
                        <label for="Money1"></label>
                        <label for="Money1"></label>
                        <input type="number" autocomplete="Money1" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-white">School</span>
                        </label>
                        <input type="text" autocomplete="School" />
                    </div>
                </form>
            </div>



        </div>
    );
};

export default PracticeForAccessibilityChecking;