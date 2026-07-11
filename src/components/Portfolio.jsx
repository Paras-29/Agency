import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Eye, X, Github, Globe, Sparkles, ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Dev' },
    { id: 'video', name: 'Video Production' }
  ]

  const projects = [
    {
      id: 1,
      title: "Hostro Platform",
      category: "web",
      image: "./images/hos.png",
      description: "Hostro is a comprehensive PG ecosystem platform designed to simplify property administration, catering to students, property owners, and vendor groups.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://hostro-static.vercel.app/",
      githubUrl: "https://github.com/Paras-29/hostro_static"
    },
    {
      id: 2,
      title: "Luxora Real Estate",
      category: "web",
      image: "./images/real.png",
      description: "A premium real estate marketplace linking buyers, sellers, and agencies. Features smart filtering, custom maps, and immersive high-fidelity UI listings.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://real-estate-ten-peach-42.vercel.app/",
      githubUrl: "https://github.com/Paras-29/hostro_static"
    },
    {
      id: 3,
      title: "Aura Colours selling website",
      category: "web",
      image: "./images/ec.png",
      description: "A highly immersive and modern product selling interface built to showcase architectural product lines. Leverages smooth scrolling and clean layouts.",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://arvind-and-com.vercel.app/",
      githubUrl: "https://github.com/Paras-29/Arvind_and_com"
    },
    {
      id: 4,
      title: "Venture AI Tours",
      category: "web",
      image: "./images/tt.png",
      description: "A smart tours and travel planning platform. Integrates AI-driven route calculators, interactive itineraries, and a highly responsive travel dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://adventure-nine-blond.vercel.app/",
      githubUrl: "https://github.com/Paras-29/adventure"
    },
    // {
    //   id: 5,
    //   title: "Space Chimes Edits",
    //   category: "video",
    //   image: "./images/sc.jpeg",
    //   description: "A dynamic, high-concept brand advertisement edit focusing on clean spatial pacing, color timing, and premium audio syncing.",
    //   technologies: ["Adobe Premiere", "After Effects", "Sound Design"],
    //   liveUrl: "https://justchetan.myportfolio.com/rapper-edits",
    // },
    // {
    //   id: 6,
    //   title: "Artistic Edits",
    //   category: "video",
    //   image: "./images/art.jpeg",
    //   description: "Creative promotional video edits crafted for digital creators, combining custom typography masks, vector overlays, and cinematic pacing.",
    //   technologies: ["Adobe Premiere", "After Effects", "Motion Design"],
    //   liveUrl: "https://justchetan.myportfolio.com/artists-edits",
    // },
    // {
    //   id: 7,
    //   title: "Cinematic Showcases",
    //   category: "video",
    //   image: "./images/cin.jpg",
    //   description: "High-end product showcase editing utilizing custom sound design, color grading, and elegant 3D camera tracking integrations.",
    //   technologies: ["Adobe Premiere", "DaVinci Resolve", "3D Tracking"],
    //   liveUrl: "https://justchetan.myportfolio.com/cinematic",
    // },
    // {
    //   id: 8,
    //   title: "Horizon Travel Edits",
    //   category: "video",
    //   image: "./images/tra.jpg",
    //   description: "High-concept travel storytelling video production featuring fluid speed ramping, localized color corrections, and custom audio layers.",
    //   technologies: ["Adobe Premiere", "After Effects", "Speed Ramping"],
    //   liveUrl: "https://justchetan.myportfolio.com/travel-projects",
    // }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-28 bg-slate-50 dark:bg-[#070913] relative overflow-hidden transition-colors duration-500">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-blue-500/5 dark:bg-blue-600/[0.02] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-purple-500/5 dark:bg-purple-600/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 dark:border-blue-400/10 bg-blue-500/10 dark:bg-blue-950/20 text-[#2563EB] dark:text-blue-400 text-xs font-semibold tracking-wider mb-5 backdrop-blur-md animate-fade-in"
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>OUR PORTFOLIO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-slate-900 dark:text-[#FAFAFA] mb-6 leading-none"
          >
            Handcrafted digital products <br />
            <span className="font-semibold bg-gradient-to-r from-[#2563EB] via-indigo-500 to-[#7C3AED] bg-clip-text text-transparent">
              that drive growth.
            </span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex items-center mb-16 border-b border-slate-200/60 dark:border-white/5 pb-8 overflow-x-auto scrollbar-none">
          <div className="flex bg-slate-200/50 dark:bg-white/[0.02] border border-slate-300/40 dark:border-white/[0.05] p-1.5 rounded-full backdrop-blur-md gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'text-slate-900 dark:text-slate-900 z-10'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {selectedCategory === category.id && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-white dark:bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group relative flex flex-col justify-between bg-white/40 dark:bg-[#111625]/20 backdrop-blur-md rounded-[22px] border border-slate-200/50 dark:border-white/[0.04] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] dark:hover:shadow-[0_20px_50px_rgba(37,99,235,0.05)] hover:border-blue-500/25 dark:hover:border-blue-400/15 transition-all duration-500"
              >
                <div>
                  {/* Premium Browser Mockup */}
                  <div className="relative rounded-[16px] overflow-hidden bg-slate-100 dark:bg-[#0B0F19] border border-slate-200/60 dark:border-white/[0.05] shadow-inner mb-4">
                    {/* Browser Header Bar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200/50 dark:border-white/[0.03] bg-slate-50/50 dark:bg-white/[0.01]">
                      <div className="flex space-x-1">
                        <span className="w-2 h-2 rounded-full bg-red-400/85 dark:bg-red-500/30" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/85 dark:bg-yellow-500/30" />
                        <span className="w-2 h-2 rounded-full bg-green-400/85 dark:bg-green-500/30" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-gray-500 select-none">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.aurevia
                      </span>
                    </div>

                    {/* Project Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-200 dark:bg-[#18181B]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(project)}
                          className="w-10 h-10 rounded-full bg-white dark:bg-[#18181B] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-[#202024] transition-colors"
                          aria-label="View Details"
                        >
                          <Eye className="w-4.5 h-4.5" />
                        </motion.button>
                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white dark:bg-[#18181B] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-lg hover:bg-slate-50 dark:hover:bg-[#202024] transition-colors"
                            aria-label="View Live Site"
                          >
                            <ExternalLink className="w-4.5 h-4.5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="px-1.5">
                    <span className="text-[9px] font-bold tracking-widest text-[#2563EB] dark:text-blue-400 uppercase mb-1.5 block font-mono">
                      {project.category === 'web' ? 'Web Development' : 'Video Production'}
                    </span>
                    
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-xs font-light leading-relaxed text-slate-650 dark:text-slate-400 mb-4 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs and action */}
                <div className="px-1.5 border-t border-slate-200/50 dark:border-white/[0.03] pt-4 mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-slate-200/60 dark:bg-white/[0.03] text-slate-800 dark:text-gray-400 text-[9px] font-mono rounded-full border border-slate-300/30 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-slate-400 text-[9px] font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider text-[#2563EB] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/btn cursor-pointer"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>



        {/* Case Study Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/60 dark:bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-[#0B0F19] rounded-[28px] max-w-3xl w-full border border-slate-200/80 dark:border-white/[0.08] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-[#111625]/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {selectedProject.title} Case Study
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scroll Content */}
                <div className="p-6 overflow-y-auto max-h-[75vh] grid grid-cols-1 md:grid-cols-12 gap-8 scrollbar-thin">
                  {/* Left Column (Image & Main details) */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div className="rounded-[18px] overflow-hidden border border-slate-200/60 dark:border-white/5 shadow-md">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2.5">
                        Project Overview
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Specifications & Actions) */}
                  <div className="md:col-span-5 flex flex-col justify-between gap-8 border-t md:border-t-0 md:border-l border-slate-200/50 dark:border-white/5 pt-6 md:pt-0 md:pl-8">
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                          Scope & Category
                        </h4>
                        <span className="px-3 py-1.5 bg-blue-500/10 dark:bg-blue-950/20 text-[#2563EB] dark:text-blue-400 text-xs font-medium rounded-full border border-blue-500/20 dark:border-blue-400/10">
                          {selectedProject.category === 'web' ? 'Web Development' : 'Video Production'}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                          Technologies Leveraged
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-slate-100 dark:bg-white/[0.03] text-slate-800 dark:text-gray-300 text-xs font-mono rounded-md border border-slate-200 dark:border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-[#2563EB] dark:bg-blue-600 text-white px-4 py-3 rounded-[16px] text-sm font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/15"
                        >
                          <Globe className="w-4 h-4" />
                          <span>View Live Platform</span>
                        </a>
                      )}
                      
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-[16px] text-sm font-semibold hover:bg-slate-850 dark:hover:bg-slate-100 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Github Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Portfolio
