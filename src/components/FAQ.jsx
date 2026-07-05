import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What capabilities does Aurevia offer?",
      answer: "Aurevia is a high-end digital technology agency. We specialize in custom React and Next.js platforms, AI automation systems, brand guidelines, and UI/UX design. We handle everything from concept ideation to server hosting configurations."
    },
    {
      question: "Do you design using pre-made templates?",
      answer: "No. Every interface is handcrafted from a clean canvas by our UI/UX designers and engineered from scratch. This guarantees that your brand is entirely unique and that codebases are light, fast, and secure."
    },
    {
      question: "How long does a typical custom project take?",
      answer: "A custom web application or premium website usually takes between 4 to 8 weeks. We divide the timeline into structured 2-week sprints, providing you with continuous preview environments to track our progress."
    },
    {
      question: "How do you manage client communication?",
      answer: "We prioritize clarity. We communicate via shared Slack channels, schedule bi-weekly screen-share meetings, and send weekly summaries outlining deliverables, blocking tasks, and next steps."
    },
    {
      question: "What is your primary technology stack?",
      answer: "We build modern, modular interfaces using React, Vite, Tailwind CSS, Lenis, and Framer Motion. This guarantees ultra-smooth visual layouts and high performance ratings across mobile and desktop devices."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#F3F4F6] dark:bg-[#121214] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[380px] h-[380px] bg-gradient-to-tr from-[#2563EB]/3 to-transparent rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 text-xs font-semibold tracking-wider mb-4"
          >
            FAQ
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA]"
          >
            Frequently Asked <span className="font-bold">Questions</span>
          </motion.h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-[#18181B] rounded-[20px] border border-gray-200/50 dark:border-white/5 overflow-hidden shadow-premium"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#FAFAFA] pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/[0.03] flex items-center justify-center flex-shrink-0 text-gray-500">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#2563EB]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base font-light leading-relaxed text-[#6B7280] dark:text-gray-400 border-t border-gray-100 dark:border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
