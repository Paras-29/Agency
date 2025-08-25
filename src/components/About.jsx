import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, TrendingUp, CheckCircle, ArrowRight,Rocket } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in the digital age.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading digital transformation partner for businesses worldwide, known for creativity, reliability, and measurable results.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of passionate professionals with expertise in development, design, marketing, and business strategy.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, innovation, integrity, collaboration, and customer success drive everything we do.",
      color: "from-green-500 to-green-600"
    }
  ]

  const achievements = [
    { number: "500+", label: "Projects Delivered", icon: <Rocket/>, color: "from-blue-500 to-blue-600" },
    { number: "98%", label: "Client Satisfaction", icon: "😊", color: "from-green-500 to-green-600" },
    { number: "5+", label: "Years Experience", icon: <TrendingUp/>, color: "from-yellow-500 to-yellow-600" },
    { number: "24/7", label: "Support Available", icon: "🛟", color: "from-purple-500 to-purple-600" }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-26 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-300 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-blue-200 shadow-lg backdrop-blur-sm"
          >
            <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
            About Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight px-4"
          >
            We're More Than Just a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Digital Agency
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
          >
            We're a team of passionate innovators, creative thinkers, and technical experts dedicated to transforming businesses through cutting-edge digital solutions.
          </motion.p>
        </div>

        {/* Main Content Grid - Responsive layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Side - Enhanced Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100 max-w-2xl mx-auto order-2 lg:order-1"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-4 sm:mb-6 text-center"
            >
              Your Success is Our Priority
            </motion.h3>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg px-3 sm:px-4 py-3 shadow-sm"
              >
                We help businesses thrive online with creative strategy and technical expertise.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-50 rounded-lg px-3 sm:px-4 py-3 shadow-sm"
              >
                Over 5 years of experience delivering growth and results for all sizes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg px-3 sm:px-4 py-3 shadow-sm"
              >
                We build partnerships, not just projects. Your goals are our mission.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl flex items-center text-sm sm:text-base"
              >
                Start Your Project
                <span className="ml-2">→</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Stats Grid - Responsive layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
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

        {/* Enhanced Features Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default About
