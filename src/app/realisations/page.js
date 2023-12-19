import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Realisation from '@/components/Realisation'
import Footer from '@/components/Footer'

const Réalisations = () => {
    return (
        <main className='main page_realisation'>
          <Header />
          <Navbar />
          <Realisation />
          <Footer />
        </main>
      )
}

export default Réalisations