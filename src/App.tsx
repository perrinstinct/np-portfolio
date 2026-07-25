import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Experience } from './components/Experience'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Expertise />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
