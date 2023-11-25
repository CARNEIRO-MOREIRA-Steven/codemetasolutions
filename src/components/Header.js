import React from 'react'
import './index.css'
import Reseaux from './Reseaux'

const Header = () => {
  return (
    <header>
        <img className="logo_entreprise" alt='logo entreprise' src='./images/logo.webp'></img>
        <h1>CodeMeta Solutions</h1>
        <Reseaux />
    </header>
  )
}

export default Header