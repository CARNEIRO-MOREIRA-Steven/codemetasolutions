import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const Contact = () => {
    return (
        <div className='contact_page'>
          <Header />
          <Navbar />
          <ContactForm />
          <Footer />
          </div>
      )
}

export default Contact