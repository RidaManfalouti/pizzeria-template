# Pizzeria Template

Un template moderne d'application web de pizzeria développé avec React et Vite. Interface responsive avec design de cartes élégant, parfait pour créer rapidement un site de restaurant ou pizzeria.

## 🍕 Aperçu

Ce template offre une interface utilisateur moderne et responsive pour une pizzeria, avec un design de cartes élégant pour afficher le menu des pizzas.

### Fonctionnalités

- ✨ **Design moderne** : Interface élégante avec cartes stylisées
- 📱 **Responsive** : S'adapte parfaitement à tous les écrans (desktop, tablette, mobile)
- 🎨 **Animations fluides** : Effets de hover et animations d'entrée
- ⚡ **Performance optimisée** : Construit avec Vite pour un développement rapide
- 🎯 **Grid Layout** : Affichage en grille responsive (4 colonnes sur desktop)

## 🚀 Technologies utilisées

- **React 18** - Library JavaScript pour l'interface utilisateur
- **Vite** - Outil de build moderne et rapide
- **CSS3** - Styling moderne avec Grid et Flexbox
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique du code

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/pizzeria-template.git
   cd pizzeria-template
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Génère la version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier

## 📁 Structure du projet

```
pizzeria-template/
├── public/
│   ├── style.css          # Fichier CSS principal
│   └── pizzas/
│       └── image.png      # Images des pizzas
├── src/
│   ├── App.jsx           # Composant principal
│   └── Pizza.jsx         # Composant carte pizza
├── index.html            # Point d'entrée HTML
├── package.json          # Configuration npm
├── vite.config.js        # Configuration Vite
└── README.md
```

## 🎨 Personnalisation

### Modifier les pizzas

Éditez le fichier `src/App.jsx` pour ajouter/modifier les pizzas :

```jsx
<Pizza
  name="Nom de la pizza"
  description="Description de la pizza"
  image="/pizzas/votre-image.jpg"
/>
```

### Modifier le style

- **CSS principal** : `public/style.css`
- **Couleurs principales** : Variable `#d32f2f` (rouge pizzeria)
- **Layout responsive** : Grid CSS avec breakpoints

### Ajouter des images

Placez vos images de pizzas dans le dossier `public/pizzas/` et référencez-les avec `/pizzas/nom-image.jpg`

## 📱 Design Responsive

- **Desktop (>1024px)** : 4 colonnes
- **Tablette (768-1024px)** : 3 colonnes  
- **Mobile (480-768px)** : 2 colonnes
- **Petit mobile (<480px)** : 1 colonne

## 🚀 Déploiement

### Netlify
```bash
npm run build
# Uploadez le dossier 'dist' sur Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configurez GitHub Pages pour servir depuis le dossier 'dist'
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence ISC. Voir le fichier `package.json` pour plus de détails.

## 👨‍💻 Auteur

**RIDA MANFALOUTI**

---

⭐ N'hésitez pas à donner une étoile si ce template vous a été utile !
