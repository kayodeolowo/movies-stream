import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import Moment from 'react-moment';
import {TiStarFullOutline} from 'react-icons/ti'




function Searched() {
    const [searchedMovies, setSearchedMovies] = useState([]);
      const [loading, setLoading] = useState (false)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
    let params = useParams();

    const getSearched = async (name)=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/search/movie?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US&language=en-US&page=1&include_adult=false&query=${name}`)
            
            setSearchedMovies(res.data.results) 
            console.log(res.data.results, "searc")
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    
    }
   
  

    useEffect(()=> {
        getSearched(params.search);
    },[params.search]);

  return (
    <div className='container mx-auto gap-4 grid grid-cols-4'>
         {
            loading && searchedMovies.map ((movieslist)=> (
                <div key={movieslist.id} className=" shadow-2xl  rounded-2xl bg-[#171E31]  h-[250px] sm:h-[240px] md:h-[350px] lg:h-[280px]  lg:w-[200px]"> 

                    
                
                    <Link to={"/movie/" + movieslist.id} > 
                     <img className='rounded-t-2xl w-full h-40  md:h-[280px] lg:h-[200px] cover' src={IMAGE_PATH + movieslist.poster_path} alt='' />
                    <div className='flex justify-between text-xs mt-2 mx-1 font-semibold'> 
                       <h1 className='flex text-gray-300'> <TiStarFullOutline className='text-yellow-400'></TiStarFullOutline>  {movieslist.vote_average}/10 </h1>  
                        <h1> <Moment  format='yyyy' >{movieslist.release_date}</Moment> </h1> 
                    </div>
                      <h1 className='text-xs font-bold sm:mt-1 md:mt-2 mt-2 mx-1'>   {movieslist.title} </h1>
                       
                     
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Searched 