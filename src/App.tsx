import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollAnimations from './components/ScrollAnimations'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Rochester from './pages/Rochester'
import Clarkston from './pages/Clarkston'
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
          <Route path="/services" element={<Services />} />
          <Route path="/locations/rochester-hills" element={<Rochester />} />
          <Route path="/locations/clarkston" element={<Clarkston />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
