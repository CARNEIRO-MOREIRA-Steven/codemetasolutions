"use client"
import React, { useState } from 'react'
import './contact.css'


const CommonFields = () => {
  return (
    <div>
    <div className='email'>
          <label htmlFor='email'>Email </label>
          <input autoComplete="email" id='email' type='email' name='email' required></input>
        </div>
    <div className='details'>
      <div className='name'>
        <label htmlFor='name'>Nom </label>
        <input id='name' type='text' name='name' required></input>
      </div>
      <div className='telephone'>
        <label htmlFor='telephone'>Téléphone </label>
        <input id='telephone' type='text' name='telephone' required></input>
      </div>
    </div>
    <div className='budget'>
          <label htmlFor='budget'>Fourchette budgétaire pour le projet</label>
          <input type='text' id='budget' name='budget'></input>
        </div>
    </div>
  );
};

const ContactForm= () => {

  const [projectType, setProjectType] = useState('new'); // Par défaut, le nouveau projet
  
  const handleProjectTypeChange = (type) => {
    setProjectType(type);
  };
  return (
    <section className='form_section'>
      <div className='carte_entreprise'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6159.0724115089415!2d3.106510818616488!3d49.53037514714615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29a8ded827512eff%3A0xdac6c0f8bfbd9757!2sCodeMeta%20Solutions!5e0!3m2!1sfr!2sfr!4v1703525162909!5m2!1sfr!2sfr"></iframe>
      </div>
      <h2>Contactez moi</h2>
      <div className='forms'>
        {projectType === 'new' ? (
      <form className='form_content new'>
      <button id='button_exist' className='button' onClick={() => handleProjectTypeChange('exist')}>Projet Existant</button>
        <h2>Nouveau Projet</h2>
        <CommonFields />
        <div className='type'>
        <label htmlFor="type">Type d'entreprise </label>
        <input type="text" id="type" name="type" placeholder="ex. Boutique en ligne, Service local, Blog, etc..."></input>
        </div>
        <div className='besoin'>
          <label htmlFor='besoin'>Besoin spécifique </label>
          <textarea id='besoin' rows="10" name='besoin' maxLength={1000}></textarea>
        </div>
      </form>
       ) : ( 
      
      <form className='form_content exist'>
        <button id='button_new' className='button' onClick={() => handleProjectTypeChange('new')}>Nouveau Projet</button>
        <h2>Projet Existant</h2>
        <CommonFields />
        <div className='url'>
        <label htmlFor="url">URL du site existant</label>
        <input type="text" id="url" name="url"></input>
        </div>
        <div className='plateforme'>
          <label htmlFor='plateforme'>Plateforme utilisée</label>
          <input type='text' id='plateforme' className='plateforme' name='plateforme'  placeholder="ex. WordPress, Shopify, etc..." ></input>
        </div>
        <div className='objectif'>
        <label htmlFor='objectif'>Objectifs spécifiques</label>
        <select id='objectif' name='objectif'>
          <option value="probleme">Problèmes actuels avec le site</option>
          <option value="amelioration">Améliorations souhaitées</option>
        </select>
        <input type='text' id='objectif_text' name='objectif_text'></input>
        </div>
        <div className='name'>
        <label htmlFor='concurents'>Concurrents et Inspirations</label>
        <input type='text' id='concurents' name='concurents'></input>
        </div>
        <div className='name'>
        <label htmlFor='strategie'>Stratégie marketing</label>
        <input type='text' id='strategie' name='stategie'></input>
        </div>
      </form> )}
      </div>
    </section>
  )
}

export default ContactForm