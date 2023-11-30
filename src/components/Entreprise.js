"use client"
import React, { useEffect, useState } from 'react';
import './entreprise.css';

const Entreprise = () => {
    const texteAccueil = [
      "En tant que développeur front-end passionné, je crée cette micro-entreprise avec un objectif clair : offrir des solutions web exceptionnelles.",
      "Chez CodeMeta Solutions, nous croyons en l'alliance de la créativité et de la fonctionnalité. Que ce soit pour donner vie à une idée, améliorer une présence en ligne ou créer une expérience utilisateur inoubliable, nous sommes là pour vous accompagner à chaque étape.",
      "Notre engagement envers l'innovation et la satisfaction client guide notre travail quotidien. Explorez notre site pour découvrir comment nous pouvons transformer vos idées en réalité digitale."
    ];
  
    const [textesActuels, setTextesActuels] = useState(Array(texteAccueil.length).fill(''));
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTextesActuels((prevTextes) =>
          prevTextes.map((texte, index) =>
            texte.length < texteAccueil[index].length
              ? texteAccueil[index].substring(0, texte.length + 1)
              : texte
          )
        );
      }, 20);
  
      // Nettoyer l'intervalle à la sortie du composant
      return () => clearInterval(intervalId);
    }, [textesActuels, texteAccueil]);
  
    return (
      <section className='entreprise'>
        <section className='entreprise_info'>
        <img className='entreprise_logo' src='./images/Logo.png' alt="Logo"></img>
        <aside className='entreprise_presentation'>
          <h2>CodeMeta Solutions</h2>
          <h3>Bienvenue chez CodeMeta Solutions!</h3>
          {textesActuels.map((texte, index) => (
            <p key={index}>{texte}</p>
          ))}
        </aside>
        </section>
        <section className='services'>
        <section className='services_title'>
            <h2>Mes Services</h2>
        </section>
            <section className='services_container'>
            <aside className='services_card'>
                <img src='./images/creation.jpg'></img>
                <h2>Construction de Site Web</h2>
                <p>Création de sites web modernes et intuitifs, alignés sur vos objectifs commerciaux. Du concept à la réalité digitale, nous transformons vos idées en une présence en ligne percutante.</p>
            </aside>
            <aside className='services_card'>
                <img src='./images/refonte.png'></img>
                <h2>Refonte de Site Web</h2>
                <p>Modernisez votre site web existant pour refléter les dernières tendances et améliorer l'expérience utilisateur. Donnez une nouvelle vie à votre présence en ligne.</p>
            </aside>
            <aside className='services_card'>
                <img src='./images/seo.png'></img>
                <h2>Optimisation SEO</h2>
                <p>Améliorez la visibilité de votre site sur les moteurs de recherche. Avec des techniques SEO avancées, nous positionnons votre site en tête des résultats pour attirer plus de visiteurs.</p>
            </aside>
            <aside className='services_card'>
                <img src='./images/design.avif'></img>
                <h2>Graphisme Web</h2>
                <p>Création d'éléments graphiques percutants pour renforcer l'identité visuelle de votre marque en ligne. Des logos aux images, chaque détail est conçu pour captiver votre audience.</p>
            </aside>
            <aside className='services_card'>
                <img src='./images/debug.png'></img>
                <h2>Débogage et Maintenance</h2>
                <p>Garantissez le bon fonctionnement de votre site en identifiant et en résolvant rapidement les problèmes. Notre service de débogage et de maintenance assure une expérience utilisateur sans faille.</p>
            </aside>
        </section>
    </section>
    </section>
    );
  };
  
  export default Entreprise;