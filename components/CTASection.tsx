'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-light-green/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/2.png"
          alt="Royal Metro EV"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark-green/5 to-light-blue/5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-dark-green mb-6">
          Ready to Go Electric?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have made the switch to sustainable transportation. 
          Experience the future of mobility today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-4 bg-gradient-to-r from-dark-green to-light-green text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-dark-green/30"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-light-blue text-light-blue font-bold rounded-lg hover:bg-light-blue hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}


