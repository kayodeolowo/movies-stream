import React from 'react'
import Popular from './Popular'

import Topratedmovies from './Topratedmovies'

import Upcomingmovies from './Upcomingmovies'

const Home = () => {
  return (
    <div>
        <Popular/>
        <Upcomingmovies/>
        <Topratedmovies/>
        
        {/* <Genres/> */}
    </div>
  )
}

export default Home