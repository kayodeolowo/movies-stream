import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import {FaDotCircle} from 'react-icons/fa'
import SimilarMovies from "./SimilarMovies";
import { SeriesTrailer } from "../Components/SeriesTrailer";
import {RiEmotionSadLine } from 'react-icons/ri'
import { Theme } from "../Components/Theme";

const SeriesDetails = () => {
    let params = useParams();

     useEffect(()=> {
         getSeriesdetails()
    })

    const [seriesdetails, setseriesdetails] = useState({});
     const [loading, setLoading] = useState (false)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

      const getSeriesdetails = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/tv/${params.name}?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setseriesdetails(res.data) 
            console.log(res.data, "seriesdetails")
           
            setLoading(true)

        } catch (err) {
               
        }
    
    }



  return (
    <Theme> 
    <div className="container mx-auto   pt-10 sm:pt-14">
      <div className="lg:flex lg:flex-row  "> 
          <div className="lg:w-1/2 w-full mt-4 mx-auto"> 
              {seriesdetails.poster_path ? ( <img className="h-80 sm:h-96 lg:h-[650px] mx-auto lg:mt-4 rounded-md" src={IMAGE_PATH + seriesdetails.poster_path} alt />
             ) : (
             <div className=""> 
               <h1 className="flex text-red-500 justify-center mt-20 text-center text-xl sm:2xl "> Photo not Available <span>  <RiEmotionSadLine className="mt-1 ml-2 mx-auto w-fit justify-center"></RiEmotionSadLine> </span> </h1>  

              
                  
               </div>      )}
          </div>
              
            <div className="lg:w-1/2 mx-auto text-center lg:text-start  mt-4"> 
              
              <h1 className="text-bold text-xl sm:text-3xl lg:text-5xl "> {seriesdetails.original_name} </h1>
              <h1 className=" text-sm sm:text-xl lg:text-2xl mt-2 text-gray-400"> {seriesdetails.tagline} </h1>
                <div> 
                 
                  </div> 
                  <div className="flex flex-row space-x-1 mt-2 justify-center lg:justify-start text-xs sm:text-sm mx-auto"> 
                       <p> {seriesdetails.episode_run_time} mins   </p>  
                       <FaDotCircle className="mt-1.5 h-1 sm:h-2 text-yellow-300 "> </FaDotCircle>         
                      {
                    loading && seriesdetails.genres.map ((movieslist)=> (
                        <div className="" key={movieslist.id} > 

                              <p className="">   {movieslist.name} </p>
                        </div>
                    ))
                }
                 <FaDotCircle className="mt-1.5 sm:mt-2 h-1 sm:h-2 text-yellow-300 "> </FaDotCircle> 
                 <h2> <Moment format='yyyy'>{seriesdetails.first_air_date}</Moment>   </h2> 
                </div>

                <div className="flex justify-between mx-4 text-gray-300 text-xs lg:justify-start lg:mx-0  "> 
                  
                  {seriesdetails.vote_average > 5 ? (

                  <h1 className="border-l-2 font-semibold px-2 py-1  border-gray-600"><span className="font-normal"> Ratings:</span>   <span className="text-green-500"> {seriesdetails.vote_average} </span>/ 10 </h1> ) : (
                      <h1 className="border-l-2 px-2 py-1  font-semibold border-gray-600"> <span className="font-normal"> Ratings: </span> <span className="text-red-600"> {seriesdetails.vote_average} </span>/ 10 </h1>
                  )}
                 <h1 className=" border-l-2   px-2 py-1  border-gray-600">Lang: {seriesdetails.original_language} </h1> 
              </div>

              <div className="text-start lg:mx-0 mx-4  mt-2"> 
                  <h1 className="text-xl sm:text-2xl lg:text-3xl "> Overview </h1>
                  <p className="text-sm sm:text-base  text-gray-400">  {seriesdetails.overview}</p>
              </div>
               {/* <Cast/>  
               <Trailer/> */}

               <SeriesTrailer/>
              
           
            </div>
        </div>
         <SimilarMovies/>
    </div>
    </Theme>
    
  )
}

export default SeriesDetails