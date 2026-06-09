import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollAnimations from './components/ScrollAnimations'
import Home from './pages/Home'
import About from './pages/About'
import Care from './pages/Care'
import Homes from './pages/Homes'
import Locations from './pages/Locations'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollAnimations />
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Care />} />
          <Route path="/locations/rochester-hills" element={<Locations />} />
          <Route path="/locations/clarkston" element={<Locations />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
