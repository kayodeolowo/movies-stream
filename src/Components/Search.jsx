import React  from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitInput = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input)
    }
    //returns the inputed words back to url

  return (
    <div className='container w-20 mx-auto'> 
   <form onSubmit={submitInput} >
       <div> 
        <FaSearch></FaSearch>
              <input 
              onChange={(e)=> setInput(e.target.value)}
               type="text" value={input}
                /> 
       </div>
     </form> 

     </div>
   

  )
}


// const FormStyle = styled.form `
//     margin: 0rem 20rem;
   
//     div{
//     position: relative;
//     width: 100%;
//     }
//      input{
//         border: none;
//         background: gray;
//         font-size: 1.5rem;
//         color: white;
//         padding: 1rem 3rem;
//         border: none;
//         border-radius: 1rem;
//         outline: none;
//         width: 100%;
//      }
//      svg{
//         position: absolute;
//         top: 50%;
//         left: 0%;
//         transform: translate(100%, -50%);
//         color: white;
//      }
// `     
