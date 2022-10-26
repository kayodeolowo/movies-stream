import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

const Popular = () => {
    useEffect(()=> {
        getPopularmovies()
    })

    const [popularMovies, setPopularMovies] = useState([])
    const [loading, setLoading] = useState (false)
     const [currentpage, setCurrentpage] = useState(1)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";


    const getPopularmovies = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US&page=${currentpage}`)
            setPopularMovies(res.data.results) 
            console.log(res.data.results, "popular")
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    
    }

    //  <span
    //           className={
    //             parseInt(rating) <= 4.5
    //               ? "bad"
    //               : parseInt(rating) <= 6.5
    //               ? "good"
    //               : "great"
    //           }
    //         >
    //           {rating}
    //         </span>

    
  return (
    <div>


       
        {
            loading && popularMovies.map ((movieslist)=> (
                <div key={movieslist.id}> 
                
                    <Link to={"/movie/" + movieslist.id} > 
                      <h1>   {movieslist.title} </h1>
                       <h1> {movieslist.vote_average}  </h1> 
                      <img src={IMAGE_PATH + movieslist.backdrop_path} />
                    </Link>
                </div>
            ))
        }



         <div> 

         <button onClick={ ()=> {
              if (currentpage ===1) {
                   return;
                  } else {
                    setCurrentpage (currentpage -1 );
                          }
                         }} > 
                        Previous
              </button> 

               <button onClick={()=>setCurrentpage(currentpage+1)}  > 
                        Next
              </button>    

              <h2> {currentpage} </h2>

              

             
        </div>
    </div>
  )
}

export default Popular