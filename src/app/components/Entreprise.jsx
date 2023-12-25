"use client"
import React, {useState} from 'react';
import './entreprise.css';

const Entreprise = () => {

    const [activeServices, setActiveServices] = useState ('service1');

    const Service = (serviceId) => {
        setActiveServices(serviceId)
    }

    return (
      <section className='entreprise'>
        <section className='entreprise_info'>
        <section className='entreprise_presentation'>
          <h2>Bienvenue chez CodeMeta Solutions !</h2>
            <p>En tant que développeur front-end passionné, je crée cette micro-entreprise avec un objectif clair : offrir des solutions web exceptionnelles.</p>
            <p>Chez CodeMeta Solutions, nous croyons en l'alliance de la créativité et de la fonctionnalité. Que ce soit pour donner vie à une idée,
            améliorer une présence en ligne ou créer une expérience utilisateur inoubliable, nous sommes là pour vous accompagner à chaque étape.</p>
            <p>Notre engagement envers l'innovation et la satisfaction client guide notre travail quotidien.
            Explorez notre site pour découvrir comment nous pouvons transformer vos idées en réalité digitale.</p>   
        </section>
        <aside className='entreprise_aside'> 
        <aside className='carre'>
            <img className='carre_logo' alt='logo entreprise' src='./images/logo-sansfond.webp'></img>
        </aside>
        </aside>
        </section>
        <section className='services'>
        <section className='services_title'>
            <h2>Les Services proposés</h2>
        </section>
        <nav className='nav_services'>
        <div className={activeServices === 'service1' ? 'nav active' : '' } >
        <p onClick={() => Service('service1')}>Création</p>
        <img alt='image creation site' onClick={() => Service('service1')} 
        src='./images/creation_sf.webp' defer></img>
        <hr id='select'></hr>
        </div>
        <div className={activeServices === 'service2' ? 'nav active' : '' }>
        <p onClick={() => Service('service2')}>Refonte</p>
        <img alt='image refonte site' onClick={() => Service('service2')}
         src='./images/refonte_sf.webp' defer></img>
        <hr id='select'></hr>
        </div>
        <div className={activeServices === 'service3' ? 'nav active' : '' } >
        <p onClick={() => Service('service3')}>Graphisme</p>
        <img alt='image graphisme site' onClick={() => Service('service3')} 
        src='./images/graphisme_sf.webp' defer></img>
        <hr id='select'></hr>
        </div>
        <div className={activeServices === 'service4' ? 'nav active' : '' }>
        <p onClick={() => Service('service4')}>SEO</p>
        <img alt='image seo site' onClick={() => Service('service4')} 
        src='./images/seo_sf.webp' defer></img>
        <hr id='select'></hr>
        </div>
        <div className={activeServices === 'service5' ? 'nav active' : '' }>
        <p onClick={() => Service('service5')}>Débogage</p>
        <img alt='image debogage site' onClick={() => Service('service5')} 
        src='./images/debug.webp' defer></img>
        <hr id='select'></hr>
        </div>
        </nav> 
        <section id='service1' className={`service ${activeServices === 'service1' ? 'active' : ''}`}>
            <div className='service_texte'>
            <h2>Création de site</h2>
            <p className='service_description'>Notre service de création de site web sur mesure repose sur une approche holistique, alliant design esthétique et fonctionnalités avancées.
            Nous commençons par comprendre vos objectifs commerciaux et vos besoins spécifiques, puis nous concevons et développons un site qui représente
            fidèlement votre marque. Que vous ayez besoin d'une vitrine en ligne, d'une plateforme e-commerce ou d'un site institutionnel,
            nous sommes là pour donner vie à votre vision.</p>
            </div>
            <img alt='image creation site' src='./images/creation_sf.webp' defer></img>
        </section>
        <section id='service2' className={`service ${activeServices === 'service2' ? 'active' : ''}`}>
        <div className='service_texte'>
            <h2>Refonte</h2>
            <p className='service_description'>La refonte de votre site web est bien plus qu'un simple rafraîchissement esthétique. Nous entreprenons une analyse approfondie de votre site actuel,
            identifiant les points forts et les domaines d'amélioration. Notre équipe de designers et de développeurs travaille ensuite à moderniser l'interface
            utilisateur, à optimiser la navigation et à intégrer les dernières fonctionnalités pour une expérience utilisateur exceptionnelle.
            La refonte de votre site est une opportunité de rester en tête des tendances tout en répondant aux attentes changeantes de vos visiteurs.</p>
            </div>
            <img alt='image refonte site' src='./images/refonte_sf.webp' defer></img>
        </section>
        <section id='service3' className={`service ${activeServices === 'service3' ? 'active' : ''}`}>
        <div className='service_texte'>
            <h2>Graphisme</h2>
            <p className='service_description'>Notre service de graphisme va au-delà de la simple création d'images attrayantes. Nous sommes des artisans visuels, donnant vie à votre identité
            de marque à travers des designs percutants. Du choix des couleurs à la typographie, chaque élément est soigneusement pensé pour transmettre votre message
            de manière mémorable. Que vous ayez besoin d'un nouveau logo, de supports marketing ou d'éléments visuels pour votre site, notre équipe créative
            est prête à faire briller votre marque.</p>
            </div>
            <img alt='image graphisme site' src='./images/graphisme_sf.webp' defer></img>
        </section>
        <section id='service4' className={`service ${activeServices === 'service4' ? 'active' : ''}`}>
        <div className='service_texte'>
            <h2>SEO</h2>
            <p className='service_description'>Améliorer votre classement sur les moteurs de recherche est essentiel pour accroître la visibilité de votre site. Notre service de référencement
            (SEO) est une approche complète qui commence par une analyse approfondie de votre site et de votre concurrence. Nous optimisons ensuite chaque aspect,
            des balises méta au contenu, en passant par la structure du site, pour maximiser votre présence en ligne. Notre objectif est de vous positionner en 
            haut des résultats de recherche, attirant un trafic qualifié et augmentant la notoriété de votre marque.</p>
            </div>
            <img alt='image seo site' src='./images/seo_sf.webp' defer></img>
        </section>        
        <section id='service5' className={`service ${activeServices === 'service5' ? 'active' : ''}`}>
        <div className='service_texte'>
            <h2>Debogage</h2>
            <p className='service_description'>Les problèmes techniques peuvent rapidement entraver la performance de votre site web. Notre service de débogage est là pour identifier et résoudre
            rapidement ces problèmes, assurant un fonctionnement optimal. Que ce soit des erreurs de code, des problèmes de compatibilité ou des performances lentes,
            notre équipe technique intervient de manière efficace pour garantir une expérience utilisateur sans faille. La résolution rapide des problèmes techniques
            est cruciale pour maintenir la confiance de vos visiteurs et assurer la stabilité de votre site web.</p>
            </div>
            <img alt='image debogage site' src='./images/debug.webp' defer></img>
        </section>
    </section>
    </section>
    );
  };
  
  export default Entreprise;