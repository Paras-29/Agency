import { motion } from 'framer-motion'
import { ArrowUp, Instagram, Linkedin, Send } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ]

  const servicesLinks = [
    { name: 'Website Development', id: 'services' },
    { name: 'Web Applications', id: 'services' },
    { name: 'AI Automation', id: 'services' },
    { name: 'Digital Marketing', id: 'services' },
    { name: 'SEO Optimization', id: 'services' },
    { name: 'Brand Identity', id: 'services' }
  ]

  return (
    <footer className="bg-[#CBD5E1] dark:bg-[#09090B] text-[#111827] dark:text-[#FAFAFA] border-t border-gray-200/60 dark:border-white/5 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[380px] h-[380px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Description (span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-light tracking-[0.2em] text-[#111827] dark:text-white mb-4 block">
                AUREVIA
              </span>
              <p className="text-sm font-light text-slate-800 dark:text-gray-400 leading-relaxed max-w-sm mb-6">
                A premium digital technology agency. We design and build modern software, AI platforms, and visual brands that drive digital authority.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-300/70 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 hover:bg-slate-350 dark:hover:bg-white/10 hover:border-gray-400/50 dark:hover:border-white/20 transition-all flex items-center justify-center text-slate-900 dark:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-300/70 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 hover:bg-slate-350 dark:hover:bg-white/10 hover:border-gray-400/50 dark:hover:border-white/20 transition-all flex items-center justify-center text-slate-900 dark:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (span-2) */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-slate-900 dark:text-gray-500 font-semibold mb-6">Agency</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm font-light text-slate-800 dark:text-gray-400 hover:text-[#111827] dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (span-2) */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-slate-900 dark:text-gray-500 font-semibold mb-6">Capabilities</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm font-light text-slate-800 dark:text-gray-400 hover:text-[#111827] dark:hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Input (span-3) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-slate-900 dark:text-gray-500 font-semibold mb-6">Newsletter</h4>
            <p className="text-xs text-slate-800 dark:text-gray-400 font-light mb-4">
              Receive high-fidelity summaries and articles on technology updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-slate-100/90 dark:bg-white/5 border border-gray-300/60 dark:border-white/10 rounded-[14px] px-4 py-3 text-xs text-slate-950 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:outline-none focus:border-[#2563EB] dark:focus:border-blue-400 transition-colors pr-10"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-8 rounded-[10px] bg-[#111827] dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="border-t border-gray-200/60 dark:border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-slate-800 dark:text-gray-500 text-center sm:text-left">
            &copy; 2026 Aurevia. All rights reserved. Handcrafted premium design.
          </p>

          {/* Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-300/70 dark:bg-white/5 border border-slate-400 dark:border-white/10 hover:bg-slate-350 dark:hover:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
