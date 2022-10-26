import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import MoviesDetails from './MoviesDetails'

export const Pages = () => {
  return (
<Routes> 
        <Route path="/" element={<Home/>} />

         <Route path="/movie/:name" element={<MoviesDetails/>} />
   </Routes>
  )
}
