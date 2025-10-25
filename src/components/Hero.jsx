import React from 'react'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <section id="home" className="relative pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="w-full">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {t.hero.title}{' '}
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.hero.description}
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
              {t.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <span>{t.hero.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:+212722284955" className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <Phone className="h-5 w-5" />
                <span>{t.hero.callNow}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
