import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

 


    return (
        <div className="flex flex-col container mx-auto justify-start ml-2  items-start  fixed lg:w-32 lg:ml-4 lg:top-10    lg:px-2
          text-white font-public   z-10 lg:bg-[#171E31] "> 
          
        
                    {/* <div className='' >
                
                      <img src='./image/logo.png'/>
                
                     </div>  */}

                     <div className='lg:flex   '> 
                        <ul className=' text-base hidden   lg:flex lg:flex-col text-white font-mono  space-y-4  '> 
                        
                                <Link to='/'  className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Home    </Link>
                            <Link to='/popular-moves'  className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Popular Movies  </Link>
                            <li to='#skills' className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >    Courses   </li>
                            <li to='#contact' className=' hover:text-[#E0A040]  hover:-translate-x-1 duration-200' >     Contact  </li>    
                            </ul> 
                     </div>

                     

                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div   onClick={handleNav} className=' lg:hidden z-10 '> 
            {nav ? <AiOutlineClose className='text-[#E0A040] ' size={32}/> :   <CgMenuGridR className='text-[#E0A040] sm:text-6xl ' />}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl rounded-lg absolute text-white  left-0 top-0    w-1/5 m-auto z-10    flex h-[400px]   mt- bg-[#171E31]   flex-col' : 'absolute left-[-100%] '}>
              <div > 
                    <ul data-aos="fade-up"  className='lg:hidden text-xlg font-semibold mt-10 font-fira  flex flex-col '>
                       <li   to='#' className='mt-2' >Home</li>
                      <li to='#about'  className='mt-2' >About </li>
                      <li to='#skills' className='mt-2' >Skills</li>
                      <li to='#projects' className='mt-2' >  Projects</li>
                      <li to='#contact' className='mt-2'>Contact  </li>
        </ul> 
        </div>
      </div>
            
        </div>
    )
}

export default Navbar;