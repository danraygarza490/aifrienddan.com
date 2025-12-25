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
          AiFriendDan
        </Link>

        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <button 
            className="rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Log in to your account"
          >
            Log in
          </button>
          <button 
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            aria-label="Create new account"
          >
            Sign up
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <button className="w-full rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
                Log in
              </button>
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}