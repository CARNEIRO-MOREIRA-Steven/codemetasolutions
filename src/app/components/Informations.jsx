"use client"
import React, {useState} from 'react'
import './informations.css'

const Informations = () => {
  const [activeCard , setActiveCard] = useState('card1')

  const Card = (cardId) => {
    setActiveCard(cardId)
  };

  return (
    <main className='presentation_page'>
      <nav className='menu_presentation'>
        <ul>
        <li className={activeCard === 'card1' ? 'active' : ''}><a href="#" onClick={() => Card('card1')}>L'entreprise</a></li>
          <li className={activeCard === 'card2' ? 'active' : ''}><a href="#" onClick={() => Card('card2')}>Fondateur</a></li>
          <li className={activeCard === 'card3' ? 'active' : ''}><a href="#" onClick={() => Card('card3')}>Formations</a></li>
        </ul>
      </nav>
      <section id="card1" className={`card ${activeCard === 'card1' ? 'active' : ''}`}>
        <h2>Présentation de l'entreprise</h2>
        <section className='card_container'>
        <section className='card_content'>
        <img className='photo' src='./images/devweb.jpg'></img>
        <section className='description_texte'>
        <h3>Bienvenue dans l'univers de CodeMeta Solutions! 🚀</h3>
        <p>Développeur passionné derrière cette micro-entreprise dédiée au monde du développement web.</p>
        <p>Chez CodeMeta Solutions, notre mission est de transformer des idées en expériences en ligne exceptionnelles.
        Nous croyons en la puissance du code pour donner vie à des projets uniques et fonctionnels.</p>
        <h3>Ce qui nous distingue :</h3>
        </section>
        </section>
        <aside className='description_aside'>
        <ul>
        <li>✨ Une approche personnalisée : Chaque projet est une nouvelle aventure, et nous nous investissons pleinement pour comprendre vos besoins et y répondre de manière innovante.</li>
        <li>🌐 Expertise technique : Grâce à une formation approfondie et une passion constante pour l'apprentissage, nous maîtrisons un éventail de langages et d'outils pour vous offrir des solutions de qualité.</li>
        <li>💡 Créativité sans limites : Nous aimons repousser les frontières du design et de la fonctionnalité pour créer des sites web qui captivent et convertissent.</li>
        </ul>
        <p>Que vous ayez besoin d'une refonte complète de votre site, de fonctionnalités spécifiques ou d'une consultation technique, nous sommes là pour transformer votre vision en réalité. Explorez notre site pour découvrir nos réalisations et n'hésitez pas à nous contacter pour discuter de votre projet !</p>
        </aside>
        </section>
    </section>
    <section id="card2" className={`card ${activeCard === 'card2' ? 'active' : ''}`}>
        <h2>Présentation personnelle</h2>
        <section className='card_container'>
        <section className='card_content'>
        <img className='photo personnelle' alt='ma photo de profil' src='./images/photoprofil.webp'></img>
        <aside className='description_texte'>
        <h3>Salut ! Je suis Steven,</h3>
        <p>le créateur derrière chaque ligne de code sur ce site.</p>
        <p>🚀 Il y a un an, j'ai entamé un parcours passionnant chez OpenClassrooms, plongeant dans le monde fascinant du développement web.</p>
        <p>Depuis, je me suis plongé dans l'univers du développement web, explorant chaque aspect du processus de création avec enthousiasme.</p>
        <p>Bienvenue dans mon espace virtuel, où la passion pour le code se mêle à la recherche constante de l'innovation. 🌐✨</p>
        </aside></section>
        </section>
    </section>
    <section id="card3" className={`card ${activeCard === 'card3' ? 'active' : ''}`}>
        <h2>Formations</h2>
        <section className='card_container'>
        <section className='card_content'>
        <img className='photo formation' src='./images/formation.jpg'></img>
        <aside className='description_texte'>
        <h3>Formation d'Initialisation Fullstack (3 mois) - OpenClassrooms</h3>
        <p>Pour moi, tout a commencé avec cette formation intensive de 3 mois chez OpenClassrooms.
        J'y ai acquis les bases solides du développement web, plongeant dans l'univers du code avec passion. 
        Cette étape a été la fondation de mon parcours en tant que développeur web.</p>
        <h3>Formation d'Intégrateur Web (9 mois) - OpenClassrooms</h3>
        <p>Mon apprentissage s'est approfondi avec la formation d'Intégrateur Web sur une période de 9 mois chez OpenClassrooms.
        Au cours de cette expérience enrichissante, j'ai exploré un éventail de langages et d'outils, affinant mes compétences
        pour créer des interfaces web dynamiques et fonctionnelles.</p>
        </aside>
        </section>
        </section>
    </section>
    </main>
  )
}
export default Informations