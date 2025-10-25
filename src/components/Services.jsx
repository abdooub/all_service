import React from 'react'
import { Zap, Paintbrush, Droplets, Grid3x3, Hammer, ArrowRight, Camera } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const services = [
    {
      icon: Zap,
      title: 'Électricité',
      titleAr: 'الكهرباء',
      description: 'Installation et réparation électrique complète',
      features: [
        'Installation de câblage',
        'Réparation de pannes',
        'Installation d\'éclairage',
        'Prises et interrupteurs',
        'Tableaux électriques',
        'Mise aux normes'
      ],
      color: 'from-yellow-400 to-orange-500',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Grid3x3,
      title: 'Plâtrerie & Décoration',
      titleAr: 'الجبس والديكور',
      description: 'Travaux de plâtre et faux plafonds',
      features: [
        'Faux plafonds',
        'Cloisons en plâtre',
        'Décoration murale',
        'Corniche et moulures',
        'Isolation phonique',
        'Design moderne'
      ],
      color: 'from-gray-400 to-gray-600',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600'
    },
    {
      icon: Paintbrush,
      title: 'Peinture',
      titleAr: 'الدهان',
      description: 'Peinture intérieure et extérieure',
      features: [
        'Peinture murale',
        'Peinture de façade',
        'Enduit et lissage',
        'Peinture décorative',
        'Tadelakt marocain',
        'Finitions de qualité'
      ],
      color: 'from-pink-400 to-red-500',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: Grid3x3,
      title: 'Carrelage',
      titleAr: 'الزليج',
      description: 'Pose de carrelage et zellij traditionnel',
      features: [
        'Carrelage sol et mur',
        'Zellij marocain',
        'Faïence salle de bain',
        'Carrelage terrasse',
        'Joints et finitions',
        'Réparation carrelage'
      ],
      color: 'from-blue-400 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Droplets,
      title: 'Plomberie',
      titleAr: 'السباكة',
      description: 'Installation et réparation sanitaire',
      features: [
        'Réparation fuites',
        'Installation sanitaire',
        'Débouchage canalisations',
        'Chauffe-eau',
        'Robinetterie',
        'Urgences 24/7'
      ],
      color: 'from-blue-500 to-blue-700',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      icon: Hammer,
      title: 'Réparations Diverses',
      titleAr: 'إصلاحات متنوعة',
      description: 'Petits travaux et réparations',
      features: [
        'Menuiserie',
        'Serrurerie',
        'Réparation portes/fenêtres',
        'Montage meubles',
        'Petits travaux',
        'Maintenance générale'
      ],
      color: 'from-green-400 to-emerald-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Camera,
      title: 'Caméras de Surveillance',
      titleAr: 'كاميرات المراقبة',
      description: 'Installation de systèmes de surveillance',
      features: [
        'Caméras HD/4K',
        'Systèmes connectés',
        'Vision nocturne',
        'Accès à distance',
        'Enregistrement cloud',
        'Installation professionnelle'
      ],
      color: 'from-purple-400 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`${service.iconBg} p-3 rounded-lg`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <span className="text-sm opacity-90">{service.titleAr}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%84%D8%AE%D8%AF%D9%85%D8%A9%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full btn-primary text-center block group-hover:scale-105 transition-transform"
                >
                  {t.services.getQuote}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h3>
          <p className="text-xl mb-6 opacity-90">
            {t.services.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">
              {t.services.ctaButton}
            </a>
            <a href="tel:+212722284955" className="bg-primary-dark hover:bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block border-2 border-white">
              {t.services.callNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
