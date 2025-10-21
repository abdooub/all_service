import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Rénovation Salon Moderne',
      category: 'Peinture & Plâtrerie',
      description: 'Transformation complète avec faux plafond et peinture',
      image: '🏠',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Installation Électrique',
      category: 'Électricité',
      description: 'Mise aux normes complète d\'une villa',
      image: '⚡',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      title: 'Salle de Bain Luxe',
      category: 'Carrelage & Plomberie',
      description: 'Carrelage haut de gamme et installation sanitaire',
      image: '🚿',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 4,
      title: 'Cuisine Moderne',
      category: 'Carrelage',
      description: 'Pose de carrelage et faïence design',
      image: '🍳',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 5,
      title: 'Façade Extérieure',
      category: 'Peinture',
      description: 'Peinture et ravalement de façade',
      image: '🏡',
      color: 'from-pink-400 to-red-500'
    },
    {
      id: 6,
      title: 'Zellij Traditionnel',
      category: 'Carrelage',
      description: 'Pose de zellij marocain authentique',
      image: '🕌',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      id: 7,
      title: 'Plafond Décoratif',
      category: 'Plâtrerie',
      description: 'Faux plafond avec éclairage LED intégré',
      image: '✨',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 8,
      title: 'Chambre Parentale',
      category: 'Peinture & Décoration',
      description: 'Peinture décorative et finitions',
      image: '🛏️',
      color: 'from-rose-400 to-pink-600'
    },
    {
      id: 9,
      title: 'Terrasse Moderne',
      category: 'Carrelage',
      description: 'Carrelage extérieur antidérapant',
      image: '🌅',
      color: 'from-orange-400 to-red-500'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Notre <span className="text-primary">Galerie</span>
          </h2>
          <p className="section-subtitle">
            Découvrez quelques-uns de nos projets réalisés avec passion et professionnalisme
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`aspect-square bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
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
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className={`aspect-video bg-gradient-to-br ${selectedImage.color} flex items-center justify-center`}>
                <span className="text-9xl">{selectedImage.image}</span>
              </div>
              <div className="p-8">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2 text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600 text-lg">{selectedImage.description}</p>
                <a href="#contact" className="btn-primary mt-6 inline-block">
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
          <a href="#contact" className="btn-primary inline-block">
            Démarrer votre projet
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
