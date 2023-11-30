import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link href="/">Homepage</Link></li><hr></hr>
            <li><Link href="/mes_infos">Présentation</Link></li><hr></hr>
            <li><Link href="/actualites">Actualités</Link></li><hr></hr>
            <li><Link href="/prestations">Services</Link></li><hr></hr>
            <li><Link href="/hard_skills">Langages & Outils</Link></li><hr></hr>
            <li><Link href="/realisations">Mes réalisations</Link></li><hr></hr>
            <li><Link href="/contact">Devis / Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar