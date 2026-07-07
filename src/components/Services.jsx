import { motion } from 'framer-motion'
import { Code2, Laptop, Cpu, Megaphone, Search, Sparkles, Compass, LifeBuoy, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description: "Handcrafted, fast, and responsive websites optimized for search engines and engineered for performance.",
      accent: "from-[#2563EB] to-[#3B82F6]"
    },
    {
      icon: Laptop,
      title: "Web Applications",
      description: "Custom software and robust digital platforms built with modern technology stacks like React, Node.js, and Next.js.",
      accent: "from-[#7C3AED] to-[#8B5CF6]"
    },
    {
      icon: Cpu,
      title: "AI Automation",
      description: "Custom AI integrations, LLM configurations, and workflow automations to drive operational efficiency and scale.",
      accent: "from-[#06B6D4] to-[#3B82F6]"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic campaign planning, brand positioning, and execution designed to capture organic traffic and build presence.",
      accent: "from-[#EC4899] to-[#F43F5E]"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Advanced keyword mapping, technical audits, and performance tuning to secure top organic ranks on Google.",
      accent: "from-[#10B981] to-[#059669]"
    },
    {
      icon: Sparkles,
      title: "Brand Identity",
      description: "Sophisticated logo design, guidelines, typography, and cohesive visual identities that make companies memorable.",
      accent: "from-[#F59E0B] to-[#D97706]"
    },
    {
      icon: Compass,
      title: "UI/UX Design",
      description: "Interactive mockups, clean wireframes, and intuitive customer journeys built to boost retention and conversion.",
      accent: "from-[#6366F1] to-[#4F46E5]"
    },
    {
      icon: LifeBuoy,
      title: "Maintenance & Support",
      description: "Ongoing optimization, proactive security patches, feature additions, and 24/7 server reliability assurance.",
      accent: "from-[#64748B] to-[#475569]"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="services" className="py-24 bg-[#E2E8F0] dark:bg-[#09090B] relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/3 to-[#7C3AED]/3 rounded-full blur-[120px] pointer-events-none" />

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
            OUR SERVICES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-6 leading-tight"
          >
            Capabilities designed to scale <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              your digital growth.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1E293B] dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed"
          >
            From design to launch, we offer specialized engineering and creative services to help businesses navigate the digital ecosystem.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-slate-100/90 dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/60 dark:border-white/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-premium hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:group-hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[280px] hover:border-gray-300/80 dark:hover:border-white/10"
              >
                <div>
                  {/* Icon Wrapper with subtle gradient indicator */}
                  <div className="relative w-12 h-12 rounded-[14px] bg-slate-300/60 dark:bg-white/[0.03] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border border-slate-400/30 dark:border-transparent">
                    <div className={`absolute -inset-[1px] rounded-[14px] bg-gradient-to-tr ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]`} />
                    <IconComponent className="w-6 h-6 text-[#2563EB] dark:text-gray-300 group-hover:text-[#111827] dark:group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#111827] dark:text-[#FAFAFA] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-light leading-relaxed text-slate-800 dark:text-gray-400 group-hover:text-[#111827] dark:group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Minimal CTA Arrow */}
                <div className="flex items-center text-xs font-semibold tracking-wider text-[#2563EB] dark:text-blue-400 gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Services
