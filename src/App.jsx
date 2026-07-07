import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'dark'
})

  useEffect(() => {
    // Simulate loading time for premium agency experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  // Sync theme changes with document root
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Ensure links with hash work smoothly
    const handleHashLink = (e) => {
      const target = e.target.closest('a')
      if (!target) return
      const url = new URL(target.href, window.location.href)
      if (url.pathname === window.location.pathname && url.hash) {
        e.preventDefault()
        const el = document.querySelector(url.hash)
        if (el) {
          lenis.scrollTo(el, { offset: -80 })
        }
      }
    }

    document.addEventListener('click', handleHashLink)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleHashLink)
    }
  }, [isLoading])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen transition-colors duration-300 bg-[#E2E8F0] dark:bg-[#09090B] text-[#111827] dark:text-[#FAFAFA]"
        >
          <CustomCursor />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <About />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
