import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link> */}
      <ul className='a'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/user/Sam">Sam</NavLink></li>
        <li><NavLink to="/user/John">John</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
