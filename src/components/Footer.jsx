import React from 'react'
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const services = [
    'Électricité',
    'Plâtrerie & Décoration',
    'Peinture',
    'Carrelage & Zellij',
    'Plomberie',
    'Réparations Diverses'
  ]

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fix Dar</h3>
                <p className="text-sm text-gray-400">فيكس دار</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Votre partenaire de confiance pour tous vos travaux de réparation et rénovation à Marrakech.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+212600000000" className="text-gray-400 hover:text-primary transition-colors">
                    +212 600 000 000
                  </a>
                  <p className="text-xs text-gray-500">Disponible 24/7</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@fixdar.ma" className="text-gray-400 hover:text-primary transition-colors">
                  contact@fixdar.ma
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Marrakech, Maroc
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Fix Dar. Tous droits réservés. | 
            <span className="text-primary"> Électricien Marrakech</span> | 
            <span className="text-primary"> Plâtrier Marrakech</span> | 
            <span className="text-primary"> Peintre Marrakech</span>
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary-dark p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* SEO Keywords */}
        <div className="mt-6 text-xs text-gray-600 text-center">
          <p>
            Mots-clés : électricien Marrakech, plâtrier Marrakech, peintre Marrakech, 
            carreleur Marrakech, réparation maison Marrakech, plombier Marrakech, 
            rénovation Marrakech, zellij Marrakech, travaux maison Marrakech
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
