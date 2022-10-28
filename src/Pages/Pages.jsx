import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import MoviesDetails from './MoviesDetails'
import Searched from './Searched'

export const Pages = () => {
  return (
<Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/searched/:search" element={<Searched/>}
        />

         <Route path="/movie/:name" element={<MoviesDetails/>} />
         
   </Routes>
  )
}
