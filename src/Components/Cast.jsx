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
      
   

     useEffect(()=> {
         getMoviescast()
    })

    const getMoviescast = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}/credits?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setCast(res.data)
          //  console.log(res.data, "cast")
           
            setLoading(true)

        } catch (err) {
               
        }
    
    }


  return (
    <div className="container mx-auto ">
      <h1 className="text-start sm:text-2xl lg:mx-0 mx-4 mt-4"> Casts </h1>
      <div className="mx-4 lg:mx-0"> 
          <Splide   options={{
                        perPage:4,
                        page:1,
                     // arrows: true,
                        pagination: false,
                        drag:"free",
                       // gap: "1rem",
                        autoplay:true,

                    }}>
           {
            loading && moviecast.cast.map ((casts)=> (
                <SplideSlide className=" flex" key={casts.id}> 
                    
                  
                         {/* <img className="h-12 w-12 mx-4 rounded-full" src={IMAGE_PATH + movieslist.profile_path} /> */}
                        <div className="flex"> 
                           <p className='text-sm' >{casts.name}</p> 
                        </div>
                          
               
                     
                     
                    
                </SplideSlide>
            ))
        }
      </Splide>
      </div>
    </div>
  )
}
