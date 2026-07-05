import { motion } from 'framer-motion'
import { Award, Zap, Shield, Layers, Calendar, MessageSquare, HeartHandshake } from 'lucide-react'

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="why-choose-us" className="py-24 bg-[#F3F4F6] dark:bg-[#121214] relative overflow-hidden">
      
      {/* Decorative background gradients */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-gradient-to-tr from-[#2563EB]/4 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-gradient-to-tr from-[#7C3AED]/4 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 text-xs font-semibold tracking-wider mb-4"
          >
            WHY AUREVIA
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-4"
          >
            Engineering excellence, <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              designed to outperform.
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Quality Card (col-span-2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-[14px] bg-blue-50 dark:bg-white/[0.03] flex items-center justify-center">
                <Award className="w-6 h-6 text-[#2563EB]" />
              </div>
              <span className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Meticulous Craft</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Uncompromising Quality
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed max-w-xl">
                We believe in digital products that feel handcrafted. Every layout pixel is aligned, code is documented, and components are custom-built to reflect premium brand aesthetics.
              </p>
            </div>
          </motion.div>

          {/* Performance Card (col-span-1) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-[14px] bg-green-50 dark:bg-white/[0.03] flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              
              {/* Micro visual: lighthouse score */}
              <div className="flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-full text-green-600 dark:text-green-400 font-mono text-[10px] font-bold">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                LIGHTHOUSE 100
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Extreme Speed
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                Buttery smooth scrolling, minimal bundle sizes, and lazy load features make pages load instantly.
              </p>
            </div>
          </motion.div>

          {/* Security Card (col-span-1) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-red-50 dark:bg-white/[0.03] flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Enterprise Security
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                Secure API routing, HTTPS protection, and automated patch routines protect your user database.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Card (col-span-2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-[14px] bg-purple-50 dark:bg-white/[0.03] flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#7C3AED]" />
              </div>
              {/* Micro tag list */}
              <div className="flex flex-wrap gap-1.5 max-w-[200px] justify-end">
                {['React', 'Vite', 'Lenis', 'Framer Motion'].map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 font-mono text-gray-500">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Modern Tech Stack
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                We develop using premium libraries: React, Vite, Tailwind CSS, Lenis smooth scrolling, and Framer Motion. This guarantees modular code that remains easily maintainable as you grow.
              </p>
            </div>
          </motion.div>

          {/* Delivery Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-yellow-50 dark:bg-white/[0.03] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Agile Delivery
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                Iterative sprint schedules and prompt deliverables ensure projects launch on time, without delays.
              </p>
            </div>
          </motion.div>

          {/* Communication Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-indigo-50 dark:bg-white/[0.03] flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Transparent Comms
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                Shared communication channels and structured update summaries eliminate uncertainty.
              </p>
            </div>
          </motion.div>

          {/* Support Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-[260px]"
          >
            <div className="w-12 h-12 rounded-[14px] bg-cyan-50 dark:bg-white/[0.03] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                Long-Term Support
              </h3>
              <p className="text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                We remain partners post-launch, updating systems and optimizing UX as your product matures.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs
