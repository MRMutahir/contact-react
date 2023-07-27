import React from 'react'
import Logo from '../src/image/Frame 2 1.jpg'
import List from './List'

function Navbar() {
  return (
    <div className='Nav'><img src={Logo} alt="image1" /><List/></div>
  )
}

export default Navbar