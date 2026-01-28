'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Toast from '@/components/Toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<'success' | 'error'>('success')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        const successMsg = data.message || 'Thank you for your message! We will get back to you soon.'
        setSubmitMessage(successMsg)
        setToastType('success')
        setShowToast(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        const errorMsg = data.error || 'Something went wrong. Please try again.'
        setSubmitMessage(errorMsg)
        setToastType('error')
        setShowToast(true)
      }
    } catch (error) {
      setSubmitStatus('error')
      const errorMsg = 'Failed to send message. Please try again or call us at +91 9520587777'
      setSubmitMessage(errorMsg)
      setToastType('error')
      setShowToast(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a5f3f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dark-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900">Get in Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 border border-gray-100 fade-in-up">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark-green mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600">Fill in the form below and we&apos;ll get back to you</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg shadow-dark-green/30"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-dark-green/5 to-light-green/5 rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xl">
                <h2 className="text-3xl font-bold text-dark-green mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-dark-green to-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-dark-green font-semibold mb-1 text-lg">Address</h3>
                      <p className="text-gray-700">
                        100, Prempuri, Near Shamli Bus Stand<br />
                        Muzaffarnagar (U.P.)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-dark-green to-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-dark-green font-semibold mb-1 text-lg">Email</h3>
                      <a href="mailto:royalmetroev@gmail.com" className="text-gray-700 hover:text-dark-green transition-colors">
                        royalmetroev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-dark-green to-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-dark-green font-semibold mb-1 text-lg">Phone</h3>
                      <a href="tel:+919520587777" className="text-gray-700 hover:text-dark-green transition-colors">
                        +91 9520587777
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-xl">
                <h3 className="text-2xl font-bold text-dark-green mb-6">Business Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-light-blue/5 to-light-green/5 rounded-2xl p-8 border border-gray-200 shadow-xl">
                <h3 className="text-2xl font-bold text-light-blue mb-4">Need Immediate Help?</h3>
                <p className="text-gray-700 mb-6">Call us directly or reach out via WhatsApp</p>
                <Link
                  href="https://wa.me/919520587777"
                  target="_blank"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Toast Notification */}
      <Toast
        message={submitMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={5000}
      />
    </main>
  )
}
