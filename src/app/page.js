import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Entreprise from "@/components/Entreprise"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Navbar />
      <Banner />
      <Entreprise />
      <Footer />
    </main>
  )
}
