import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      content: "Aurevia transformed our digital presence completely. Their team delivered a stunning platform that perfectly represents our brand and has significantly increased our customer conversion rate. The attention to detail is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Global Solutions Ltd.",
      content: "Working with Aurevia on our custom web application was a game-changer. They increased our systems capacity and helped us achieve our highest ROI ever. Their strategic approach and data-driven insights are invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Thompson",
      position: "Operations Manager",
      company: "E-commerce Plus",
      content: "Aurevia built our e-commerce infrastructure from scratch, and the results have been phenomenal. The user experience is seamless, and our mobile sales have increased by 150%. Their technical expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-[#E2E8F0] dark:bg-[#09090B] relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[-10%] w-[380px] h-[380px] bg-gradient-to-tr from-[#2563EB]/3 to-transparent rounded-full blur-[90px] pointer-events-none" />

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
            TESTIMONIALS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-4"
          >
            Trusted by founders and <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              digital operators.
            </span>
          </motion.h2>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-slate-100/90 dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/60 dark:border-white/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-premium hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-gray-300/80 dark:hover:border-white/10"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-8 h-8 rounded-full bg-blue-50/60 dark:bg-white/[0.02] flex items-center justify-center mb-6 border border-blue-100/30 dark:border-transparent">
                  <Quote className="w-4 h-4 text-[#2563EB] opacity-60" />
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base font-light leading-relaxed text-slate-800 dark:text-gray-400 italic mb-8">
                  "{test.content}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60 dark:border-white/5">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200 dark:border-white/10"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#111827] dark:text-[#FAFAFA]">
                    {test.name}
                  </h4>
                  <p className="text-[11px] font-mono tracking-wider text-slate-800 dark:text-gray-500 uppercase">
                    {test.position}, {test.company}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
