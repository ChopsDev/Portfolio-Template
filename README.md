# Portfolio Template - Two Panel Layout

A modern, responsive portfolio website template featuring an elegant two-panel design with smooth animations and collapsible content sections.

## 🌟 Features

- **Two-Panel Layout**: Clean, professional design with expandable left and right panels
- **Smooth Animations**: Fluid transitions and hover effects for enhanced user experience
- **Collapsible Content**: Organized project sections that expand/collapse on click
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Customizable**: Easy to modify colors, fonts, and layout through CSS variables
- **Accessible**: Built with accessibility best practices in mind
- **Modern CSS**: Uses CSS Grid, Flexbox, and custom properties for maintainable code

## 🚀 Quick Start

1. **Download the template** and extract it to your desired location
2. **Replace placeholder content** in `index.html` with your own information
3. **Add your images** to the `images/` folder
4. **Customize colors and fonts** in `css/base.css`
5. **Open `index.html`** in your browser to view your portfolio

## 📁 File Structure

```
portfolio-template/
├── index.html              # Main HTML file
├── script.js              # JavaScript functionality
├── README.md              # This documentation
├── css/
│   ├── base.css           # Core styles and variables
│   ├── panels.css         # Panel layout and animations
│   ├── collapsible.css    # Expandable content sections
│   └── panel-dividers.css # Section headers and dropdowns
├── images/
│   ├── placeholder-logo.png     # Replace with your project logos
│   ├── placeholder-preview.png  # Replace with project screenshots
│   └── placeholder-image.png    # Replace with other images
└── examples/
    └── (example configurations will be added here)
```

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `css/base.css`:

```css
:root {
  /* Panel Colors */
  --left-panel-bg: #333;
  --right-panel-bg: #555;
  --expanded-panel-bg: #2a2a2a;
  
  /* Text and Accent Colors */
  --text-color: white;
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Changing Fonts

1. **Add Google Fonts** to the `<head>` section in `index.html`
2. **Update font families** in `css/base.css` and `css/panels.css`

Example:
```css
body {
  font-family: 'Your-Font-Name', sans-serif;
}

.panel h1 {
  font-family: "Your-Header-Font", serif;
}
```

### Adjusting Panel Width

Change the panel width in `css/base.css`:

```css
:root {
  --panel-width: 200px; /* Default is 175px */
}
```

### Modifying Animations

Adjust animation timing in `css/base.css`:

```css
:root {
  --transition-duration: 0.5s; /* Default is 0.3s */
  --transition-timing: ease-in-out; /* Custom timing function */
}
```

## 📝 Content Structure

### Adding New Projects

Each project follows this HTML structure:

```html
<div class="project-item">
  <div class="project-header collapsible button-like">
    <img src="images/your-logo.png" alt="Project Logo">
    <div class="button-content">
      <h2>Your Project Title</h2>
      <h3>2024 - Present</h3>
    </div>
  </div>
  <div class="content">
    <div class="flex-container">
      <div>
        <p>Your project description goes here...</p>
        <br>
        <div class="project-links">
          <a href="#" target="_blank">Live Demo</a> | 
          <a href="#" target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Adding New Sections

To add a new section (like "Education" or "Skills"):

```html
<div class="panel-divider dropdown-header" data-target="your-section-id">
  <h2><span>Your Section Name</span><span class="dropdown-arrow">▼</span></h2>
</div>
<div class="dropdown-content" id="your-section-id">
  <!-- Your content here -->
</div>
```

### Panel Titles

Change the panel titles by editing the `<h1>` tags and updating the JavaScript:

```html
<!-- In HTML -->
<h1>YOUR LEFT TITLE</h1>
<h1>YOUR RIGHT TITLE</h1>
```

```javascript
// In script.js
rightHeading.textContent = "YOUR RIGHT TITLE"
leftHeading.textContent = "YOUR LEFT TITLE"
```

## 🖼️ Image Guidelines

### Recommended Image Sizes

- **Project Logos**: 120x120px (square, PNG with transparency)
- **Project Screenshots**: 800x600px or 16:9 aspect ratio
- **General Images**: Optimize for web (under 500KB each)

### Image Formats

- **Logos**: PNG (supports transparency)
- **Screenshots**: JPG or PNG
- **Icons**: SVG (scalable) or PNG

## 📱 Responsive Behavior

The template automatically adapts to different screen sizes:

- **Desktop (>768px)**: Full two-panel layout with hover effects
- **Tablet (768px)**: Adjusted spacing and font sizes
- **Mobile (<768px)**: Stacked layout with touch-friendly interactions

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features Used**: CSS Grid, Flexbox, Custom Properties, Transforms
- **JavaScript**: ES6+ features (const, let, arrow functions)

## 🎯 SEO and Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Add Alt Text**: Include descriptive alt attributes for all images
3. **Meta Tags**: Add relevant meta description and keywords
4. **Page Title**: Update the `<title>` tag with your name/brand

Example meta tags to add:

```html
<meta name="description" content="Your Name - Portfolio showcasing web development projects">
<meta name="keywords" content="web developer, portfolio, projects, your skills">
<meta name="author" content="Your Name">
```

## 🚨 Troubleshooting

### Common Issues

**Panels not expanding:**
- Check that JavaScript is enabled
- Ensure all CSS files are properly linked
- Verify file paths are correct

**Images not displaying:**
- Check image file paths in HTML
- Ensure images are in the correct folder
- Verify image file extensions match HTML references

**Animations not working:**
- Confirm CSS files are loading properly
- Check browser developer tools for errors
- Ensure CSS custom properties are supported

### Browser Developer Tools

Use F12 to open developer tools and check:
- **Console**: For JavaScript errors
- **Network**: For failed file loads
- **Elements**: To inspect CSS styles

## 🤝 Contributing

Feel free to submit issues and enhancement requests! This template is designed to be:
- Easy to understand and modify
- Well-documented and commented
- Accessible and performant

## 📄 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🔗 Credits

- **Original Design**: Based on a portfolio website concept
- **Fonts**: Google Fonts (Archivo Black, Lexend)
- **Icons**: Unicode arrows and symbols

---

## 📞 Need Help?

If you need assistance customizing this template:

1. Check this README for common solutions
2. Look at the CSS comments for guidance
3. Use browser developer tools to debug issues
4. Consider the examples in the `examples/` folder

**Happy coding! 🎉**
