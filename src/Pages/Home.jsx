import React from 'react'
import Homepopularmovies from './Homepopularmovies'
import Hometopratedmovies from './Hometopratedmovies'
import Homeupcomingmovies from './Homeupcomingmovies'
import TrendingMovies from './TrendingMovies'



const Home = () => {
  return (
    <div className='  '>
       

        
        <TrendingMovies/>
        <Homepopularmovies/>
        <Homeupcomingmovies/>
      <Hometopratedmovies/>
        
        
        {/* <Genres/> */}
    </div>
  )
}

export default Home