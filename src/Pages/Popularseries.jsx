import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import {TiStarFullOutline} from 'react-icons/ti'
import {Link } from 'react-router-dom'
import {BsFillCaretRightFill,BsFillCaretLeftFill} from 'react-icons/bs'
import Searchedtvshows from './Searchedtvshows';
import {BsDot} from 'react-icons/bs'
import SearchTv from '../Components/SearchTv';
import Zoom from 'react-reveal/Zoom';
import { CardTheme, Theme } from '../Components/Theme';


const  Popularseries = () => {
    
    useEffect(()=> {
        getPopularseries()
    })

    
    const [Popularseries, setPopularseries] = useState([])
    const [loading, setLoading] = useState (false)
       const [currentpage, setCurrentpage] = useState(1)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

     const getPopularseries = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/tv/popular?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US&page=${currentpage}`)
            setPopularseries(res.data.results) 
            console.log(res.data.results, "seriespop")
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    
    }

  return (
    <Theme>
       <div className='container mx-auto pt-2 sm:pt-6 '>

      
        <h1 className='text-white mx-auto text-inherit sm:mx-6 text-xl mt-4 font-semibold text-center lg:text-start  '> <BsDot className='text-[#10141E] text-[3px]'> </BsDot> </h1>
        <SearchTv/>

         <h1 className=' mx-3 sm:mx-6 text-lg sm:text-xl mt-2 font-semibold text-center lg:text-start '> Popular Series </h1>
      
    <div className='grid grid-cols-2 mt-4 gap-4 mx-3  lg:gap-10  sm:grid-cols-3 lg:grid-cols-3  xl:grid-cols-5 text-white sm:gap-6 '>  

          {
            loading && Popularseries.map ((serieslist)=> (
            <CardTheme>
                <div key={serieslist.id} className="  shadow-2xl  rounded-2xl   h-[16.5rem] w-[9rem] sm:h-[18rem] sm:w-[9rem] md:w-[12rem] md:h-[22rem] mx-auto lg:h-[280px]  lg:w-[200px]"> 

                    
                
                    <Link to={"/series/" + serieslist.id} > 
                     <img className='rounded-t-2xl w-full sm:h-[13rem] h-[12rem]  md:h-[280px] lg:h-[200px] cover' src={IMAGE_PATH + serieslist.poster_path} alt='' />
                    <div className='flex justify-between text-xs mt-2 mx-1 font-semibold'> 
                       
                        {serieslist.vote_average > 5 ? 
                    (
                             <h1 className='flex text-gray-300 font-bold'> <TiStarFullOutline className='text-yellow-400 mt-0.5'></TiStarFullOutline> <span className='text-green-600'> {serieslist.vote_average}</span>/10 </h1> 
                    ) : (
                       <h1 className='flex text-gray-300 font-bold'> <TiStarFullOutline className='text-yellow-400 mt-0.5'></TiStarFullOutline> <span className='text-red-600'> {serieslist.vote_average}</span>/10 </h1> 
                    )  }
                    
                        <h1> <Moment  format='yyyy' >{serieslist.release_date}</Moment> </h1> 
                    </div>
                      <h1 className='text-xs font-bold sm:mt-1 md:mt-2 mt-2 mx-1'>   {serieslist.name} </h1>
                       
                     
                    </Link>
                </div>
            </CardTheme>
            ))
        }
    </div>

 
       
      



        <div className='flex  justify-center mt-4 space-x-4 pb-10'> 

         <button  onClick={ ()=> {
              if (currentpage ===1) {
                   return;
                  } else {
                    setCurrentpage (currentpage -1 );
                          }
                         }} > 
                        <BsFillCaretLeftFill className='text-yellow-300 font-bold text-2xl sm:text-3xl'> </BsFillCaretLeftFill>
              </button> 
                            <h2 className='mt-1'> {currentpage} </h2>

               <button onClick={()=>setCurrentpage(currentpage+1)}  > 
                        <BsFillCaretRightFill className='text-yellow-300 font-bold text-2xl sm:text-3xl'> </BsFillCaretRightFill>
              </button>    

        
             
        </div>   
        
    </div>
    </Theme>
  )
}

export default Popularseries