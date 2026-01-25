# Pre-Production Deployment Checklist

## Completed ✅
- [x] Updated sitemap dates to 2026
- [x] Created og-image.png for social media
- [x] Added _redirects file for Netlify
- [x] Added .htaccess for Apache servers
- [x] Added security headers (CSP, X-Frame-Options, etc.)
- [x] Added _headers file for Netlify
- [x] Added Google Analytics placeholder
- [x] Checked for sensitive data (none found)
- [x] EmailJS configured in contact form

## Required Before Deployment ⚠️

### 1. EmailJS Configuration
- Update `src/app/services/chat.service.ts`:
  - Replace `service_your_id` with your EmailJS service ID
  - Replace `template_your_id` with your EmailJS template ID
  - Replace `your_public_key` with your EmailJS public key
  - Replace `your-email@example.com` with monamane.lebohang45@gmail.com

### 2. Contact Form
- Update `src/app/components/pages/contact/contact.component.ts` with EmailJS credentials

### 3. Resume
- Verify `public/lebo.pdf` is current and up-to-date

### 4. Testing
- [ ] Test all pages on mobile
- [ ] Test contact form submissions
- [ ] Test WhatsApp link: +266 6327 4567
- [ ] Test phone link: +266 5918 1664
- [ ] Verify all images load
- [ ] Test typing animation on home page
- [ ] Test project image modals

### 5. Build & Deploy
```bash
# Build for production
ng build --configuration production

# Test build locally
cd dist/bytewise-solutions
npx http-server -p 8080

# Deploy to hosting (Netlify/Vercel/Firebase)
```

### 6. Post-Deployment
- [ ] Test live site on multiple devices
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test all external links

## Notes
- OG image currently uses profile photo - create custom 1200x630px image for better social sharing
- All contact numbers verified: Call +266 5918 1664, WhatsApp +266 6327 4567
