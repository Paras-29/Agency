import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const intervalTime = 20
    const steps = duration / intervalTime
    let stepCount = 0

    const timer = setInterval(() => {
      stepCount++
      const progress = Math.min(Math.round((stepCount / steps) * 100), 100)
      setCount(progress)

      if (stepCount >= steps) {
        clearInterval(timer)
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#E2E8F0] dark:bg-[#09090B] flex flex-col items-center justify-center z-50 overflow-hidden select-none">
      {/* Subtle background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#2563EB]/5 to-[#7C3AED]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#06B6D4]/5 to-[#3B82F6]/5 blur-[120px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
        {/* Brand Logo - Minimal Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.25em] text-[#111827] dark:text-[#FAFAFA]">
            AUREVIA
          </h1>
        </motion.div>

        {/* Minimal Progress Bar Wrapper */}
        <div className="w-full bg-[#111827]/10 dark:bg-[#FAFAFA]/10 h-[1.5px] rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
          />
        </div>

        {/* Counter and Status */}
        <div className="w-full flex justify-between items-center text-xs font-medium tracking-widest text-[#6B7280]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            CREATING EXPERIENCE
          </motion.span>
          <span className="font-mono text-sm font-semibold">{count}%</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
