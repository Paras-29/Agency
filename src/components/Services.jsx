import { motion } from 'framer-motion'
import { 
  Code, 
  Globe, 
  TrendingUp, 
  Video, 
  PenTool, 
  Search,
  ArrowRight,
  CheckCircle,
  Zap,
  ClipboardList, Rocket
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with React, MERN stack, and modern technologies. Responsive, fast, and SEO-optimized solutions.",
      features: ["React & Next.js", "MERN Stack", "Custom Solutions", "Responsive Design"],
      color: "from-blue-500 to-blue-600",
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Professional WordPress websites, themes, and plugins. Custom functionality and seamless content management.",
      features: ["Custom Themes", "Plugin Development", "E-commerce", "Performance Optimization"],
      color: "from-green-500 to-green-600",
      gradient: "from-green-500 to-green-600",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
      features: ["Social Media Marketing", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for marketing, social media, and promotional content.",
      features: ["Marketing Videos", "Social Media Content", "Product Demos", "Brand Videos"],
      color: "from-red-500 to-red-600",
      gradient: "from-red-500 to-red-600",
      iconColor: "text-red-600"
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "High-quality, engaging content that resonates with your audience and drives conversions.",
      features: ["Blog Posts", "Website Copy", "Marketing Materials", "SEO Content"],
      color: "from-yellow-500 to-yellow-600",
      gradient: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-600"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and drive organic traffic.",
      features: ["Technical SEO", "On-Page Optimization", "Keyword Research", "Performance Monitoring"],
      color: "from-indigo-500 to-indigo-600",
      gradient: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-600"
    }
  ]

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your needs and objectives", icon: <Search className="w-10 h-10 text-blue-600" /> },
  { step: "02", title: "Strategy", description: "Planning the perfect solution for your business", icon: <ClipboardList className="w-10 h-10 text-green-600" /> },
  { step: "03", title: "Execution", description: "Building and implementing your solution", icon: <Zap className="w-10 h-10 text-yellow-600" /> },
  { step: "04", title: "Launch", description: "Going live with ongoing support", icon: <Rocket className="w-10 h-10 text-purple-600" /> }
]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-xl"
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
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
          >
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Digital Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            From concept to execution, we provide end-to-end digital services that help businesses thrive in the digital landscape.
          </motion.p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                {/* Enhanced Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  <service.icon className="w-10 h-10" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  {service.description}
                </p>
                
                {/* Enhanced Features */}
                <div className="space-y-3 mb-6 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`group/btn inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors duration-300 relative z-10`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h3 className="text-3xl font-black text-gray-900 mb-12">
            Our Proven Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  {process.step}
                </motion.div>
                <div className="text-4xl place-items-center">{process.icon}</div>
                <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

export default Services
