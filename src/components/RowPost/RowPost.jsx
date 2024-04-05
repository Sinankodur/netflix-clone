import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [ movies, setMovies ] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data.results);
    })
  }, [])
  return (
    <div>
        <div className='row'>
           <p>{props.title}</p>
        </div>
        <div className="posters">
          {
            movies.map((obj,index)=>
            
              <img src={`${imageUrl+obj.poster_path}`} key={index} alt="poster" className={props.isSmall ? 'poster-small' : 'poster'} />
            )
          }
        </div>
    </div>
  )
}

export default RowPost