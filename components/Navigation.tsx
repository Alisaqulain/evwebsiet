'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: 'ℹ️' },
    { href: '/products', label: 'Products', icon: '🚗' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group relative z-10">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.jpeg"
                alt="Royal Metro EV Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-dark-green to-light-green bg-clip-text text-transparent">
                Royal Metro <span className="text-light-blue">EV</span>
              </h1>
              <p className="text-xs text-gray-500 hidden md:block">Muzaffarnagar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-dark-green bg-gradient-to-r from-dark-green/10 to-light-green/10'
                      : 'text-gray-700 hover:text-dark-green'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-dark-green to-light-green rounded-full"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-green/5 to-light-green/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              )
            })}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-dark-green to-light-green text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-light-green to-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-10 p-2 rounded-lg transition-all duration-300 ${
              isOpen
                ? 'bg-dark-green text-white'
                : 'text-dark-green hover:bg-dark-green/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-2.5' : ''
                }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-2.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200/50 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-dark-green/10 to-light-green/10 text-dark-green font-semibold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-dark-green'
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-dark-green rounded-full"></div>
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-dark-green to-light-green text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
