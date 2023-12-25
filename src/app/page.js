import Header from './components/Header'
import Banner from './components/Banner'
import Entreprise from './components/Entreprise'
import Footer from './components/Footer'
import Projet from './components/Projet'

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Banner />
      <Entreprise />
      <Projet />
      <Footer />
    </main>
  )
}
