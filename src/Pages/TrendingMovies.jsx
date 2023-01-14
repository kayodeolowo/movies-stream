import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import {TiStarFullOutline} from 'react-icons/ti'
import {Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



const TrendingMovies = () => {
    useEffect(()=> {
        getPopularmovies()
    }, [])

    const [popularMovies, setPopularMovies] = useState([])
    const [loading, setLoading] = useState (false)
     const [currentpage, setCurrentpage] = useState(1)
     const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
     

    const getPopularmovies = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US&page=${currentpage}`)
            setPopularMovies(res.data.results) 
           // console.log(res.data.results, "popular")
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
    <div className='container mx-auto pt-10 sm:pt-14 '>
        <h1 className=' text-center text-lg  font-semibold mx-3 sm:mx-6 text-white'> Trending Movies </h1>
    <Splide className='hidden md:inline' options={{
                        perPage:2,
                        page:1,
                     // arrows: true,
                        pagination: false,
                        drag:"free",
                       gap: "3rem",
                        autoplay:true,
                        rewind: true,

                    }}  > 

    


          {
            loading && popularMovies.map ((movieslist)=> (
                <SplideSlide key={movieslist.id} className="    "> 

                    
                
                    <Link to={"/movie/" + movieslist.id} > 
                     <img className='rounded-2xl w-full mt-6  md:max-h-[250px] lg:max-h-[300px] lg:w-fit lg:mx-auto cover' src={IMAGE_PATH + movieslist.backdrop_path} alt='' />
                    <div className=' text-center text-xs mt-2  font-semibold'> 
                       <h1 className='text-xl lg:text-2xl font-bold sm:mt-1 md:mt-2 mt-2 mx-1 text-white'>   {movieslist.title} </h1>
                        <h1 className=' mt-1 text-white'> <Moment  format='yyyy' >{movieslist.release_date}</Moment> </h1> 
                    </div>
                     
                       
                     
                    </Link>
                </SplideSlide>
            ))
        }
    </Splide>

     <Splide className='md:hidden ' options={{
                        perPage:1,
                        page:1,
                     arrows: true,
                        pagination: false,
                       // drag:"free",
                       gap: "6rem",
                        autoplay:true,
                        rewind: true,

                    }}  > 

    


          {    loading && popularMovies.map ((movieslist)=> (
                <SplideSlide key={movieslist.id} className=" shadow-2xl    "> 

                    
                
                    <Link to={"/movie/" + movieslist.id} > 
                    <div className=''> 
                      <img className='rounded-2xl  h-[200px] mt-2  sm:h-[250px] mx-auto w-[300px] sm:w-fit md:h-[280px] lg:h-[200px] cover ' src={IMAGE_PATH + movieslist.backdrop_path} alt='' />
                   
                       
                         
                        <h1 className='text-lg sm:text-2xl  text-center font-bold text-white   md:mt-2 mt-2'>   {movieslist.title} </h1>
                        <h1 className=' text-center  font-semibold text-white  '> <Moment  format='yyyy' >{movieslist.release_date}</Moment> </h1>
                    </div>
                    
                    
                      
                       
                     
                    </Link>
                </SplideSlide>
            ))
        }
    </Splide>
       
       


        
    </div>
    </div>



  )
}

export default TrendingMovies