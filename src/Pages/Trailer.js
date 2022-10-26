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
    })

    const getMoviestrailer = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}/videos?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setTrailer(res.data.results[0])
            setLoading(true)

        } catch (err) {
               
        }
    
    }


  return (
    <div>Trailer

        {setTrailer ? (
              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
                width="50%"
                controls="true"
              />
            ) : (
              <p>No Video Clip available for this movie  at the moment</p>
            )}
    </div>
  )
}
