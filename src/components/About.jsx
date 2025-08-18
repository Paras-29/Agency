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
    <section id="about" className="py-26  bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
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
          className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"
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
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold mb-8 border border-blue-200 shadow-lg backdrop-blur-sm"
          >
            <Target className="w-4 h-4 mr-2 text-blue-600" />
            About Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
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
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            We're a team of passionate innovators, creative thinkers, and technical experts dedicated to transforming businesses through cutting-edge digital solutions.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Enhanced Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl font-black text-gray-900 mt-10 mb-8"
            >
              Your Success is Our Priority
            </motion.h3>
            
            <div className="space-y-6 text-gray-600">
              {[
                "At TechVision Pro, we believe that every business has the potential to thrive in the digital landscape. Our comprehensive approach combines technical expertise with strategic thinking to deliver solutions that not only meet your immediate needs but also position you for long-term success.",
                "With over 5 years of experience in the industry, we've helped businesses of all sizes transform their digital presence, streamline operations, and achieve remarkable growth. Our team stays ahead of the curve with the latest technologies and industry best practices.",
                "We don't just build websites or run campaigns – we build partnerships. Your success is our success, and we're committed to going above and beyond to ensure you achieve your goals."
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <span className="text-3xl">{achievement.icon}</span>
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
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
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
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
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"
            />
          </motion.div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
                       <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
               {/* Background pattern */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's work together to create something amazing. Your success is our priority, and we're committed to delivering results that exceed your expectations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
