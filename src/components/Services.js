"use client"
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from './Footer';
import './services.css';

const sectionsData = [
  {
    id: 'creation',
    image: './images/creation_sf.png',
    title: 'Construction de Site Web',
    descriptions: [
      'En tant que développeur front-end chevronné, je mets à profit mes compétences avancées en JavaScript et l\'utilisation de frameworks modernes tels que React et Next.js pour construire des sites web sur mesure.',
      'Mon approche repose sur une compréhension approfondie de vos objectifs commerciaux, permettant la création de solutions web personnalisées et innovantes.',
      'Que vous ayez besoin d\'un site vitrine, d\'une plateforme e-commerce ou d\'une application web complexe, je suis là pour transformer vos idées en réalité.'
    ]
  },
  {
    id: 'refonte',
    image: './images/refonte_sf.png',
    title: 'Refonte de Site Web',
    descriptions: [
      'La refonte d\'un site web est une étape cruciale pour rester compétitif et répondre aux évolutions du marché. En tant que spécialiste en développement front-end, je propose des services de refonte qui vont au-delà de simples mises à jour esthétiques.',
      'En analysant en profondeur l\'architecture existante, j\'apporte des améliorations substantielles pour optimiser les performances, la convivialité et l\'efficacité globale du site.',
      'Que votre objectif soit de moderniser l\'apparence ou d\'optimiser la structure sous-jacente, je suis là pour vous guider à chaque étape du processus.'
    ]
  },
  {
    id: 'optimisation',
    image: './images/seo_sf.png',
    title: 'Optimisation SEO',
    descriptions: [
      ' Une présence en ligne efficace nécessite plus que la simple création d\'un site web attractif. Mon expertise en optimisation pour les moteurs de recherche (SEO) garantit que votre site est facilement découvert par les utilisateurs pertinents.',
      'De l\'analyse approfondie des mots-clés à l\'optimisation du contenu, je travaille à améliorer le classement de votre site dans les résultats de recherche. ',
      'Le SEO est un investissement essentiel pour générer un trafic organique durable et renforcer la visibilité de votre entreprise sur le web.'
    ]
  },
  {
    id: 'graphisme',
    image: './images/graphisme_sf.png',
    title: 'Graphisme Web',
    descriptions: [
      'Au-delà du code, je suis également passionné par l\'esthétique et l\'ergonomie. Mon approche du graphisme web combine la créativité visuelle avec une compréhension profonde de l\'expérience utilisateur.',
      'Chaque élément graphique est soigneusement conçu pour refléter l\'identité de votre entreprise, tout en assurant une navigation fluide et intuitive pour vos visiteurs. ',
      'Des palettes de couleurs harmonieuses aux images percutantes, je m\'engage à créer une esthétique visuelle qui renforce la crédibilité de votre marque et captive votre public cible.'
    ]
  },
  {
    id: 'debogage',
    image: './images/debug.png',
    title: 'Débogage et Maintenance',
    descriptions: [
      'La stabilité et la performance de votre site sont essentielles pour offrir une expérience utilisateur sans faille. En tant que développeur front-end expérimenté, je propose des services complets de débogage et de maintenance.',
      'Des diagnostics approfondis aux correctifs rapides, je veille à ce que votre site fonctionne de manière optimale en tout temps. ',
      'Mon engagement envers la qualité et la fiabilité assure la continuité de vos opérations en ligne, minimisant les temps d\'arrêt et préservant la satisfaction de vos utilisateurs.'
    ]
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  const activateSection = (sectionNumber) => {
    const sectionClassName = `.slide${sectionNumber}`;
    const sectionElement = document.querySelector(sectionClassName);
  
    document.querySelectorAll('.slides').forEach((section) => {
      section.classList.remove('active');
    });
  
    document.querySelectorAll('.navigation-dots span').forEach((dot) => {
      dot.classList.remove('active');
    });
  
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      sectionElement.classList.add('active');
  
      // Activer la première description correspondante à la section
      const firstDescriptionIndex = (sectionNumber - 1) * 3 + 1;
      activateDescription(firstDescriptionIndex);
  
      // Activer le point de navigation correspondant
      document.querySelector(`.navigation-dots span:nth-child(${sectionNumber})`).classList.add('active');
    }
  };

  const activateDescription = (pNumber) => {
    document.querySelectorAll('.descriptions').forEach((p) => {
      p.classList.remove('active');
    });

    if (pNumber) {
      const pClassName = `.description${pNumber}`;
      const pElement = document.querySelector(pClassName);

      if (pElement) {
        pElement.classList.add('active');

        // Trouver la section parente de la description active
        const sectionNumber = Math.ceil(pNumber / 3);

        // Activer le point de navigation correspondant
        document.querySelector(`.navigation-dots span:nth-child(${sectionNumber})`).classList.add('active');
      }
    }
  };

  const dotsAside = (pNumber) => {
    activateDescription(pNumber);
    const sectionNumber = Math.ceil(pNumber / 3);
    document.querySelector(`.navigation-dots span:nth-child(${sectionNumber})`).classList.add('active');
  };

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionNumber = Number(entry.target.id.split('-')[1]);
          activateSection(sectionNumber);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleScroll, { threshold: 1 });
  
    document.querySelectorAll('.slides').forEach((section) => {
      observer.observe(section);
    });
  
    // Vérifier si un hash est présent dans l'URL
    const hash = window.location.hash;
    if (hash) {
      // Extraire le numéro de section à partir du hash
      const sectionNumber = Number(hash.split('-')[1]);
      activateSection(sectionNumber);
    } else {
      // Si aucun hash n'est présent, activer la section 1 par défaut
      activateSection(1);
    }
  
    return () => observer.disconnect();
  }, []);


  return (
    <section className='container_services' ref={scrollRef}>
      <section className='header_fixe'>
        <Header />
        <Navbar />
      </section>

      {sectionsData.map((section, index) => (
        <section key={index} id={`section-${index + 1}`} className={`slides slide${index + 1}`}>
          <aside className='services_title_container'>
            <img src={section.image} alt={section.title} />
            <h2 className='title_service'>{section.title}</h2>
          </aside>
          <aside className='services_description'>
            {section.descriptions.map((description, i) => (
              <p key={i} className={`descriptions description${index * 3 + i + 1}`}>
                {description}
              </p>
            ))}
          </aside>
          <section className='dots-aside'>
            {[1, 2, 3].map((dotIndex) => (
              <span key={dotIndex} onClick={() => dotsAside(index * 3 + dotIndex)}></span>
            ))}
          </section>
        </section>
      ))}

      <section className='navigation-dots'>
        {sectionsData.map((section, index) => (
          <span key={index} onClick={() => activateSection(index + 1)}>
            <p>{section.title}</p>
          </span>
        ))}
      </section>

      <Footer />
    </section>
  );
};

export default Services;
