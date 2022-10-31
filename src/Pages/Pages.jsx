import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import MoviesDetails from './MoviesDetails'
import Searched from './Searched'
import Searchedtvshows from './Searchedtvshows'

import SeriesDetails from './SeriesDetails'

export const Pages = () => {
  return (
<Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/searched/:search" element={<Searched/>}
        />

         <Route path="/searchedtv/:search" element={<Searchedtvshows/>}
        />

         
        
         <Route path="/movie/:name" element={<MoviesDetails/>} />

         <Route path="/series/:name" element={<SeriesDetails/>} />
         
   </Routes>
  )
}
