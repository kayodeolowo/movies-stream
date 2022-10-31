import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import Homepopularmovies from './Homepopularmovies'
import Hometopratedmovies from './Hometopratedmovies'
import Homeupcomingmovies from './Homeupcomingmovies'


import Popularseries from './Popularseries'



import Topratedmovies from './Topratedmovies'
import Topratedseries from './Topratedseries'
import TrendingMovies from './TrendingMovies'

import Upcomingmovies from './Upcomingmovies'

const Home = () => {
  return (
    <div className=' '>
       

        
        <TrendingMovies/>
        <Homepopularmovies/>
        <Homeupcomingmovies/>
      <Hometopratedmovies/>
        
        
        {/* <Genres/> */}
    </div>
  )
}

export default Home