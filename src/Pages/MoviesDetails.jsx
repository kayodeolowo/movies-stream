import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'
import axios from 'axios'
import { Trailer } from "./Trailer";
import { Cast } from "./Cast";
import Moment from 'react-moment';
import {FaDotCircle} from 'react-icons/fa'
import SimilarMovies from "./SimilarMovies";

const MoviesDetails = () => {
    let params = useParams();

     useEffect(()=> {
         getMoviesdetails()
    })

    const [moviesdetails, setMoviesdetails] = useState({});
     const [loading, setLoading] = useState (false)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

      const getMoviesdetails = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setMoviesdetails(res.data) 
            console.log(res.data, "moviedetails")
           
            setLoading(true)

        } catch (err) {
               
        }
    
    }



  return (
    <div className="container mx-auto text-white  pt-10 sm:pt-14">
      <div className="lg:flex lg:flex-row  "> 
          <div className="lg:w-1/2 w-full mt-4 mx-auto"> 
              <img className="h-80 sm:h-96 lg:h-[650px] mx-auto lg:mt-4 rounded-md" src={IMAGE_PATH + moviesdetails.poster_path} alt />
          </div>
              
            <div className="lg:w-1/2 mx-auto text-center lg:text-start  mt-4"> 
              
              <h1 className="text-bold text-xl sm:text-3xl lg:text-5xl "> {moviesdetails.original_title} </h1>
              <h1 className=" text-sm sm:text-xl lg:text-2xl mt-2 text-gray-400"> {moviesdetails.tagline} </h1>
                <div> 
                 
                  </div> 
                  <div className="flex flex-row space-x-1 mt-2 justify-center lg:justify-start text-sm mx-auto"> 
                       <p> {moviesdetails.runtime} mins   </p>  
                       <FaDotCircle className="mt-2 h-2 text-yellow-300 "> </FaDotCircle>         
                      {
                    loading && moviesdetails.genres.map ((movieslist)=> (
                        <div className="" key={movieslist.id} > 

                              <p className="">   {movieslist.name} </p>
                        </div>
                    ))
                }
                 <FaDotCircle className="mt-2 h-2 text-yellow-300 "> </FaDotCircle> 
                 <h2> <Moment format='yyyy'>{moviesdetails.release_date}</Moment>   </h2> 
                </div>

                <div className="flex justify-between mx-4 text-gray-300 text-xs lg:justify-start lg:mx-0  "> 
                  <h1 className="border-l-2 px-2 py-1 border-gray-600">Ratings: {moviesdetails.vote_average}/10 </h1>
                 <h1 className=" border-l-2   px-2 py-1  border-gray-600">Lang: {moviesdetails.original_language} </h1> 
              </div>

              <div className="text-start lg:mx-0 mx-4  mt-2"> 
                  <h1 className="text-xl sm:text-2xl lg:text-3xl "> Overview </h1>
                  <p className="text-sm sm:text-base  text-gray-400">  {moviesdetails.overview}</p>
              </div>
               <Cast/>  
               <Trailer/>
              
           
            </div>
        </div>
         <SimilarMovies/>
    </div>
    
  )
}

export default MoviesDetails