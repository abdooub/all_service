import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Helmet>
        <title>Fix Dar - Réparation et Rénovation Maison Marrakech | Électricien, Plâtrier, Peintre</title>
        <meta name="description" content="Fix Dar offre des services professionnels de réparation et rénovation à Marrakech : électricité, plâtrerie, peinture, carrelage, plomberie. Votre maison, notre mission !" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
