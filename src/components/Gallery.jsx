import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('Tous')

  const projects = [
    {
      id: 1,
      title: 'Rénovation Salon Moderne',
      category: 'Peinture',
      description: 'Transformation complète avec faux plafond et peinture',
      image: '/image/Rénovation Salon Moderne.jpeg'
    },
    {
      id: 2,
      title: 'Installation Électrique Professionnelle',
      category: 'Électricité',
      description: 'Mise aux normes complète d\'une villa',
      image: '/image/Installation Électrique.jpeg'
    },
    {
      id: 3,
      title: 'Salle de Bain Luxe',
      category: 'Plomberie',
      description: 'Installation sanitaire haut de gamme',
      image: '/image/Salle de Bain Luxe.jpeg'
    },
    {
      id: 4,
      title: 'Zellij Traditionnel Marocain',
      category: 'Carrelage',
      description: 'Pose de zellij marocain authentique',
      image: '/image/Zellij Traditionnel.jpeg'
    },
    {
      id: 5,
      title: 'Plafond Décoratif Moderne',
      category: 'Plâtrerie',
      description: 'Faux plafond avec éclairage LED intégré',
      image: '/image/Plafond Décoratif.jpeg'
    },
    {
      id: 6,
      title: 'Terrasse Extérieure',
      category: 'Carrelage',
      description: 'Carrelage extérieur antidérapant',
      image: '/image/Terrasse Moderne.jpeg'
    },
    {
      id: 7,
      title: 'Décoration Façades Extérieures',
      category: 'Peinture',
      description: 'Ravalement et décoration de façades',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.41 (1).jpeg'
    },
    {
      id: 8,
      title: 'Pose de Marbre Luxe',
      category: 'Carrelage',
      description: 'Installation de marbre haut de gamme',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.42 (1).jpeg'
    },
    {
      id: 9,
      title: 'Système Interphone',
      category: 'Électricité',
      description: 'Installation interphone et système de sécurité',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.43 (1).jpeg'
    }
  ]

  const categories = ['Tous', 'Électricité', 'Plâtrerie', 'Peinture', 'Carrelage', 'Plomberie']

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Notre <span className="text-primary">Galerie</span>
          </h2>
          <p className="section-subtitle">
            Découvrez quelques-uns de nos projets réalisés avec passion et professionnalisme
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Real Image */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2 text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600 text-lg">{selectedImage.description}</p>
                <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%85%D9%85%D8%A7%D8%AB%D9%84" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-block">
                  Projet similaire ? Contactez-nous
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez un projet en tête ? Nous serions ravis de le réaliser pour vous !
          </p>
          <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Démarrer votre projet
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
