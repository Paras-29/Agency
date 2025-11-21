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

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-26 bg-gradient-to-br from-gray-600 via-black to-gray-600 relative overflow-hidden">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight px-4"
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
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium px-4"
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
            className="bg-gray-300 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto order-2 lg:order-1"
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
                className="bg-gray-200 rounded-lg px-3 sm:px-4 py-3 shadow-sm"
              >
                We help businesses thrive online with creative strategy and technical expertise.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-200 rounded-lg px-3 sm:px-4 py-3 shadow-sm"
              >
                Over 5 years of experience delivering growth and results for all sizes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-200 rounded-lg px-3 sm:px-4 py-3 shadow-sm"
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

          {/* Right Side - Beautiful Founder Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center order-1 lg:order-2 bg-gray-300 rounded-3xl shadow-2xl p-8 sm:p-12 border border-blue-200"
          >
            <div className="relative">
              <img
                src='./chc.jpg'
                alt="Founder"
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-xl border-4 border-blue-300"
              />
              <span className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Founder
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mt-6 mb-2 drop-shadow-lg">Chetan Upadhyay</h3>
            <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">Founder & CEO</p>
            <blockquote className="italic text-indigo-600 text-center max-w-md">
              "Empowering businesses to achieve more through innovation and passion."
            </blockquote>
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
              className="text-center p-6 sm:p-8 bg-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
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
