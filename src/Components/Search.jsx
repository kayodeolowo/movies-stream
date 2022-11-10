import React  from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import { Theme } from './Theme'



export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitInput = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input)
    }
    //returns the inputed words back to url

  return (
    
    <div className='container w-1/2   mx-auto rounded-lg'> 
   <form onSubmit={submitInput}  className='w-full  '>
         <div className='flex'> 
               
        
              <input  className='w-full outline-none text-black rounded-lg h-6 pl-2 sm:h-8'
              onChange={(e)=> setInput(e.target.value)}
               type="text" value={input}
               placeholder="Search Movie"
                /> 
          </div>
      
     </form> 

     </div>
     
   

  )
}

