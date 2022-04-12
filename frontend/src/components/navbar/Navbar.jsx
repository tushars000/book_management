import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navlink'>
      <p className='navpara'>LIBRARY</p>
      </Link>
      
    </div>
  )
}

export default Navbar