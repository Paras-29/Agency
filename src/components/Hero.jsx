import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Zap, Target,Rocket,TrendingUp } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const achievements = [
    { number: "500+", label: "Projects Delivered", icon: <Rocket/>, color: "from-blue-500 to-blue-600" },
    { number: "98%", label: "Client Satisfaction", icon: "😊", color: "from-green-500 to-green-600" },
    { number: "5+", label: "Years Experience", icon: <TrendingUp/>, color: "from-yellow-500 to-yellow-600" },
    { number: "24/7", label: "Support Available", icon: "🛟", color: "from-purple-500 to-purple-600" }
  ]

  return (
    <section id="home" className='relative pb-10'>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

    <div  className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles - Responsive sizing */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-900 to-indigo-300 rounded-full opacity-20 blur-sm"
          />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-36 h-36 sm:w-[28rem] sm:h-[28rem] bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20 blur-sm"
          />
        
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          

          {/* Main Heading with Enhanced Typography - Responsive text sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            <span className="block">Transforming Ideas Into</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">
              Digital Reality
            </span>
          </motion.h1>

          {/* Enhanced Subtitle - Responsive text sizes */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-medium px-4"
          >
            We specialize in cutting-edge web development, digital marketing, and creative solutions that drive 
            <span className="text-blue-600 font-semibold"> business growth</span> and 
            <span className="text-indigo-600 font-semibold"> digital transformation</span>.
          </motion.p>

          {/* Enhanced CTA Buttons - Better mobile layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/25 flex items-center shadow-lg w-full sm:w-auto justify-center"
            >
              <Target className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              Contact
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:shadow-xl flex items-center bg-white/80 backdrop-blur-sm w-full sm:w-auto justify-center"
            >
              <Play className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              View Our Work
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
          >
          <span className="text-xs sm:text-sm text-gray-500 mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>

    <div className="relative z-10 w-full mt-20 px-6 sm:px-8 lg:px-12 ">
          <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative order-1 lg:order-2"
                >
                  <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-4 sm:gap-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                      >
                        {/* Background gradient on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        
                        <div className="relative z-10">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                            <span className="text-xl sm:text-3xl">{achievement.icon}</span>
                          </div>
                          <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 sm:mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            {achievement.number}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">
                            {achievement.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
      
                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-80"
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full opacity-80"
                  />
                </motion.div>
      </div>

</section>
  )
}

export default Hero
