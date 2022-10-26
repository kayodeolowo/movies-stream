import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import React from 'react'
import axios from 'axios'

export const Cast = () => {
    let params = useParams();
     const [moviecast, setCast] = useState({});
     const [loading, setLoading] = useState (false)
      const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";
   

     useEffect(()=> {
         getMoviescast()
    })

    const getMoviescast = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}/credits?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setCast(res.data)
           
            setLoading(true)

        } catch (err) {
               
        }
    
    }


  return (
    <div>casts
      <Splide options={{
                        perPage:5,
                        arrows: false,
                       // pagination: false,
                        drag:"free",
                        gap: "3rem"

                    }}>
           {
            loading && moviecast.cast.map ((movieslist)=> (
                <SplideSlide className="" key={movieslist.id}> 
                    
                    <ul className="flex flex-col "> 
                         <img className="h-8 w-8 rounded-full" src={IMAGE_PATH + movieslist.profile_path} />
                         {/* <li className="">   {movieslist.name} </li> */}
                          
                    </ul>
                     
                     
                    
                </SplideSlide>
            ))
        }
      </Splide>
    </div>
  )
}
