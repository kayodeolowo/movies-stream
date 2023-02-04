import React, {useEffect, useState} from 'react'
import axios from 'axios'

// import {TiStarFullOutline} from 'react-icons/ti'
// import {Link } from 'react-router-dom'

const Genres = () => {
      useEffect(()=> {
        getGenres()
    })

      const [genres, setGenres] = useState([])
      const [loading, setLoading] = useState (false)

       const getGenres = async ()=> {
         try {
            const res = await axios.get (`https://api.themoviedb.org/3/genre/movie/list?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US`)
            setGenres(res.data.genres) 
           // console.log(res.data.genres, "Genre")
            setLoading(true)

        } catch (err) {
                alert(err.message);
        }
    
    }


  return (
    <div>Genres</div>
  )
}

export default Genres