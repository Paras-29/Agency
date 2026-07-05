import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Offset for sticky navbar
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#FAFAFA]/75 dark:bg-[#09090B]/75 backdrop-blur-md border-b border-gray-200/40 dark:border-white/5 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Text-Only Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center focus:outline-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl sm:text-2xl font-light tracking-[0.2em] text-[#111827] dark:text-[#FAFAFA]">
              AUREVIA
            </span>
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium tracking-wide text-[#6B7280] dark:text-[#FAFAFA]/70 hover:text-[#111827] dark:hover:text-[#FAFAFA] transition-colors duration-200 relative py-1"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Action Buttons: Toggle + CTA */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-gray-200/60 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-[#6B7280] dark:text-[#FAFAFA]/70 hover:text-[#111827] dark:hover:text-[#FAFAFA] transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </motion.button>

            {/* Primary CTA */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden bg-[#111827] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#111827] px-5 py-2.5 rounded-[14px] text-sm font-medium transition-all duration-300 shadow-premium hover:shadow-lg flex items-center gap-2 group border border-transparent dark:border-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Let's Build Together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>

          {/* Mobile menu toggle + Theme switch on mobile */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200/60 dark:border-white/10 text-[#6B7280] dark:text-[#FAFAFA]/70"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </motion.button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#6B7280] dark:text-[#FAFAFA]/70 hover:text-[#111827] dark:hover:text-[#FAFAFA] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FAFAFA] dark:bg-[#09090B] border-b border-gray-200/40 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2.5 text-base font-medium text-[#6B7280] dark:text-[#FAFAFA]/70 hover:text-[#111827] dark:hover:text-[#FAFAFA] transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-200/40 dark:border-white/5">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#111827] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#111827] py-3.5 rounded-[14px] text-center font-medium shadow-premium flex items-center justify-center gap-2"
                >
                  <span>Let's Build Together</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
