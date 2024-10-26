'use client'

import { motion } from 'framer-motion'

export function Loading() {
  const barVariants = {
    initial: { height: 0 },
    animate: (i: number) => ({
      height: ['100%', '20%', '20%', '100%'][i % 3],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: i * 0.2,
      },
    }),
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#0a192f]">
      <div className="flex items-end space-x-2 h-32">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-6 bg-[#f26419]"
            variants={barVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    </div>
  )
}
