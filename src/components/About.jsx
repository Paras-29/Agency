import { motion } from 'framer-motion'
import { Target, Eye, Users, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To build software and design identities that empower businesses, drive conversions, and establish authority in their industry.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To set the benchmark for digital premium products, showing that clean layout and refined details create massive business impact.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A close-knit squad of senior engineers and designers focused on creating custom digital systems rather than generic templates.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Obsessive attention to detail, transparent communication, long-term partnerships, and extreme code performance.",
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#FAFAFA] dark:bg-[#09090B] relative overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-gradient-to-tr from-[#2563EB]/4 to-[#7C3AED]/4 rounded-full blur-[100px] pointer-events-none" />

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
            ABOUT AUREVIA
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-6 leading-tight"
          >
            We help ambitious companies <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              build digital authority.
            </span>
          </motion.h2>
        </div>

        {/* Main Content: Founder & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-[#6B7280] dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed pr-0 lg:pr-8"
          >
            <p>
              Founded with the conviction that digital experiences should be designed for maximum aesthetic value and high performance, Aurevia exists to bridge the gap between handcrafted designs and reliable engineering.
            </p>
            <p>
              We don't work with templates or copy-paste code. Every client engagement is approached with a clean canvas, defining custom system designs and user experience matrices that align strictly with your strategic business goals.
            </p>
            <p className="font-medium text-[#111827] dark:text-[#FAFAFA]">
              We build systems that scale, design identities that last, and establish partnerships built on mutual growth.
            </p>
          </motion.div>

          {/* Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center bg-white dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/50 dark:border-white/5 shadow-premium text-center"
          >
            <div className="relative mb-6">
              <img
                src="./photo.jpeg"
                alt="Founder & CEO"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border border-gray-200 dark:border-white/10 shadow-sm"
              />
              <span className="absolute bottom-2 right-2 bg-[#2563EB] text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase shadow-md">
                CEO
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-1">
              Paras Gulvanshi
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-gray-400 uppercase tracking-widest font-semibold mb-4">
              Founder & Chief Executive
            </p>

            <blockquote className="italic text-sm text-gray-500 dark:text-gray-400 max-w-sm">
              "Empowering businesses to achieve more through innovation, clean engineering, and creative passion."
            </blockquote>
          </motion.div>

        </div>

        {/* Feature Cards Grid (Mission, Vision, etc.) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => {
            const IconComp = val.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white dark:bg-[#18181B] rounded-[20px] p-6 border border-gray-200/40 dark:border-white/5 shadow-premium"
              >
                <div className="w-10 h-10 rounded-[10px] bg-gray-50 dark:bg-white/[0.02] flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5 text-[#2563EB]" />
                </div>

                <h4 className="text-base font-bold text-[#111827] dark:text-[#FAFAFA] mb-2">
                  {val.title}
                </h4>

                <p className="text-xs sm:text-sm font-light text-[#6B7280] dark:text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About
