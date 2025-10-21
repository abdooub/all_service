import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mohammed Alami',
      nameAr: 'محمد العلمي',
      location: 'Guéliz, Marrakech',
      rating: 5,
      text: 'Service exceptionnel ! L\'équipe de Fix Dar a rénové ma salle de bain en un temps record. Travail soigné et prix très raisonnable. Je recommande vivement !',
      service: 'Carrelage & Plomberie',
      avatar: '👨'
    },
    {
      name: 'Fatima Bennis',
      nameAr: 'فاطمة بنيس',
      location: 'Hivernage, Marrakech',
      rating: 5,
      text: 'Très professionnels et ponctuels. Ils ont refait toute l\'installation électrique de ma maison. Équipe compétente et à l\'écoute. Merci Fix Dar !',
      service: 'Électricité',
      avatar: '👩'
    },
    {
      name: 'Karim Tazi',
      nameAr: 'كريم التازي',
      location: 'Palmeraie, Marrakech',
      rating: 5,
      text: 'Excellent travail de peinture et plâtrerie. Les artisans sont très qualifiés et le résultat dépasse mes attentes. Prix compétitifs et devis transparent.',
      service: 'Peinture & Plâtrerie',
      avatar: '👨‍💼'
    },
    {
      name: 'Aisha El Fassi',
      nameAr: 'عائشة الفاسي',
      location: 'Médina, Marrakech',
      rating: 5,
      text: 'J\'ai fait appel à Fix Dar pour la pose de zellij traditionnel. Travail magnifique et respect du patrimoine marocain. Je suis très satisfaite !',
      service: 'Zellij Traditionnel',
      avatar: '👩‍🦰'
    },
    {
      name: 'Youssef Berrada',
      nameAr: 'يوسف برادة',
      location: 'Targa, Marrakech',
      rating: 5,
      text: 'Intervention rapide pour une urgence de plomberie. Équipe réactive et efficace. Problème résolu en quelques heures. Service client au top !',
      service: 'Plomberie',
      avatar: '👨‍🔧'
    },
    {
      name: 'Samira Idrissi',
      nameAr: 'سميرة الإدريسي',
      location: 'Agdal, Marrakech',
      rating: 5,
      text: 'Rénovation complète de mon appartement. De la peinture au carrelage, tout a été fait avec soin. Je recommande Fix Dar les yeux fermés !',
      service: 'Rénovation Complète',
      avatar: '👩‍💻'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Témoignages <span className="text-primary">Clients</span>
          </h2>
          <p className="section-subtitle">
            Ce que nos clients disent de nos services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="h-12 w-12" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Service Badge */}
              <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full mb-4">
                {testimonial.service}
              </span>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.nameAr}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Projets Réalisés</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
            <div className="text-gray-600">Années d'Expérience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600">Support Client</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Rejoignez nos clients satisfaits !</h3>
          <p className="text-xl mb-6 opacity-90">
            Faites confiance à Fix Dar pour tous vos travaux de réparation et rénovation
          </p>
          <a href="#contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
