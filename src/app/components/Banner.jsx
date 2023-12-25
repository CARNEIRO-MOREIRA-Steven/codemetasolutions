"use client"
import React, { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
  const [typedText, setTypedText] = useState('');
  const text = "CodeMeta Solutions";
  const speed = 200; // Vitesse d'écriture en millisecondes

  useEffect(() => {
    const typeEffect = async () => {
      for (let i = 0; i <= text.length; i++) {
        setTypedText(text.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, speed));
      }
    };

    typeEffect();

    return () => setTypedText(''); // Nettoyer le texte lorsque le composant est démonté
  }, []);

  return (
    <section className='container'>
      <section className='banner_presentation'>
        <h1>{typedText}</h1>
        <h2>TRANSFORMER VOTRE PRESENCE EN LIGNE</h2>
        <h3>Experts en développement web, nous offrons des solutions uniques pour propulser votre entreprise dans le monde digital.</h3>
      </section>
      <section className='banner'>
      <img className='banner_image' alt='image carte visite' src='./images/carte_visite.webp'></img>
      <img className='banniere_image' alt='image banniere' src='./images/banniere.webp'></img>
      </section>
    </section>
  );
};

export default Banner;