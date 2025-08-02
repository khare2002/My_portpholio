# Deployment Guide

## Quick Deployment to GitHub Pages

### Prerequisites
1. GitHub account
2. Git installed on your machine
3. Node.js and npm installed

### Step 1: Prepare Your Repository

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `portpholio`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Initialize Git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/khare2002/portpholio.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. **Go to your repository settings**
   - Navigate to your repository on GitHub
   - Click on "Settings" tab

2. **Configure GitHub Pages**
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

### Step 3: Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your React app
- Deploy to GitHub Pages
- Make it available at: `https://khare2002.github.io/portpholio`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy to the `gh-pages` branch
3. Make it available on GitHub Pages

### Troubleshooting

1. **Build fails**: Check for any console errors and fix them
2. **Deployment not working**: Ensure the repository is public
3. **Page not loading**: Wait a few minutes for GitHub Pages to update

### Custom Domain (Optional)

To use a custom domain:
1. Go to repository Settings > Pages
2. Add your domain in the "Custom domain" field
3. Update your DNS settings accordingly

## File Structure After Deployment

```
portpholio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   ├── App.js                  # Main app
│   ├── index.js               # Entry point
│   └── index.css              # Styles
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── README.md                  # Project documentation
└── DEPLOYMENT.md             # This file
```

## Performance Tips

1. **Optimize images**: Use WebP format and compress images
2. **Minimize bundle size**: Remove unused dependencies
3. **Enable caching**: GitHub Pages automatically handles this
4. **Use CDN**: Consider using a CDN for better performance

## Security

- Keep your repository public for GitHub Pages
- Don't commit sensitive information
- Use environment variables for API keys if needed

---

**Your portfolio will be live at**: https://khare2002.github.io/portpholio 