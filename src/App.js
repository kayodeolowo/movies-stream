
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Theme } from "./Components/Theme";
import { Footer } from "./Pages/Footer";

import { Pages } from "./Pages/Pages";
import Popular from "./Pages/Popular";
import Popularseries from "./Pages/Popularseries";
import Topratedmovies from "./Pages/Topratedmovies";
import Topratedseries from "./Pages/Topratedseries";
import Upcomingmovies from "./Pages/Upcomingmovies";




function App() {
  return (
    <Theme>
      <div className=" lg:flex justify-between"> 
      <div>  <Navbar/> </div>
     
        
        <div className="lg:w-10/12">   <Pages/>
         <Routes>    
        <Route path='popular-movies' element={<Popular/>} />
        <Route path='toprated-movies' element={<Topratedmovies/>} />
        <Route path='Upcoming-movies' element={<Upcomingmovies/>} />
        <Route path='popular-series' element={<Popularseries/>} />
        <Route path='toprated-series' element={<Topratedseries/>} />
      </Routes>
    
       </div>

       

    
     
      </div>
      </Theme>
     
      
    
  );
}

export default App;
