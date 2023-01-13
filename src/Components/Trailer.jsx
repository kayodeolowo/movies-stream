import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import React from 'react'
import axios from 'axios'

export const Trailer = () => {
    let params = useParams();
     const [trailer, setTrailer] = useState({});
     const [loading, setLoading] = useState (false)
     const vid = "https://www.youtube.com/watch?v=";

     useEffect(()=> {
         getMoviestrailer()
    }, [])

    const getMoviestrailer = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}/videos?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setTrailer(res.data.results[0])
            setLoading(true)

        } catch (err) {
               
        }
    
    }


  return (
    <div className="container mx-auto mt-2">
      <div> 
          <h1 className="text-center mx-4 lg:mx-0 lg:mt-4 text-xl sm:text-2xl font-bold text-yellow-500  "> Movie Clip </h1>

           <div className="w-11/12 mt-2 mx-auto"> 
             {trailer ? (
                  <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    width="100%"
                    controls="true"
                  />
                ) : (
                  <p> No Video Clip available for this movie  at the moment</p>
                )}
           </div>
        </div>
    </div>
  )
}
