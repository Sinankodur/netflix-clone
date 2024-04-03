import React from 'react'
import './RowPost.css'
import img1 from './images/3 body problem.jpg'
import img2 from './images/avatar.jpg'
import img3 from './images/Call me once.jpg'
import img4 from './images/homicide.jpg'
import img5 from './images/monk.jpg'
import img6 from './images/Stranger_Things__The_Experience.jpg'
import img7 from './images/the gentlemen.jpg'
import img8 from './images/the program.jpg'
import img9 from './images/turning point.jpg'

function RowPost() {
  return (
    <div>
        <div className='row'>
           <p>New Releases</p>
        </div>
        <div className="posters">
            <img src={img1} className='poster' alt="poster" />
            <img src={img2} className='poster' alt="poster" />
            <img src={img3} className='poster' alt="poster" />
            <img src={img4} className='poster' alt="poster" />
            <img src={img5} className='poster' alt="poster" />
            <img src={img6} className='poster' alt="poster" />
            <img src={img7} className='poster' alt="poster" />
            <img src={img8} className='poster' alt="poster" />
            <img src={img9} className='poster' alt="poster" />
        </div>
    </div>
  )
}

export default RowPost