import React from 'react'
import Homepopularmovies from './Homepopularmovies'
import Hometopratedmovies from './Hometopratedmovies'
import Homeupcomingmovies from './Homeupcomingmovies'
import TrendingMovies from './TrendingMovies'



const Home = () => {
  return (
    <div className='  '>
       

        
        <TrendingMovies/>
        <Homeupcomingmovies/>
        <Hometopratedmovies/>
        <Homepopularmovies/>
        
        
        {/* <Genres/> */}
    </div>
  )
}

export default Home