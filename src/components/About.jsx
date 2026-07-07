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

  const founders = [
    {
      name: "Mayank",
      role: "Founder",
      badge: "FOUNDER",
      badgeColor: "bg-[#2563EB]",
      image: "./mayank.jpeg",
      quote: "\"Building the future of digital experiences with innovation, precision, and a relentless pursuit of excellence.\"",
    },
    {
      name: "Ankita",
      role: "Co-Founder",
      badge: "CO-FOUNDER",
      badgeColor: "bg-[#7C3AED]",
      image: "./ankita.jpeg",
      quote: "\"Empowering brands through creative vision, strategic thinking, and meaningful digital connections.\"",
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#E2E8F0] dark:bg-[#09090B] relative overflow-hidden">

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

        {/* Main Content: Bio Text + Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-slate-800 dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed"
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

          {/* Founder & Co-Founder Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-center bg-slate-100/90 dark:bg-[#18181B] rounded-[20px] p-8 border border-gray-200/60 dark:border-white/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-premium text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-lg transition-all duration-500 hover:border-gray-300/80 dark:hover:border-white/10"
              >
                {/* Photo with Role Badge */}
                <div className="relative mb-6">
                  <div className="relative">
                    <img
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-36 h-36 sm:w-40 sm:h-40 object-cover object-top
                       rounded-full border-2 border-slate-300 dark:border-white/10 shadow-sm group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Subtle gradient ring on hover */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#2563EB]/20 to-[#7C3AED]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  </div>
                  <span className={`absolute bottom-1 right-1 ${founder.badgeColor} text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-md`}>
                    {founder.badge}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-1">
                  {founder.name}
                </h3>
                <p className="text-xs text-slate-800 dark:text-gray-400 uppercase tracking-widest font-semibold mb-5">
                  {founder.role}
                </p>

                {/* Quote */}
                <blockquote className="italic text-sm text-slate-800 dark:text-gray-400 leading-relaxed max-w-[260px]">
                  {founder.quote}
                </blockquote>
              </motion.div>
            ))}
          </div>

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
                className="bg-slate-100/90 dark:bg-[#18181B] rounded-[20px] p-6 border border-gray-200/60 dark:border-white/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-premium hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-lg transition-all duration-300 hover:border-gray-300/80 dark:hover:border-white/10"
              >
                <div className="w-10 h-10 rounded-[10px] bg-slate-300/60 dark:bg-white/[0.02] flex items-center justify-center mb-4 border border-slate-400/30 dark:border-transparent">
                  <IconComp className="w-5 h-5 text-[#2563EB]" />
                </div>

                <h4 className="text-base font-bold text-[#111827] dark:text-[#FAFAFA] mb-2">
                  {val.title}
                </h4>

                <p className="text-xs sm:text-sm font-light text-slate-800 dark:text-gray-400 leading-relaxed">
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
