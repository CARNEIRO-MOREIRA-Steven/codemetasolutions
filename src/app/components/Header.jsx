import React from 'react'
import './index.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <a href="/">
        <img className="logo_entreprise" alt='logo entreprise' src='./images/logo-sansfond.webp'></img>
      </a>
        <Navbar />
    </header>
  )
}

export default Header