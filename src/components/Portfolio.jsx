import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Eye, X } from 'lucide-react'

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
    <section id="portfolio" className="py-24 bg-[#FAFAFA] dark:bg-[#09090B] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 text-xs font-semibold tracking-wider mb-4"
          >
            OUR PORTFOLIO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-4"
          >
            Handcrafted digital products <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              that drive growth.
            </span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-gray-200/50 dark:border-white/5 pb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-[#111827] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#111827] shadow-sm'
                  : 'text-[#6B7280] dark:text-gray-400 hover:text-[#111827] dark:hover:text-white'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="portfolio-card group flex flex-col justify-between"
            >

              {/* Premium CSS-based Browser Mockup */}
              <div className="relative rounded-[20px] overflow-hidden bg-gray-100 dark:bg-white/[0.02] border border-gray-200/40 dark:border-white/5 shadow-premium mb-6">

                {/* Browser Header Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200/40 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
                  <div className="flex space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 dark:text-gray-600">project-{project.id}.aurevia</span>
                </div>

                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-[#18181B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-10 h-10 rounded-full bg-white dark:bg-[#18181B] text-[#111827] dark:text-[#FAFAFA] border border-gray-200 dark:border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm"
                      aria-label="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white dark:bg-[#18181B] text-[#111827] dark:text-[#FAFAFA] border border-gray-200 dark:border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm"
                        aria-label="View Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA]">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold tracking-wider text-[#2563EB] dark:text-blue-400 hover:underline"
                  >
                    CASE STUDY
                  </button>
                </div>

                <p className="text-sm font-light leading-relaxed text-[#6B7280] dark:text-gray-400 mb-4 max-w-xl">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 text-xs font-mono rounded-full border border-gray-200/20 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Case Study Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white dark:bg-[#18181B] rounded-[20px] max-w-2xl w-full border border-gray-200/50 dark:border-white/10 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/40 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
                  <h3 className="text-lg font-bold text-[#111827] dark:text-[#FAFAFA]">
                    {selectedProject.title} Case Study
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 text-[#6B7280] dark:text-gray-400 hover:text-[#111827] dark:hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scroll Content */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                  <div className="rounded-[14px] overflow-hidden border border-gray-200/40 dark:border-white/5 mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>

                  <p className="text-sm font-light leading-relaxed text-[#6B7280] dark:text-gray-400 mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="font-semibold text-[#111827] dark:text-[#FAFAFA] text-xs uppercase tracking-widest mb-3">Technologies Leveraged</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 text-xs font-mono rounded-full border border-gray-200/30 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="flex gap-3 border-t border-gray-200/40 dark:border-white/5 pt-6">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#111827] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#111827] px-4 py-3 rounded-[14px] text-sm font-medium text-center hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Platform</span>
                      </a>
                    )}
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
