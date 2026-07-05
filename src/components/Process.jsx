import { motion } from 'framer-motion'
import { Search, Compass, Paintbrush, Code2, ClipboardCheck, Rocket, Wrench } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      no: "01",
      title: "Discovery",
      description: "We deep-dive into your business goals, target demographics, and functional requirements. We analyze your competitors and establish a transparent scope.",
      icon: Search,
      color: "from-blue-500 to-indigo-500"
    },
    {
      no: "02",
      title: "Planning",
      description: "We map out user flows, select the optimal tech stack, design API architectures, and draft low-fidelity blueprints to align on the technical roadmap.",
      icon: Compass,
      color: "from-indigo-500 to-purple-500"
    },
    {
      no: "03",
      title: "Design",
      description: "We craft custom, premium visual designs in Figma. We define modern color configurations, precise component grids, and high-fidelity prototypes.",
      icon: Paintbrush,
      color: "from-purple-500 to-pink-500"
    },
    {
      no: "04",
      title: "Development",
      description: "Our engineers write clean, modular, and performance-optimized code. We build clean systems, test integrations, and implement responsive structures.",
      icon: Code2,
      color: "from-pink-500 to-red-500"
    },
    {
      no: "05",
      title: "Testing",
      description: "We conduct end-to-end device audits, load test page layouts, run lighthouse page-speed optimizations, and fix edge cases to assure quality.",
      icon: ClipboardCheck,
      color: "from-red-500 to-orange-500"
    },
    {
      no: "06",
      title: "Launch",
      description: "We manage production deployment, set up secure CDN caching layers, optimize domain integrations, and safely take your platform live.",
      icon: Rocket,
      color: "from-orange-500 to-yellow-500"
    },
    {
      no: "07",
      title: "Support",
      description: "Aurevia provides ongoing security updates, content updates, server uptime diagnostics, and feature scaling cycles post-launch.",
      icon: Wrench,
      color: "from-yellow-500 to-green-500"
    }
  ]

  return (
    <section id="process" className="py-24 bg-[#F3F4F6] dark:bg-[#121214] relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] bg-[#2563EB]/3 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-[#7C3AED]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 text-xs font-semibold tracking-wider mb-4"
          >
            OUR PROCESS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-4"
          >
            How we translate thoughts <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              into robust products.
            </span>
          </motion.h2>
        </div>

        {/* Timeline Grid (Vertical layout) */}
        <div className="relative max-w-5xl mx-auto pl-6 sm:pl-8 md:pl-10 border-l border-gray-200 dark:border-white/5 space-y-12">
          
          {steps.map((step, index) => {
            const IconComp = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative group pl-8 sm:pl-12"
              >
                {/* Timeline Bullet Point indicator */}
                <div className="absolute left-[-31px] sm:left-[-39px] md:left-[-41px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-[#09090B] border-[2px] border-gray-200 dark:border-white/10 group-hover:border-[#2563EB] dark:group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-[#2563EB] dark:group-hover:bg-blue-400 transition-colors duration-300" />
                </div>

                <div className="bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium group-hover:shadow-lg transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Step No & Icon */}
                  <div className="md:col-span-3 flex items-center gap-4">
                    <span className="text-4xl sm:text-5xl font-extralight tracking-tight text-gray-200 dark:text-gray-800 font-mono">
                      {step.no}
                    </span>
                    <div className="w-12 h-12 rounded-[14px] bg-gray-50 dark:bg-white/[0.03] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Step Title & Details */}
                  <div className="md:col-span-9">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#6B7280] dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Process
