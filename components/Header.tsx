'use client'

import { useState } from 'react'
import Link from 'next/link' // ✅ Added
import { Menu, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Changed <a> to <Link> */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
          aria-label="AiFriendDan Home"
        >
          <span role="img" aria-label="Robot icon">🤖</span> 
          AI Friend Dan
        </Link>

        <div className="hidden md:flex gap-3">
          <button 
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            aria-label="Get in touch"
          >
            Get in touch
          </button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Get in touch
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}