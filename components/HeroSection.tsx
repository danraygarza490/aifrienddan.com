// components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion' // Install: npm i framer-motion
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function HeroSection() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 sm:py-32">
      <motion.div
        className="max-w-3xl space-y-8 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Main Headline */}
        <motion.h1 
          variants={item}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Dan the Man
          <br className="hidden sm:block" />
          <span className="text-primary">with the AI Plan.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={item}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Your friendly guide to the world of AI. I&apos;m here to help you understand and use artificial intelligence in your everyday life. No technical jargon, just simple, practical advice.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={item}
          className="flex flex-col justify-center gap-4 pt-4 sm:flex-row"
        >
          <motion.button
            className="group flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow-md transition-all hover:scale-105 hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowRight 
              size={20} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  )
}