import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import Moment from 'react-moment';
import {TiStarFullOutline} from 'react-icons/ti'
import Search from '../Components/Search';
import {BsDot} from 'react-icons/bs'
import SearchTv from '../Components/SearchTv';
import { CardTheme } from '../Components/Theme';




function Searchedtvshows() {
    const [searchedMovies, setSearchedMovies] = useState([]);
      const [loading, setLoading] = useState (false)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
    let params = useParams();

    const getSearched = async (name)=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/search/tv?api_key=12cfc3ac71d8ea0235235c0fb2347238&query=${name}`)
            
            setSearchedMovies(res.data.results) 
          // console.log(res.data.results, "search")
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    
    }
   
  

    useEffect(()=> {
        getSearched(params.search);
    },[params.search]);

  return (
    <div>
     <div className='container mx-auto pt-2 sm:pt-6 '>

      
        <h1 className='text-white mx-auto text-inherit sm:mx-6 text-xl mt-4 font-semibold text-center lg:text-start  '> <BsDot className='text-[3px] '> </BsDot> </h1>
        <SearchTv/>

         <h1 className=' border border-[#E0A040] w-fit mx-auto rounded-md px-2 py-1 mb-4 text-lg sm:text-xl mt-2 font-semibold text-center text-white '> Searched Series </h1>
      
          <div className='grid grid-cols-2 mt-4 gap-4 mx-3  lg:gap-10  sm:grid-cols-3 lg:grid-cols-3  xl:grid-cols-5 text-white sm:gap-6 '> 

          {
            loading && searchedMovies.map ((movieslist)=> (
                <CardTheme>
                <div key={movieslist.id} className="shadow-2xl  rounded-2xl   h-[17.5rem] w-[9rem] sm:h-[18rem] sm:w-[9rem] md:w-[12rem] md:h-[22rem] mx-auto lg:h-[280px]  lg:w-[200px]"> 

                    
                
                    <Link to={ "/series/"  + movieslist.id} > 
                     <img className='rounded-t-2xl w-full sm:h-[13rem] h-[12rem]  md:h-[280px] lg:h-[200px] cover' src={IMAGE_PATH + movieslist.poster_path} alt='' />
                    <div className='flex justify-between text-xs mt-2 mx-1 font-semibold'> 
                        {movieslist.vote_average > 5 ? 
                    (
                             <h1 className='flex text-gray-300 font-bold'> <TiStarFullOutline className='text-yellow-400 mt-0.5'></TiStarFullOutline> <span className='text-green-600'> {movieslist.vote_average}</span>/10 </h1> 
                    ) : (
                       <h1 className='flex text-gray-300 font-bold'> <TiStarFullOutline className='text-yellow-400 mt-0.5'></TiStarFullOutline> <span className='text-red-600'> {movieslist.vote_average}</span>/10 </h1> 
                    )  }
                        <h1> <Moment  format='yyyy' >{movieslist.release_date}</Moment> </h1> 
                    </div>
                      <h1 className='text-xs font-bold sm:mt-1 md:mt-2 mt-2 mx-1'>   {movieslist.name} </h1>
                       
                     
                    </Link>
                </div>
                </CardTheme>
            ))
        }
    </div>
    </div>
    </div>
  )
}

export default Searchedtvshows