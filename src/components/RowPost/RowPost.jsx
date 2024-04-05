import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [ movies, setMovies ] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data.results);
    })
  }, [props.url])

  const opts = {
    height: '398',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const [ urlId, setUrlId ] = useState('')
  const handleTrailer = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length !== 0) {
        // console.log(response.data.results[0]);
        setUrlId(response.data.results[0]);
      }
    })
  }

  return (
    <div>
        <div className='row'>
           <p>{props.title}</p>
        </div>
        <div className="posters">
          {
            movies.map((obj)=>
              <img onClick={()=>handleTrailer(obj.id)} src={`${imageUrl+obj.poster_path}`} alt="poster" className={props.isSmall ? 'poster-small' : 'poster'} />
            )
          }
        </div>

        { urlId && <Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost