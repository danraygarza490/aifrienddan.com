// app/page.tsx
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AiFriendDan | Your Personal AI Companion',
  description: 'Chat, learn, and grow with Dan. An AI friend designed to understand you better every day.',
  keywords: ['AI companion', 'chatbot', 'personal AI', 'AI assistant'],
  authors: [{ name: 'AiFriendDan Team' }],
  openGraph: {
    title: 'AiFriendDan - Your Personal AI Companion',
    description: 'The AI friend designed to understand you better every day.',
    url: 'https://aifrienddan.com',
    siteName: 'AiFriendDan',
    images: [
      {
        url: '/og-image.png', // You'll need to create this (1200x630px)
        width: 1200,
        height: 630,
        alt: 'AiFriendDan Preview'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AiFriendDan',
    description: 'Your Personal AI Companion',
    images: ['/og-image.png']
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  )
}