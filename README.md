# Yash Khare - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing Yash Khare's expertise in cybersecurity, IoT security, and blockchain technology.

## 🛡️ About

This portfolio represents Yash Khare, a dedicated B.Tech student specializing in cybersecurity with expertise in network security, ethical hacking, and digital forensics. The website features a cybersecurity-themed design with modern animations and interactive elements.

## ✨ Features

- **Modern Design**: Cybersecurity-themed dark interface with blue accents
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, scroll animations, and dynamic content
- **Matrix Rain Effect**: Custom background animation for cybersecurity theme
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library
- **CSS3** - Custom styling with CSS variables and modern features
- **HTML5** - Semantic markup and accessibility features

## 📋 Sections

1. **Hero Section** - Introduction with animated text and contact information
2. **About** - Personal background, education, and career objectives
3. **Skills** - Technical skills, cybersecurity tools, and soft skills
4. **Projects** - Featured projects with filtering capabilities
5. **Experience** - Certifications, leadership roles, and achievements
6. **Contact** - Contact form and social media links

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/khare2002/portpholio.git
   cd portpholio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The portfolio is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment is handled by GitHub Actions.

**Live Site**: https://khare2002.github.io/portpholio

### Manual Deployment

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js           # Hero section with intro
│   ├── About.js          # About section
│   ├── Skills.js         # Skills showcase
│   ├── Projects.js       # Projects portfolio
│   ├── Experience.js     # Experience & certifications
│   ├── Contact.js        # Contact form
│   ├── Footer.js         # Footer with social links
│   └── MatrixRain.js     # Background animation
├── App.js                # Main app component
├── index.js              # React entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `src/index.css`:

```css
:root {
  --primary: #00d4ff;        /* Main blue color */
  --primary-dark: #0099cc;   /* Darker blue */
  --accent: #ff6b6b;         /* Accent red color */
  --background: #0a0a0a;     /* Dark background */
  --surface: #1a1a1a;        /* Card backgrounds */
  --text-primary: #ffffff;   /* Primary text */
  --text-secondary: #b0b0b0; /* Secondary text */
}
```

### Content
Update the content in each component file to personalize:
- Personal information in `Hero.js`
- Skills and experience in respective components
- Project details in `Projects.js`
- Contact information in `Contact.js`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Performance Optimizations

- Lazy loading of components
- Optimized images and assets
- Efficient CSS with minimal reflows
- Smooth scrolling and animations
- Reduced bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: YashKhare2002@gmail.com
- **LinkedIn**: [linkedin.com/in/yash-khare-69766a249](https://linkedin.com/in/yash-khare-69766a249)
- **Phone**: +91 9131504873

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ for the cybersecurity community** 