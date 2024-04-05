import React, { useEffect, useState } from 'react';
import Netflix from './images/Logonetflix.png';
import Avatar from './images/avatar.png'
import './NavBar.css'


function NavBar() {
  const [color, setColor] = useState(false)
  const changeColor = ()=>{
    if (window.scrollY >= 10){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
      <img src={Netflix} className='logo' alt="logo" />
      <a href='#' className='link' style={{left: '14rem'}}>Home</a>
      <a href='#' className='link' style={{left: '19rem'}}>TV Shows</a>
      <a href='#' className='link' style={{left: '26rem'}}>Movies</a>
      <a href='#' className='link' style={{left: '32rem'}}>My List</a>
      <img src={Avatar} className='avatar' alt="avatar" />
    </div>
  ) 
}

export default NavBar