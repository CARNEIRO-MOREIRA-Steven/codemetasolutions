import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Carousel from "@/components/Carousel"
import Entreprise from "@/components/Entreprise"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Navbar />
      <Carousel />
      <Entreprise />
      <Footer />
    </main>
  )
}
