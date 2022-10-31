import React  from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'



export default function SearchTv() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitInput = (e) => {
        e.preventDefault();
        navigate('/searchedtv/'+ input)
    }
    //returns the inputed words back to url

  return (
    <div className='container w-1/2  mx-auto rounded-lg'> 
   <form onSubmit={submitInput}  className='w-full  '>
         <div className='flex'> 
               
        
              <input  className='w-full outline-none rounded-lg h-6 pl-2 sm:h-8'
              onChange={(e)=> setInput(e.target.value)}
               type="text" value={input}
               placeholder="Search Series"
                /> 
          </div>
      
     </form> 

     </div>
   

  )
}


