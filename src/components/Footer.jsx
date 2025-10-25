import React from 'react'
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]
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
                <h3 className="text-xl font-bold">BrexHome</h3>
                <p className="text-sm text-gray-400">بريكس هوم</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1KN6u7jEAQ/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/brexhome1/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.ourServices}</h3>
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
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
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
            <h3 className="text-lg font-semibold mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+212722284955" className="text-gray-400 hover:text-primary transition-colors">
                    +212 722-284955
                  </a>
                  <p className="text-xs text-gray-500">{t.footer.available}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:contactbrexhome@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  contactbrexhome@gmail.com
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
            © {currentYear} BrexHome - بريكس هوم. {t.footer.rights}
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
            {t.footer.keywords}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
