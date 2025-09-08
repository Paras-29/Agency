import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, X } from 'lucide-react'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'video', name: 'Video Editing' }
  ]

  const projects = [
    {
      id: 1,
      title: "Hostro Website",
      category: "web",
      image: "./images/hos.png",
      description: "Hostro is a complete PG ecosystem platform designed for students, PG owners, vendors, CAs, admins, and super admins. ",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS","Framer Motion"],
      liveUrl: "https://hostro-static.vercel.app/",
      githubUrl: "https://github.com/Paras-29/hostro_static"
    },
    {
      id: 2,
      title: "Colours Product Website",
      category: "web",
      image: "./images/ec.png",
      description: "A modern Colours Product Selling platform built with React and ThreeJS, featuring user friendly interfaces to showcase the company colours and other product.",
      technologies: ["React", "ThreeJS", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://arvind-and-com.vercel.app/",
      githubUrl: "https://github.com/Paras-29/Arvind_and_com"
    },
    {
      id: 3,
      title: "Tours & Travels Website",
      category: "web",
      image: "./images/tt.png",
      description: "A professional Tours and Travles website built with Mern Stack with feature of AI trip planning with responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://adventure-nine-blond.vercel.app/",
      githubUrl: "https://github.com/Paras-29/adventure"
    },
   
    {
      id: 4,
      title: "Space Chimes Edits",
      category: "video",
      image: "./images/sc.jpeg",
      description: "Professional product demonstration video for marketing and promotional purposes.",
      technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"],
      liveUrl: "https://justchetan.myportfolio.com/rapper-edits",
    },
     {
      id: 5,
      title: "Artistic Edits",
      category: "video",
      image: "./images/art.jpeg",
      description: "Professional product demonstration video for marketing and promotional purposes.",
      technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"],
      liveUrl: "https://justchetan.myportfolio.com/artists-edits",
    },
    {
      id: 6,
      title: "Cinamatics ",
      category: "video",
      image: "./images/cin.jpg",
      description: "Professional product demonstration video for marketing and promotional purposes.",
      technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"],
      liveUrl: "https://justchetan.myportfolio.com/cinematic",
    },
     {
      id: 7,
      title: "Travel Edits",
      category: "video",
      image: "./images/tra.jpg",
      description: "Professional Travel sites demonstration video for marketing and promotional purposes.",
      technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"],
      liveUrl: "https://justchetan.myportfolio.com/travel-projects",
    },
   
   
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Our Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
          >
            Showcasing Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              {" "}Best Work
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Explore our diverse portfolio of successful projects across web development, digital marketing, and creative services.
          </motion.p>
        </div>

        {/* Category Filter - Responsive layout */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 sm:space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {project.githubUrl && project.category !== "video" && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
  >
    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
  </a>
)}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <span className="inline-block px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {categories.find(cat => cat.id === project.category)?.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal - Responsive */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300 p-2"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
                  />
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-medium text-center transition-colors duration-300 text-sm sm:text-base"
                      >
                        View Live
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-6 py-3 rounded-lg font-medium text-center transition-colors duration-300 text-sm sm:text-base"
                      >
                        View Code
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
