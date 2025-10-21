# Fix Dar - Website de Réparation et Rénovation

🏠 **Votre maison, notre mission !**

Site web professionnel pour Fix Dar (فيكس دار), une agence marocaine de réparation et rénovation basée à Marrakech.

## 🎯 Fonctionnalités

- ✅ Design moderne et responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec menu fixe
- ✅ Section Hero avec slogan accrocheur
- ✅ Présentation des services (Électricité, Plâtrerie, Peinture, Carrelage, Plomberie)
- ✅ Galerie de projets réalisés
- ✅ Témoignages clients authentiques
- ✅ Formulaire de contact avec validation
- ✅ Bouton WhatsApp flottant pour contact rapide
- ✅ Optimisé SEO pour Marrakech
- ✅ Couleurs : Bleu royal, blanc, gris clair
- ✅ Texte en français avec touches arabes

## 🚀 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

3. **Build pour production**
```bash
npm run build
```

4. **Prévisualiser le build**
```bash
npm run preview
```

## 📁 Structure du projet

```
fix-dar-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation principale
│   │   ├── Hero.jsx            # Section hero avec slogan
│   │   ├── About.jsx           # À propos de Fix Dar
│   │   ├── Services.jsx        # Liste des services
│   │   ├── Gallery.jsx         # Galerie de projets
│   │   ├── Testimonials.jsx    # Témoignages clients
│   │   ├── Contact.jsx         # Formulaire de contact
│   │   ├── Footer.jsx          # Pied de page
│   │   └── WhatsAppButton.jsx  # Bouton WhatsApp flottant
│   ├── App.jsx                 # Composant principal
│   ├── main.jsx               # Point d'entrée
│   └── index.css              # Styles globaux
├── index.html                 # HTML principal avec SEO
├── package.json              # Dépendances
├── vite.config.js           # Configuration Vite
└── tailwind.config.js       # Configuration Tailwind

```

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **React Helmet Async** - Gestion SEO

## 🔧 Personnalisation

### Modifier les informations de contact

Dans les fichiers suivants, remplacez les informations par les vraies :

1. **Téléphone** : `+212600000000` → Votre numéro
2. **Email** : `contact@fixdar.ma` → Votre email
3. **Adresse** : Ajoutez l'adresse exacte

Fichiers à modifier :
- `src/components/Navbar.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`

### Modifier les couleurs

Dans `tailwind.config.js`, vous pouvez personnaliser les couleurs :

```javascript
colors: {
  primary: {
    DEFAULT: '#1E40AF',  // Bleu royal
    dark: '#1E3A8A',
    light: '#3B82F6',
  },
}
```

### Ajouter de vraies images

Remplacez les emojis dans `Gallery.jsx` par de vraies images :

```javascript
// Au lieu de :
image: '🏠'

// Utilisez :
image: '/images/projet1.jpg'
```

## 📱 SEO et Mots-clés

Le site est optimisé pour les mots-clés suivants :
- électricien Marrakech
- plâtrier Marrakech
- peintre Marrakech
- carreleur Marrakech
- réparation maison Marrakech
- plombier Marrakech
- rénovation Marrakech

Les balises meta sont configurées dans `index.html` et `App.jsx`.

## 🌐 Déploiement

### Option 1 : Netlify (Recommandé)
1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre repository GitHub
3. Netlify détectera automatiquement Vite
4. Le site sera déployé automatiquement

### Option 2 : Vercel
1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet
3. Déploiement automatique

### Option 3 : Hébergement traditionnel
```bash
npm run build
```
Uploadez le contenu du dossier `dist/` sur votre serveur.

## 📞 Support

Pour toute question ou personnalisation supplémentaire, n'hésitez pas à demander !

## 📄 Licence

Ce projet est créé pour Fix Dar. Tous droits réservés.

---

**Fix Dar** - فيكس دار  
*Votre maison, notre mission !*
