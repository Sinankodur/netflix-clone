import React, { useState } from 'react';
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
      <span className='link' style={{left: '14rem'}}>Home</span>
      <span className='link' style={{left: '19rem'}}>TV Shows</span>
      <span className='link' style={{left: '26rem'}}>Movies</span>
      <span className='link' style={{left: '32rem'}}>My List</span>
      <img src={Avatar} className='avatar' alt="avatar" />
    </div>
  ) 
}

export default NavBar