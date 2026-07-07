import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Instagram, Linkedin } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "agency2922@gmail.com",
      link: "mailto:agency2922@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 94602 24643",
      link: "tel:+919460224643",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jaipur, India",
      link: "#",
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: Linkedin },
    { name: "Instagram", url: "#", icon: Instagram }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.send(
        'service_sj5kl09',
        'template_29x1yn9',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'uflT10rRh_fLXmJfj'
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#E2E8F0] dark:bg-[#09090B] relative overflow-hidden">
      
      {/* Decorative Accent */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-gradient-to-tr from-[#2563EB]/4 to-[#7C3AED]/4 rounded-full blur-[100px] pointer-events-none" />

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
            CONTACT
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111827] dark:text-[#FAFAFA] mb-4"
          >
            Let's build something <br />
            <span className="font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              extraordinary together.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-10">
               <p className="text-base sm:text-lg font-light text-slate-800 dark:text-gray-400 leading-relaxed max-w-md">
                Have a concept in mind, need technical reinforcement, or looking to redesign a product? Reach out and we will respond within 24 hours.
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComp = info.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-[10px] bg-slate-300/60 dark:bg-white/[0.02] flex items-center justify-center text-slate-800 dark:text-gray-500 border border-gray-200/40 dark:border-white/5 flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-[10px] uppercase tracking-wider text-slate-800 dark:text-gray-400 font-semibold mb-0.5">{info.title}</p>
                        <a
                          href={info.link}
                          className="text-sm font-medium text-[#111827] dark:text-gray-200 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 lg:mt-0">
               <p className="text-xs uppercase tracking-wider text-slate-800 dark:text-gray-400 font-semibold mb-4">Follow Aurevia</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComp = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 rounded-full border border-gray-200/60 dark:border-white/10 text-slate-800 dark:text-gray-400 hover:text-[#111827] dark:hover:text-white hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-transparent transition-all flex items-center justify-center"
                      aria-label={social.name}
                    >
                      <IconComp className="w-[18px] h-[18px]" />
                    </a>
                  )
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-100/90 dark:bg-[#18181B] border border-gray-200/60 dark:border-white/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-premium rounded-[20px] p-8">
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#FAFAFA] mb-6">
                Send a Message
              </h3>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-[14px] flex items-start gap-3 text-sm ${
                  submitStatus === 'success'
                    ? 'bg-green-500/10 text-green-800 dark:text-green-300 border border-green-500/20'
                    : 'bg-red-500/10 text-red-800 dark:text-red-300 border border-red-500/20'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  )}
                  <span>
                    {submitStatus === 'success'
                      ? 'Message transmitted successfully! We\'ll follow up shortly.'
                      : 'Failure sending message. Please check parameters and try again.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-800 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-100/80 dark:bg-black/20 border border-slate-300/80 dark:border-white/5 rounded-[14px] px-4 py-3.5 focus:border-[#2563EB] dark:focus:border-blue-400 focus:ring-[4px] focus:ring-[#2563EB]/10 transition-all text-[#111827] dark:text-[#FAFAFA] text-sm placeholder-slate-500"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-800 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-100/80 dark:bg-black/20 border border-slate-300/80 dark:border-white/5 rounded-[14px] px-4 py-3.5 focus:border-[#2563EB] dark:focus:border-blue-400 focus:ring-[4px] focus:ring-[#2563EB]/10 transition-all text-[#111827] dark:text-[#FAFAFA] text-sm placeholder-slate-500"
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-800 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 dark:bg-black/20 border border-slate-300/80 dark:border-white/5 rounded-[14px] px-4 py-3.5 focus:border-[#2563EB] dark:focus:border-blue-400 focus:ring-[4px] focus:ring-[#2563EB]/10 transition-all text-[#111827] dark:text-[#FAFAFA] text-sm placeholder-slate-500"
                    placeholder="e.g. Custom Web Development"
                  />
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-800 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 dark:bg-black/20 border border-slate-300/80 dark:border-white/5 rounded-[14px] px-4 py-3.5 focus:border-[#2563EB] dark:focus:border-blue-400 focus:ring-[4px] focus:ring-[#2563EB]/10 transition-all text-[#111827] dark:text-[#FAFAFA] text-sm resize-none placeholder-slate-500"
                    placeholder="Describe your system requirements and timelines..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111827] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#111827] py-3.5 px-6 rounded-[14px] font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-premium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
