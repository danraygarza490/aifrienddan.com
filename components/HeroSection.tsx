// components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion' // Install: npm i framer-motion
import { ArrowRight, Play } from 'lucide-react'

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
        {/* Status Badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            <span 
              className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-green-500" 
              aria-label="Live status indicator"
            />
            v1.0 is now live
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={item}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Your Personal AI Companion{' '}
          <br className="hidden sm:block" />
          <span className="text-primary">Always by your side.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={item}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Chat, learn, and grow with Dan. The AI friend designed to understand you better every day.
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
            Start Chatting
            <ArrowRight 
              size={20} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </motion.button>
          
          <motion.button
            className="group flex h-12 items-center justify-center gap-2 rounded-md border border-input bg-background px-8 text-lg font-medium transition-all hover:bg-accent hover:text-accent-foreground"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play size={20} />
            View Demo
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          variants={item}
          className="pt-8 text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            <span className="font-semibold text-foreground">1,234+</span> users already chatting
          </p>
        </motion.div>
      </motion.div>
    </main>
  )
}