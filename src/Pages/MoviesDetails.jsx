import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'
import axios from 'axios'
import { Trailer } from "./Trailer";
import { Cast } from "./Cast";

const MoviesDetails = () => {
    let params = useParams();

     useEffect(()=> {
         getMoviesdetails()
    })

    const [moviesdetails, setMoviesdetails] = useState({});
     const [loading, setLoading] = useState (false)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

      const getMoviesdetails = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/${params.name}?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setMoviesdetails(res.data) 
            console.log(res.data)
           
            setLoading(true)

        } catch (err) {
               
        }
    
    }



  return (
    <div>
        <h1> {moviesdetails.title} </h1>
          <img src={IMAGE_PATH + moviesdetails.backdrop_path} />

               {
            loading && moviesdetails.genres.map ((movieslist)=> (
                <div key={movieslist.id}> 
                    
                      <h1 className="">   {movieslist.name} </h1>
                     
                     
                    

                </div>
            ))
        }

    <Trailer/>
    <Cast/>     
    
    </div>
    
  )
}

export default MoviesDetails