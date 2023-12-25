import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link href="/mes_infos">Présentation</Link></li>
            <li><Link href="/prestations">Services</Link></li>
            <li><Link href="/hard_skills">Langages & Outils</Link></li>
            <li><Link href="/realisations">Mes réalisations</Link></li>
            <li><Link href="/contact">Devis / Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar