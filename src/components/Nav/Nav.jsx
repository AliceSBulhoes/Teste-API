import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <header className='nav'>
      <Link to='/' className='nav-link'>Home</Link>
      <Link to='/cliente' className='nav-link'>Cliente</Link>
    </header>
    </>
  )
}

export default Nav
