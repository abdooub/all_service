import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = '+212722284955'
  const message = encodeURIComponent('Bonjour Fix Dar, je souhaite obtenir plus d\'informations sur vos services.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 group-hover:animate-pulse" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
          1
        </span>
      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
              <MessageCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Besoin d'aide ?</h4>
              <p className="text-sm text-gray-600">
                Contactez-nous sur WhatsApp pour un devis rapide !
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsAppButton
