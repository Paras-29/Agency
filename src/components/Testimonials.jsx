import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "TechVision Pro transformed our digital presence completely. Their team delivered a stunning website that perfectly represents our brand and has significantly increased our online conversions. The attention to detail and ongoing support is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Global Solutions Ltd.",
      content: "Working with TechVision Pro on our digital marketing campaign was a game-changer. They increased our organic traffic by 300% and helped us achieve our highest ROI ever. Their strategic approach and data-driven insights are invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Creative Studios",
      content: "The video editing services from TechVision Pro exceeded all expectations. They took our raw footage and created a compelling brand video that perfectly captures our story. The quality and creativity are outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager",
      company: "E-commerce Plus",
      content: "TechVision Pro built our e-commerce platform from scratch, and the results have been phenomenal. The user experience is seamless, and our sales have increased by 150%. Their technical expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Content Manager",
      company: "Digital Marketing Pro",
      content: "The content writing and SEO services provided by TechVision Pro have been instrumental in our growth. Our blog traffic has increased by 400%, and we're ranking for competitive keywords. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  // Show two testimonials per row
  const getVisibleTestimonials = () => {
    if (testimonials.length < 2) return [testimonials[0]]
    if (currentIndex === testimonials.length - 1)
      return [testimonials[currentIndex], testimonials[0]]
    return [testimonials[currentIndex], testimonials[currentIndex + 1]]
  }

  return (
    <section id="testimonials" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
          >
            Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              {" "}Clients Say
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Two Testimonials in a Row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-blue-100 flex min-h-[320px] max-h-[340px] transition-all duration-300"
                >
                  {/* Left: Image, Name, Info, Rating */}
                  <div className="flex flex-col items-center justify-center w-1/3 pr-6 border-r border-blue-50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg ring-2 ring-blue-200 mb-3"
                    />
                    <h4 className="text-base font-bold text-blue-700 mb-1 text-center">
                      {testimonial.name}
                    </h4>
                    <p className="text-indigo-500 text-sm mb-1 font-medium text-center">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-gray-500 mb-2 text-center">
                      {testimonial.company}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 text-xs rounded-full shadow border border-blue-100 gap-1 self-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-base">★</span>
                      ))}
                      <span className="ml-1 text-gray-600 font-semibold">{testimonial.rating}/5</span>
                    </div>
                  </div>
                  {/* Right: Quote Icon & Content */}
                  <div className="flex flex-col justify-center w-2/3 pl-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4 shadow self-center">
                      <Quote className="w-6 h-6 text-blue-600" />
                    </div>
                    <blockquote className="text-left text-base md:text-lg text-gray-700 leading-relaxed italic line-clamp-4">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
