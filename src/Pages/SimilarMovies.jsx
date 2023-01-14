import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Moment from 'react-moment';
import {TiStarFullOutline} from 'react-icons/ti'
import {Link } from 'react-router-dom'
import { CardTheme } from "../Components/Theme";

const SimilarMovies = () => {

    let params = useParams();
    useEffect(()=> {
        getSimilarmovies()
    }, [])
     const [similarMovies, setSimilarMovies] = useState([])
    const [loading, setLoading] = useState (false)
     const [currentpage, setCurrentpage] = useState(1)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

        const getSimilarmovies = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}/similar?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setSimilarMovies(res.data.results) 
          //  console.log(res.data.results, "similar")
            setLoading(true)


            


        } catch (err) {
               
        }
    
    }


  return (
    
    <div> 
     <div className='container mx-auto pt-10 sm:pt-14 pb-10  '>
        <h1 className=' mx-3 sm:mx-6 lg:text-3xl text-white'> Similar Movies for you </h1>
    <div className='grid grid-cols-2 mt-4 gap-4 mx-3  lg:gap-10  sm:grid-cols-3 lg:grid-cols-3  xl:grid-cols-5 text-white sm:gap-6 '> 

          {
            loading && similarMovies.map ((movieslist)=> (
                <CardTheme key={movieslist.id}> 
                <div  className=" shadow-2xl  rounded-2xl   h-[17.5rem] w-[9rem] sm:h-[18rem] sm:w-[9rem] md:w-[12rem] md:h-[22rem] mx-auto lg:h-[280px]  lg:w-[200px]"> 

                    
                
                    <Link to={"/movie/" + movieslist.id} > 
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
                      <h1 className='text-xs font-bold sm:mt-1 md:mt-2 mt-2 mx-1'>   {movieslist.title} </h1>
                       
                     
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

export default SimilarMovies