import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, Wrench } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-primary/5 to-white shadow-lg' : 'bg-gradient-to-r from-primary/10 to-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <img 
              src="/image/logo.jpeg" 
              alt="BrexHome Logo" 
              className="h-14 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">BrexHome</h1>
              <p className="text-xs text-gray-600">بريكس هوم</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="tel:+212722284955"
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone className="h-4 w-4" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
            <a
              href="tel:+212722284955"
              className="flex items-center justify-center space-x-2 btn-primary w-full mt-4"
            >
              <Phone className="h-4 w-4" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
