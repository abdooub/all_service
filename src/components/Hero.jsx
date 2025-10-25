import React from 'react'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <section id="home" className="relative pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}{' '}
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {t.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>{t.hero.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:+212722284955" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t.hero.callNow}</span>
              </a>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🏡</div>
                  <h3 className="text-3xl font-bold mb-2">BrexHome</h3>
                  <p className="text-xl opacity-90">بريكس هوم</p>
                  <p className="mt-4 text-lg">{t.hero.tagline}</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border-t-4 border-primary">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600 text-sm">{t.hero.projects}</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border-t-4 border-green-500">
              <div className="text-3xl font-bold text-green-500">100%</div>
              <div className="text-gray-600 text-sm">Clients satisfaits</div>
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
