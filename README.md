# TechVision Pro - IT & Consultancy Services Website

A modern, fully responsive website for IT & Consultancy Services built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations throughout the site
- **Contact Form**: EmailJS integration for direct email sending
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Performance**: Optimized for fast loading and smooth performance

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Vite

## 📋 Services Offered

- Website Development (React, MERN, Custom)
- WordPress Development
- Digital Marketing
- Video Editing
- Content Writing
- SEO Optimization

## 🏗️ Project Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx      # Loading animation
│   ├── Navbar.jsx             # Navigation with dark mode toggle
│   ├── Hero.jsx               # Hero section with CTA
│   ├── About.jsx              # About us section
│   ├── Services.jsx           # Services showcase
│   ├── Portfolio.jsx          # Portfolio/projects grid
│   ├── Testimonials.jsx       # Client testimonials carousel
│   ├── Contact.jsx            # Contact form with EmailJS
│   └── Footer.jsx             # Footer with links and info
├── App.jsx                    # Main app component
├── App.css                    # Custom styles and Tailwind imports
├── index.css                  # Global styles
└── main.jsx                   # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (Optional)
   
   To enable the contact form functionality:
   
   a. Sign up at [EmailJS](https://www.emailjs.com/)
   b. Create an email service (Gmail, Outlook, etc.)
   c. Create an email template
   d. Update the Contact component with your credentials:
   
   ```jsx
   // In src/components/Contact.jsx
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',        // Replace with your service ID
     'YOUR_TEMPLATE_ID',       // Replace with your template ID
     formRef.current,
     'YOUR_PUBLIC_KEY'         // Replace with your public key
   )
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Colors
The website uses a blue-based color scheme. You can customize colors in the Tailwind classes throughout the components.

### Content
Update the content in each component to match your business:
- Company name and tagline in `Hero.jsx`
- Services in `Services.jsx`
- Portfolio projects in `Portfolio.jsx`
- Testimonials in `Testimonials.jsx`
- Contact information in `Contact.jsx` and `Footer.jsx`

### Images
Replace placeholder images with your own:
- Add images to the `public/` folder
- Update image paths in components
- Consider using Next.js Image component for production

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- CSS custom properties for theme switching
- Tailwind dark: variants
- Smooth transitions between themes
- Persistent theme preference

## 📧 EmailJS Setup

1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services
   - Add Gmail, Outlook, or other email provider
   - Note your Service ID

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template
   - Use variables: {{name}}, {{email}}, {{subject}}, {{message}}
   - Note your Template ID

4. **Get Public Key**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update Contact Component**
   - Replace placeholders in `Contact.jsx`
   - Test the form functionality

## 🚀 Building for Production

```bash
npm run build
```

The build files will be in the `dist/` folder.

## 📊 Performance Optimization

- Lazy loading of components
- Optimized images
- Minified CSS and JavaScript
- Efficient animations with Framer Motion
- Tailwind CSS purging in production

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions:
- Email: hello@techvisionpro.com
- Phone: +1 (555) 123-4567

## 🎯 Future Enhancements

- Blog system
- Portfolio filtering
- Advanced animations
- Multi-language support
- CMS integration
- Analytics dashboard
- Booking system
- Payment integration

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
