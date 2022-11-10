import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {FaHotjar} from 'react-icons/fa'
import {MdOutlineStarRate} from 'react-icons/md'
import {MdOutlineWbIncandescent} from 'react-icons/md'
import {FcHome} from 'react-icons/fc'
import SearchTv from './SearchTv';
import ThemeSwitch from '../Components/ThemeSwitch';




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

 


    return (
        <div className="flex flex-col container mx-auto justify-start   items-start lg:h-[460px]   fixed lg:w-32 lg:ml-6 xl:ml-10  rounded-lg xl:mt-[16%]   lg:mt-[10%]  lg:px-2 
          text-white font-public   z-10 lg:bg-[#171E31]  "> 
          
        
                    {/* <div className='' >
                
                      <img src='./image/logo.png'/>
                
                     </div>  */}
                       <div className='w-fit mx-auto hidden lg:flex mt-2'> 
                         <ThemeSwitch/>
                       </div>
                     <div className='lg:flex   '> 
                    
                        <ul className=' lg:text-lg font-bold hidden   lg:flex lg:flex-col text-white font-mono   '> 
                        
                                <Link to='/'  className=' hover:text-[#E0A040] ml-1 duration-200  mt-2  flex justify-center border-b-2  text-yellow-500'  >   Movies  <FcHome className='mt-1 ml-1'> </FcHome>    </Link>
                            <Link to='/popular-movies'  className=' hover:text-[#E0A040] flex duration-200 mt-3 ' >   Popular <FaHotjar className='text-sm mt-2 ml-1 text-red-500'></FaHotjar>  </Link>
                            <Link to='/toprated-movies' className='flex hover:text-[#E0A040]  duration-200 mt-3 ' >    TopRated <MdOutlineStarRate className='ml-1 mt-1 text-blue-500'> </MdOutlineStarRate>    </Link>
                            <Link to='/Upcoming-movies' className=' hover:text-[#E0A040]  flex duration-200 mt-3' >     Upcoming <MdOutlineWbIncandescent className='mt-2 ml-1 text-yellow-400'> </MdOutlineWbIncandescent>  </Link>    
                           

                            <h1 to='' className=' mt-16 border-b-2 text-center ml-1  ' >     Tv Series  </h1>

                            <Link to='/popular-series' className=' hover:text-[#E0A040] mt-3 flex duration-200' >     Popoular <FaHotjar className='text-sm mt-2 ml-1 text-red-500'></FaHotjar> </Link>   

                            <Link to='toprated-series' className=' hover:text-[#E0A040] flex mt-3 duration-200' >     TopRated <MdOutlineStarRate className='ml-1 mt-1 text-blue-500'> </MdOutlineStarRate>  </Link>   

                            <h1 className='text-gray-300 text-sm text-center mt-10 '> ©Kayode Olowo </h1>
                             <p className='text-gray-500 text-xs text-center'>  <a href='https://themoviedb.org/documentation/api'>Themoviedb</a>  </p>

                             
                            
                                
                            </ul> 
                     </div>

                     

                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div   onClick={handleNav} className=' lg:hidden z-10 '> 
            {nav ? <AiOutlineClose className='text-[#E0A040] ' size={32}/> :   <BiMenuAltLeft className='text-[#E0A040] sm:text-5xl text-3xl mt-4 ml-4 ' />}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl rounded-l-bg absolute text-white  left-0 top-0    w-1/2 m-auto z-10    flex h-screen    bg-[#171E31]  duration-100 flex-col' : 'absolute left-[-100%] '}>
              <div > 
                 <div className='w-fit mx-auto  mt-20'> 
                         <ThemeSwitch/>
                   </div>
                    <ul data-aos="fade-up"  className='lg:hidden ml-4  font-semibold mt-2 font-fira  flex flex-col '>
                      <Link to='/'  className=' flex text-yellow-500 justify-center duration-200  mt-6  border-b-2 '  >   Movies  <FcHome className='mt-3 ml-1'> </FcHome>    </Link>
                            <Link to='/popular-movies'  className='  flex duration-200 mt-3 ' >   Popular <FaHotjar className='text-sm mt-5 ml-1 text-red-500'></FaHotjar>  </Link>
                            <Link to='/toprated-movies' className='flex   duration-200 mt-3 ' >    TopRated <MdOutlineStarRate className='ml-1 mt-3 text-blue-500'> </MdOutlineStarRate>    </Link>
                            <Link to='/Upcoming-movies' className='   flex duration-200 mt-3' >     Upcoming <MdOutlineWbIncandescent className='mt-3 ml-1 text-yellow-400'> </MdOutlineWbIncandescent>  </Link>    
                           

                            <h1 to='' className=' mt-16 border-b-2 text-center ml-1  ' >     Tv Shows  </h1>

                            <Link to='/popular-series' className='  mt-3 flex duration-200' >     Popoular <FaHotjar className='text-sm mt-5 ml-1 text-red-500'></FaHotjar> </Link>   

                            <Link to='toprated-series' className='  flex mt-3 duration-200' >     TopRated <MdOutlineStarRate className='ml-1 mt-3 text-blue-500'> </MdOutlineStarRate>  </Link>  

                              <h1 className='text-gray-300 text-base mt-[48%] sm:mt-[170%]'> © Kayode Olowo </h1>
                             <p className='text-gray-500 text-sm '>  <a href='https://themoviedb.org/documentation/api'>Themoviedb</a>  </p>

                              

                            
                            
                                
        </ul> 
        </div>
      </div>
            
        </div>
    )
}

export default Navbar;