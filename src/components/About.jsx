import React from 'react'
import { Award, Users, Clock, Shield } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Expertise Professionnelle',
      description: 'Plus de 10 ans d\'expérience dans le domaine de la rénovation',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      description: 'Artisans certifiés et formés aux dernières techniques',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Disponibilité 24/7',
      description: 'Intervention rapide pour vos urgences',
      color: 'text-orange-600'
    },
    {
      icon: Shield,
      title: 'Garantie Qualité',
      description: 'Travaux garantis et assurance tous risques',
      color: 'text-purple-600'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            À Propos de <span className="text-primary">Fix Dar</span>
          </h2>
          <p className="section-subtitle">
            Votre partenaire de confiance pour tous vos travaux de réparation et rénovation à Marrakech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Qui sommes-nous ?
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong className="text-primary">Fix Dar</strong> (فيكس دار) est une entreprise marocaine spécialisée 
              dans les services de réparation et rénovation résidentielle à Marrakech. Nous mettons à votre 
              disposition une équipe d'artisans qualifiés et expérimentés pour transformer votre maison.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Notre mission est simple : offrir des services de qualité supérieure à des prix compétitifs, 
              tout en respectant les délais convenus. Nous croyons que chaque maison mérite les meilleurs soins.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Que ce soit pour une petite réparation ou un grand projet de rénovation, notre équipe est 
              prête à vous accompagner avec professionnalisme et dévouement.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Nos Valeurs</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong>Qualité</strong>
                    <p className="text-blue-100 text-sm">Excellence dans chaque projet</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong>Transparence</strong>
                    <p className="text-blue-100 text-sm">Devis clairs et honnêtes</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong>Fiabilité</strong>
                    <p className="text-blue-100 text-sm">Respect des engagements</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong>Satisfaction Client</strong>
                    <p className="text-blue-100 text-sm">Votre bonheur, notre priorité</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4 ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
