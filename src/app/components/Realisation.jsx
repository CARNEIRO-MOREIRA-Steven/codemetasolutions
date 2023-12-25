"use client"
import React, {useState} from 'react'
import './realisation.css'

const Realisation = () => {

const [slideProjet, setSlideProjet] = useState(0);

const Projet = [
  {
    name : "Mon Portefolio",
    objectif : "Créer et publier mon portefolio de développeur",
    tags : [ "HTML", "CSS", "NEXT"],
    github :"https://github.com/Squaad6z/portefolio",
    link: "https://portefolio-carneiro-moreira.vercel.app/",
    iphone : "./images/portefolio_iphone.webp",
    ipad : './images/portefolio_ipad.webp',
    mac : './images/portefolio_pc.webp'
  },
  {
    name : "Print It",
    objectif : "Programmer en utilisant les fondamentaux de JavaScript",
    tags : ["HTML", "CSS", "JAVASCRIPT"],
    github :"https://github.com/Squaad6z/Print-it",
    link: "https://squaad6z.github.io/Print-it/",
    mac : './images/Printit.webp'
  },
  {
    name : "Ohmyfood",
    objectif : "Améliorez l'interface d'un site mobile avec des animations CSS",
    tags : ["HTML", "CSS"],
    github :"https://github.com/Squaad6z/Ohmyfood",
    link : "https://squaad6z.github.io/Ohmyfood/",
    iphone : "./images/ohmyfood_iphone.webp",
    ipad : './images/ohmyfood_ipad.webp',
    mac : './images/ohmyfood.webp',
  },
  {
    name : "77events",
    objectif : "Débuggez le site d'une agence d'événementiel",
    tags : ["HTML", "SASS", 'JAVASCRIPT'],
    github :"https://github.com/Squaad6z/77events",
    link: "https://77events-three.vercel.app/",
    mac : './images/77event.webp'
  },
  {
    name : "Nina Carducci",
    objectif : "Optimisez le référencement d'un site de photographe",
    tags : ["HTML", "CSS", "JAVASCRIPT"],
    github : "https://github.com/Squaad6z/ninacarducci",
    link : "https://squaad6z.github.io/ninacarducci/",
    iphone : "./images/NinaCarducci_iphone.webp",
    ipad : './images/NinaCarducci_ipad.webp',
    mac : './images/NinaCarducci.webp'
  },
  {
    name : "Argent Bank",
    objectif : "Implémentez le front-end d'une application bancaire avec React",
    tags : ["HTML", "CSS", "JAVASCRIPT", "REACT", "REDUX"],
    github : "https://github.com/Squaad6z/argent-bank",
    link : "https://argent-bank-carneiro-moreiras-projects.vercel.app/",
    mac : './images/argentbank.webp'
},
] 

const openLink = () => {
  const openLinkIphone = Projet[slideProjet].link;
  window.open(openLinkIphone, '_blank');
};

const nextSlide = () => {
  setSlideProjet((slideProjet +1)% Projet.length);
};

const prevSlide = () => {
  setSlideProjet((slideProjet -1 + Projet.length)%Projet.length)
}

const openGithub = () => {
  const openLinkIphone = Projet[slideProjet].github;
  window.open(openLinkIphone, '_blank');
};

const getProjetsClasses = () => {
  const baseClasses = 'projet_realisation';
  const siteResponsive = Projet[slideProjet].ipad ? 'responsive' : '';
  // Ajoutez d'autres conditions si nécessaire
  return `${baseClasses} ${siteResponsive}`;
};

return (
  <section className='container_realisation'>
    <h2 className='nom_projet'>{Projet[slideProjet].name}</h2>
    <section className={getProjetsClasses()}>
      {Projet[slideProjet].ipad && (
        <div onClick={openLink} className='container_ipad'>
          <img className='ipad' alt='image ipad' src='./images/ipad.png'></img>
          <img className='ipad_image' alt='image site version ipad' src={Projet[slideProjet].ipad}></img>
        </div>
      )}
      {Projet[slideProjet].mac && (
        <div onClick={openLink} className='container_mac'>
          <img className='mac' alt='image macbook' src='./images/macbook.webp'></img>
          <img className='mac_image' src={Projet[slideProjet].mac}></img>
        </div>
      )}
      {Projet[slideProjet].iphone && (
        <div onClick={openLink} className='container_iphone'>
          <img className='iphone' alt='image iphone' src='./images/iphone.png'></img>
          <img className='iphone_image' src={Projet[slideProjet].iphone}></img>
        </div>
      )}
    </section>
    <h3 className='objectif_projet'>{Projet[slideProjet].objectif} </h3>
    <button className='next_projet' type='submit' onClick={nextSlide}><img className='chevron' src='./images/chevron-right-solid.svg'></img></button>
    <button className='prev_projet' type='submit' onClick={prevSlide}><img className='chevron' src='./images/chevron-left-solid.svg'></img></button>
    <ul className="tags">
      {Projet[slideProjet].tags.map((tag, index) => (
        <li key={index} className={`tag tag_${tag.toLowerCase()}`}>{tag}</li>
      ))}
    </ul>
    <button type="submit" aria-label="GitHub" className='github' onClick={openGithub}>
      <img alt="github logo" src="./images/github.svg"></img>
    </button>
  </section>
);
};


export default Realisation