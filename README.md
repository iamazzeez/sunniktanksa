# Sunniktanksa - Website

A modern, aesthetic single-page website for Sunniktanksa, featuring premium water storage solutions.

## Domain
**https://sunniktanksa.com/**

## Features

### Homepage
- **Hero Section**: Dual-image carousel with smooth transitions and catchy taglines
- **Call-to-Action Buttons**: Download Company Profile & Contact Us
- **WhatsApp Integration**: Floating chat button (bottom right)

### Product Showcase
- **Three Product Cards**: GRP, HDG, and SS Tanks
- **Interactive Product Pages**: Click to view detailed specifications in modal
- **Downloadable Catalogs**: PDF download option for each product

### About Us Section
- Company information and values
- Statistics showcase
- Professional image gallery

### Sunnik Partnership
- Information about Sunnik manufacturer
- Partnership highlights
- Direct link to Sunnik website (https://sunnik.net/)

### Certifications
- Display of all product certifications
- ISO, NSF, CE, SASO, and other standards

### Contact Section
- Contact form with validation
- Company contact information
- Link to dealer partner: Aspire Solutions (https://www.aspiresolutions-co.com/)

### Footer
- Quick links navigation
- Social media links
- Copyright information

## Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: Interactive features, no framework dependencies
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins font family

## Directory Structure

```
sunniktanksa/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # Image assets
│   ├── logo.png        # Company logo (to be added)
│   ├── hero1.jpg       # Hero carousel image 1 (to be added)
│   ├── hero2.jpg       # Hero carousel image 2 (to be added)
│   ├── grp-tank.jpg    # GRP product image (to be added)
│   ├── hdg-tank.jpg    # HDG product image (to be added)
│   ├── ss-tank.jpg     # SS product image (to be added)
│   ├── about.jpg       # About section image (to be added)
│   └── sunnik-logo.png # Sunnik logo (to be added)
└── downloads/          # Downloadable files
    ├── company-profile.pdf  # Company brochure (to be added)
    ├── grp-catalog.pdf      # GRP product catalog (to be added)
    ├── hdg-catalog.pdf      # HDG product catalog (to be added)
    └── ss-catalog.pdf       # SS product catalog (to be added)
```

## Setup Instructions

1. **Add Images**: Place your images in the `images/` folder with the names specified above
2. **Add PDFs**: Place your PDF catalogs in the `downloads/` folder
3. **Update WhatsApp Number**: In `index.html`, find the WhatsApp button and replace `966XXXXXXXXX` with your actual number
4. **Update Contact Info**: Update phone number and address in the Contact section
5. **Add Logo**: Place your logo as `images/logo.png`
6. **Extract Brochure Details**: Review the brochure and update content as needed

## Customization

### Colors
The color scheme can be customized in `css/style.css` by modifying the CSS variables:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Content
All content can be edited directly in `index.html` and `js/main.js` (for product details).

### WhatsApp Number
Update in `index.html` line with the WhatsApp button:
```html
<a href="https://wa.me/966XXXXXXXXX?text=Hello! I'm interested in your water storage tanks." ...>
```

## Features to Update

### Completed Updates:
1. ✅ All content updated from brochure
2. ✅ Contact information added: +966 54 793 9470
3. ✅ Email updated: sales@sunniktanksa.com
4. ✅ Address added: Dammam 36332, P.O. Box 35850, KSA
5. ✅ WhatsApp number configured
6. ✅ Product details from brochure integrated
7. ✅ Certifications updated (UL, WRAS, NSF, NCREE, SPAN, TÜV SÜD PSB, MS SIRIM, Intertek)
8. ✅ Iconic Projects section added (Burj Khalifa, Tadawul Tower, Petronas, Sports City)

### Remaining Tasks:
1. 📸 Replace placeholder images with actual product photos
2. 📸 Add company logo
3. 📄 Add PDF catalogs for download
4. 🌐 Add social media links in footer

### Optional Enhancements:
- Add Google Analytics tracking
- Integrate contact form with email service (EmailJS, FormSpree, etc.)
- Add Google Maps location
- Add more product images in gallery
- Add customer testimonials section
- Add multilingual support (Arabic/English)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Lightweight design (no heavy frameworks)
- Optimized images recommended (use WebP format)
- Lazy loading for images (can be added)
- Fast loading times

## Deployment
This is a static website and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web hosting service

Simply upload all files to your hosting provider.

## Contact Information
**Phone:** +966 54 793 9470  
**Email:** sales@sunniktanksa.com  
**Address:** Dammam 36332, P.O. Box 35850, Kingdom of Saudi Arabia  
**Website:** https://sunniktanksa.com/

## License
© 2025 Sunniktanksa. All rights reserved.
