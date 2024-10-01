import React from 'react'
import { Link } from 'react-router-dom'
// Importando estilos
import { NavStyle } from './NavStyle'

const Nav = () => {
  return (
    <>
    <NavStyle>
      <header className='nav'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/cliente' className='nav-link'>Cliente</Link>
        <Link to='/contato' className='nav-link'>Contato</Link>
      </header>
    </NavStyle>
    </>
  )
}

export default Nav
