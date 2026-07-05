import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, TrendingUp, Cpu, ShieldCheck } from 'lucide-react'

const Hero = () => {
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

  // Minimal SVG placeholder client logos
  const clientLogos = [
    { name: "Acme Corp", icon: <svg className="h-6 w-auto text-gray-400 dark:text-gray-600 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 5h10l5 20H20l-5-20zm30 0h10v20H45V5zm30 0h15v5H85v3h8v5h-8v7h5v20H75V5zm30 0h10l3 7 3-7h10v20h-8V12l-5 8-5-8v13h-8V5z"/></svg> },
    { name: "Globex", icon: <svg className="h-6 w-auto text-gray-400 dark:text-gray-600 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><path d="M10 15c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm25-10h8v20h-8V5zm25 0h12v5h-12v3h10v5h-10v7h12v20H60V5zm30 0h15v5H95v15h-5V5z"/></svg> },
    { name: "Initech", icon: <svg className="h-6 w-auto text-gray-400 dark:text-gray-600 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><path d="M5 25V5h8l6 10 6-10h8v20h-7V12l-7 10-7-10v13H5zm45-20h15v5H55v15h-5V5zm25 0h8v20h-8V5zm25 0h10l5 20H110l-5-20z"/></svg> },
    { name: "Umbrella", icon: <svg className="h-6 w-auto text-gray-400 dark:text-gray-600 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><path d="M20 5C9 5 0 14 0 25h40c0-11-9-20-20-20zm25 0h8v20h-8V5zm25 0h12v5H75v3h10v5H75v7h12v20H70V5zm30 0h8v15h8v5h-16V5z"/></svg> },
    { name: "Hooli", icon: <svg className="h-6 w-auto text-gray-400 dark:text-gray-600 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><path d="M10 5h8v7h12V5h8v20h-8v-8H18v8h-8V5zm45 0c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15zm35 0c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15zm25 0h8v15h8v5H115V5z"/></svg> }
  ]

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#FAFAFA] dark:bg-[#09090B]">
      
      {/* Decorative Blur Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#2563EB]/8 to-[#7C3AED]/8 blur-[100px] animate-blob-1" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#06B6D4]/6 to-[#3B82F6]/6 blur-[90px] animate-blob-2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-xs font-semibold tracking-wider text-gray-600 dark:text-gray-300 mb-6 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
              PREMIUM DIGITAL EXPERIENCE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] leading-[1.08] mb-6"
            >
              Transforming vision into <br />
              <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Exceptional digital
              </span> <br className="hidden sm:inline" />
              experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#6B7280] dark:text-gray-400 font-light leading-relaxed max-w-xl mb-8"
            >
              We are Aurevia—a high-end technology agency partnering with forward-thinking businesses to craft modern software, AI platforms, and visual brands.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#111827] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#111827] px-7 py-3.5 rounded-[14px] font-medium shadow-premium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-transparent dark:border-white/10"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection('portfolio')}
                className="border border-gray-300 dark:border-white/10 text-[#111827] dark:text-[#FAFAFA] px-7 py-3.5 rounded-[14px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current opacity-70" />
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Micro Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-[#6B7280] dark:text-gray-400 border-t border-gray-200/50 dark:border-white/5 pt-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Verified performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>100% Client Trust</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Media (Floating Mockups / Glass Cards) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] h-[400px] md:h-[450px]"
            >
              {/* Primary mockup element: Minimalist dashboard wrapper */}
              <div className="absolute top-10 left-0 right-0 h-[280px] bg-white dark:bg-[#18181B] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-200/40 dark:border-white/10 p-5 z-10 flex flex-col justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-white/5">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-gray-400">aurevia.platform</span>
                </div>
                
                {/* Simulated Chart/Analytics */}
                <div className="flex-grow flex flex-col justify-end gap-2 pt-4">
                  <div className="flex justify-between items-end h-[100px] gap-2">
                    {[30, 45, 35, 60, 50, 75, 90, 80].map((h, i) => (
                      <div key={i} className="flex-grow bg-gray-100 dark:bg-white/5 rounded-t-[4px] relative overflow-hidden h-full">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: "easeOut" }}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2563EB] to-[#7C3AED] rounded-t-[4px]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-gray-400 pt-1">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>
              </div>

              {/* Float Card 1: Active Engagements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[-10px] bg-white/80 dark:bg-[#18181B]/80 backdrop-blur-md rounded-[16px] border border-gray-200/50 dark:border-white/10 p-4 shadow-lg z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">conversion</p>
                  <p className="text-base font-bold text-[#111827] dark:text-[#FAFAFA]">+142.8%</p>
                </div>
              </motion.div>

              {/* Float Card 2: AI Automation Status */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-[-15px] bg-white/80 dark:bg-[#18181B]/80 backdrop-blur-md rounded-[16px] border border-gray-200/50 dark:border-white/10 p-4 shadow-lg z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-white/5 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">AI Integration</p>
                  <p className="text-base font-bold text-[#111827] dark:text-[#FAFAFA]">Active & Optimized</p>
                </div>
              </motion.div>

              {/* Float Card 3: Shield Security */}
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 right-[-20px] bg-white/80 dark:bg-[#18181B]/80 backdrop-blur-md rounded-[16px] border border-gray-200/50 dark:border-white/10 p-3 shadow-lg z-20 flex items-center justify-center"
              >
                <ShieldCheck className="w-5 h-5 text-[#06B6D4] mr-2" />
                <span className="text-xs font-semibold text-[#111827] dark:text-[#FAFAFA]">Enterprise Grade</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Endless Client Logos Marquee */}
      <div className="w-full border-t border-b border-gray-200/50 dark:border-white/5 py-8 mt-16 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] dark:from-[#09090B] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] dark:from-[#09090B] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-[200%] animate-ticker">
            {/* First Set of Logos */}
            <div className="flex justify-around items-center w-1/2 gap-8">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center opacity-40 dark:opacity-30 hover:opacity-100 dark:hover:opacity-100 transition-opacity duration-300">
                  {logo.icon}
                </div>
              ))}
            </div>
            {/* Repeated Set of Logos for Endless Marquee */}
            <div className="flex justify-around items-center w-1/2 gap-8">
              {clientLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex justify-center items-center opacity-40 dark:opacity-30 hover:opacity-100 dark:hover:opacity-100 transition-opacity duration-300">
                  {logo.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
