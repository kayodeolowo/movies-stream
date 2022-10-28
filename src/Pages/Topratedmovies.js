import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import {TiStarFullOutline} from 'react-icons/ti'
import {Link } from 'react-router-dom'

const Topratedmovies = () => {
     useEffect(()=> {
        getTopratedmovies()
    })

    const [topratedMovies, setTopratedMovies] = useState([])
    const [loading, setLoading] = useState (false)
     const [currentpage, setCurrentpage] = useState(1)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

     const getTopratedmovies = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/top_rated?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US&page=${currentpage}`)
            
            setTopratedMovies(res.data.results) 
            console.log(res.data.results, "top")
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    
    }

  return (
    <div className='container mx-auto pt-10 sm:pt-14 '>
        <h1 className='text-white mx-3 sm:mx-6 '> Toprated Movies </h1>
    <div className='grid grid-cols-2 gap-4 mx-3 sm:mx-6 lg:gap-10 t sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 text-white '> 

          {
            loading && topratedMovies.map ((movieslist)=> (
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

export default Topratedmovies