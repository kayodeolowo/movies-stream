
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { Pages } from "./Pages/Pages";
import Popular from "./Pages/Popular";




function App() {
  return (
     <BrowserRouter> 
      <Navbar/>
       {/* <Search/> */}

      <Pages/>
      <Routes> 
       
        <Route path='popular-moves' element={<Popular/>} />
      </Routes>
     
      
    </BrowserRouter>
  );
}

export default App;
