import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Gallery = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Rénovation Salon Moderne',
      titleAr: 'تجديد صالون عصري',
      titleEn: 'Modern Living Room Renovation',
      category: 'painting',
      description: 'Transformation complète avec faux plafond et peinture',
      descriptionAr: 'تحويل كامل مع سقف معلق ودهان',
      descriptionEn: 'Complete transformation with false ceiling and painting',
      image: '/image/Rénovation Salon Moderne.jpeg'
    },
    {
      id: 2,
      title: 'Installation Électrique Professionnelle',
      titleAr: 'تركيب كهربائي احترافي',
      titleEn: 'Professional Electrical Installation',
      category: 'electricity',
      description: 'Mise aux normes complète d\'une villa',
      descriptionAr: 'تطابق كامل مع المعايير لفيلا',
      descriptionEn: 'Complete standards compliance for a villa',
      image: '/image/Installation Électrique.jpeg'
    },
    {
      id: 3,
      title: 'Salle de Bain Luxe',
      titleAr: 'حمام فاخر',
      titleEn: 'Luxury Bathroom',
      category: 'plumbing',
      description: 'Installation sanitaire haut de gamme',
      descriptionAr: 'تركيب صحي عالي الجودة',
      descriptionEn: 'High-end sanitary installation',
      image: '/image/Salle de Bain Luxe.jpeg'
    },
    {
      id: 4,
      title: 'Zellij Traditionnel Marocain',
      titleAr: 'زليج مغربي تقليدي',
      titleEn: 'Traditional Moroccan Zellij',
      category: 'tiling',
      description: 'Pose de zellij marocain authentique',
      descriptionAr: 'تركيب زليج مغربي أصيل',
      descriptionEn: 'Authentic Moroccan zellij installation',
      image: '/image/Zellij Traditionnel.jpeg'
    },
    {
      id: 5,
      title: 'Plafond Décoratif Moderne',
      titleAr: 'سقف زخرفي عصري',
      titleEn: 'Modern Decorative Ceiling',
      category: 'plastering',
      description: 'Faux plafond avec éclairage LED intégré',
      descriptionAr: 'سقف معلق مع إضاءة LED مدمجة',
      descriptionEn: 'False ceiling with integrated LED lighting',
      image: '/image/Plafond Décoratif.jpeg'
    },
    {
      id: 6,
      title: 'Terrasse Extérieure',
      titleAr: 'تراس خارجي',
      titleEn: 'Outdoor Terrace',
      category: 'tiling',
      description: 'Carrelage extérieur antidérapant',
      descriptionAr: 'بلاط خارجي مضاد للانزلاق',
      descriptionEn: 'Anti-slip outdoor tiling',
      image: '/image/Terrasse Moderne.jpeg'
    },
    {
      id: 7,
      title: 'Décoration Façades Extérieures',
      titleAr: 'ديكور واجهات خارجية',
      titleEn: 'Exterior Facade Decoration',
      category: 'painting',
      description: 'Ravalement et décoration de façades',
      descriptionAr: 'ترميم وديكور الواجهات',
      descriptionEn: 'Facade restoration and decoration',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.41 (1).jpeg'
    },
    {
      id: 8,
      title: 'Pose de Marbre Luxe',
      titleAr: 'تركيب رخام فاخر',
      titleEn: 'Luxury Marble Installation',
      category: 'tiling',
      description: 'Installation de marbre haut de gamme',
      descriptionAr: 'تركيب رخام عالي الجودة',
      descriptionEn: 'High-end marble installation',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.42 (1).jpeg'
    },
    {
      id: 9,
      title: 'Système Interphone',
      titleAr: 'نظام الاتصال الداخلي',
      titleEn: 'Intercom System',
      category: 'electricity',
      description: 'Installation interphone et système de sécurité',
      descriptionAr: 'تركيب نظام اتصال داخلي وأمان',
      descriptionEn: 'Intercom and security system installation',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.43 (1).jpeg'
    },
    {
      id: 10,
      title: 'Rénovation Cuisine Moderne',
      titleAr: 'تجديد مطبخ عصري',
      titleEn: 'Modern Kitchen Renovation',
      category: 'tiling',
      description: 'Carrelage et aménagement cuisine complète',
      descriptionAr: 'بلاط وتجهيز مطبخ كامل',
      descriptionEn: 'Complete kitchen tiling and fitting',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.37.jpeg'
    },
    {
      id: 11,
      title: 'Installation Caméras HD',
      titleAr: 'تركيب كاميرات HD',
      titleEn: 'HD Camera Installation',
      category: 'electricity',
      description: 'Système de surveillance haute définition',
      descriptionAr: 'نظام مراقبة عالي الدقة',
      descriptionEn: 'High definition surveillance system',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.38.jpeg'
    },
    {
      id: 12,
      title: 'Décoration Murale Artistique',
      titleAr: 'ديكور جدار فني',
      titleEn: 'Artistic Wall Decoration',
      category: 'painting',
      description: 'Peinture décorative et finitions artistiques',
      descriptionAr: 'دهان زخرفي وتشطيبات فنية',
      descriptionEn: 'Decorative painting and artistic finishes',
      image: '/image/WhatsApp Image 2025-10-23 at 12.47.39.jpeg'
    },
    // Plus de projets Électricité
    {
      id: 13,
      title: 'Installation Éclairage LED Moderne',
      titleAr: 'تركيب إضاءة LED عصرية',
      titleEn: 'Modern LED Lighting Installation',
      category: 'electricity',
      description: 'Éclairage LED intelligent et économe en énergie',
      descriptionAr: 'إضاءة LED ذكية وموفرة للطاقة',
      descriptionEn: 'Smart and energy-efficient LED lighting',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      id: 14,
      title: 'Tableau Électrique Moderne',
      titleAr: 'لوحة كهربائية عصرية',
      titleEn: 'Modern Electrical Panel',
      category: 'electricity',
      description: 'Installation tableau électrique aux normes',
      descriptionAr: 'تركيب لوحة كهربائية مطابقة للمعايير',
      descriptionEn: 'Standards-compliant electrical panel installation',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    },
    {
      id: 15,
      title: 'Système Domotique Intelligent',
      titleAr: 'نظام منزلي ذكي',
      titleEn: 'Smart Home System',
      category: 'electricity',
      description: 'Automatisation complète de la maison',
      descriptionAr: 'أتمتة منزلية كاملة',
      descriptionEn: 'Complete home automation',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop'
    },
    // Plus de projets Plâtrerie
    {
      id: 16,
      title: 'Faux Plafond Design Moderne',
      titleAr: 'سقف معلق بتصميم عصري',
      titleEn: 'Modern Design False Ceiling',
      category: 'plastering',
      description: 'Faux plafond avec motifs géométriques',
      descriptionAr: 'سقف معلق بأنماط هندسية',
      descriptionEn: 'False ceiling with geometric patterns',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      id: 17,
      title: 'Cloisons en Plâtre Décoratives',
      titleAr: 'فواصل جبسية زخرفية',
      titleEn: 'Decorative Plaster Partitions',
      category: 'plastering',
      description: 'Séparation d\'espaces avec style',
      descriptionAr: 'فصل المساحات بأناقة',
      descriptionEn: 'Stylish space separation',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    },
    {
      id: 18,
      title: 'Corniche et Moulures Classiques',
      titleAr: 'كورنيش وتشكيلات كلاسيكية',
      titleEn: 'Classic Cornices and Moldings',
      category: 'plastering',
      description: 'Finitions décoratives traditionnelles',
      descriptionAr: 'تشطيبات زخرفية تقليدية',
      descriptionEn: 'Traditional decorative finishes',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    // Plus de projets Peinture
    {
      id: 19,
      title: 'Peinture Façade Extérieure',
      titleAr: 'دهان واجهة خارجية',
      titleEn: 'Exterior Facade Painting',
      category: 'painting',
      description: 'Ravalement complet de façade',
      descriptionAr: 'ترميم كامل للواجهة',
      descriptionEn: 'Complete facade restoration',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      id: 20,
      title: 'Tadelakt Marocain Authentique',
      titleAr: 'تادلاكت مغربي أصيل',
      titleEn: 'Authentic Moroccan Tadelakt',
      category: 'painting',
      description: 'Enduit traditionnel marocain',
      descriptionAr: 'جص تقليدي مغربي',
      descriptionEn: 'Traditional Moroccan plaster',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    },
    {
      id: 21,
      title: 'Peinture Murale Décorative',
      titleAr: 'دهان جدار زخرفي',
      titleEn: 'Decorative Wall Painting',
      category: 'painting',
      description: 'Fresques et motifs artistiques',
      descriptionAr: 'جداريات وأنماط فنية',
      descriptionEn: 'Frescoes and artistic patterns',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop'
    },
    // Plus de projets Carrelage
    {
      id: 22,
      title: 'Carrelage Salle de Bain Moderne',
      titleAr: 'بلاط حمام عصري',
      titleEn: 'Modern Bathroom Tiling',
      category: 'tiling',
      description: 'Carrelage design pour salle de bain',
      descriptionAr: 'بلاط تصميمي للحمام',
      descriptionEn: 'Design tiling for bathroom',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
    },
    {
      id: 23,
      title: 'Pose Carrelage Grand Format',
      titleAr: 'تركيب بلاط كبير الحجم',
      titleEn: 'Large Format Tile Installation',
      category: 'tiling',
      description: 'Carrelage 60x60 et plus',
      descriptionAr: 'بلاط 60x60 وأكثر',
      descriptionEn: '60x60 and larger tiles',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    },
    {
      id: 24,
      title: 'Zellij Motifs Traditionnels',
      titleAr: 'زليج بأنماط تقليدية',
      titleEn: 'Traditional Zellij Patterns',
      category: 'tiling',
      description: 'Motifs zellij marocains authentiques',
      descriptionAr: 'أنماط زليج مغربية أصيلة',
      descriptionEn: 'Authentic Moroccan zellij patterns',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
    },
    // Plus de projets Plomberie
    {
      id: 25,
      title: 'Installation Douche Italienne',
      titleAr: 'تركيب دش إيطالي',
      titleEn: 'Italian Shower Installation',
      category: 'plumbing',
      description: 'Douche à l\'italienne moderne',
      descriptionAr: 'دش إيطالي عصري',
      descriptionEn: 'Modern Italian shower',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
    },
    {
      id: 26,
      title: 'Rénovation Plomberie Complète',
      titleAr: 'تجديد سباكة كامل',
      titleEn: 'Complete Plumbing Renovation',
      category: 'plumbing',
      description: 'Remise à neuf système sanitaire',
      descriptionAr: 'تجديد نظام صحي',
      descriptionEn: 'Sanitary system renovation',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    },
    {
      id: 27,
      title: 'Installation Robinetterie Design',
      titleAr: 'تركيب صنابير تصميمية',
      titleEn: 'Design Faucet Installation',
      category: 'plumbing',
      description: 'Robinetterie moderne et élégante',
      descriptionAr: 'صنابير عصرية وأنيقة',
      descriptionEn: 'Modern and elegant faucets',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
    },
    {
      id: 28,
      title: 'Système de Chauffage Central',
      titleAr: 'نظام تدفئة مركزي',
      titleEn: 'Central Heating System',
      category: 'plumbing',
      description: 'Installation chauffage et radiateurs',
      descriptionAr: 'تركيب تدفئة ومشعات',
      descriptionEn: 'Heating and radiator installation',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    }
  ]

  const categories = [
    { key: 'all', label: t.gallery.all },
    { key: 'electricity', label: t.gallery.electricity },
    { key: 'plastering', label: t.gallery.plastering },
    { key: 'painting', label: t.gallery.painting },
    { key: 'tiling', label: t.gallery.tiling },
    { key: 'plumbing', label: t.gallery.plumbing }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {t.gallery.title} <span className="text-primary">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.label}
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
                    {categories.find(cat => cat.key === project.category)?.label || project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1">
                    {language === 'ar' ? project.titleAr : language === 'en' ? project.titleEn : project.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {language === 'ar' ? project.descriptionAr : language === 'en' ? project.descriptionEn : project.description}
                  </p>
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
                  {categories.find(cat => cat.key === selectedImage.category)?.label || selectedImage.category}
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2 text-gray-800">
                  {language === 'ar' ? selectedImage.titleAr : language === 'en' ? selectedImage.titleEn : selectedImage.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {language === 'ar' ? selectedImage.descriptionAr : language === 'en' ? selectedImage.descriptionEn : selectedImage.description}
                </p>
                <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%85%D9%85%D8%A7%D8%AB%D9%84" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-block">
                  {t.gallery.similarProject}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {t.gallery.ctaText}
          </p>
          <a href="https://wa.me/212722284955?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20BrexHome%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            {t.gallery.startProject}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
