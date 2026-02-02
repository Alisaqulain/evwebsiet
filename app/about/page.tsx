'use client'

import Image from 'next/image'

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900">About Royal Metro</span>
              <br />
              <span className="bg-gradient-to-r from-dark-green via-light-green to-light-blue bg-clip-text text-transparent">
                EV
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Muzaffarnagar-based manufacturer of I-CAT certified electric vehicles built for Indian road conditions
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in-up space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-dark-green/10 text-dark-green rounded-full text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building the Future of Mobility
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Royal Metro EV is a Muzaffarnagar (U.P.) based manufacturer of e-rickshaws, e-bikes, and electric scooters built for Indian road conditions. We focus on what matters most to commercial EV buyers: <strong className="text-dark-green">structural strength</strong>, <strong className="text-dark-green">dependable performance</strong>, and <strong className="text-dark-green">certified manufacturing</strong>.
                </p>
                <p>
                  Our e-rickshaws are <strong className="text-dark-green">I-CAT certified</strong>, and every vehicle is designed with a strong frame and quality materials to deliver long service life and better value for money.
                </p>
                <p>
                  Beyond the vehicle, we simplify ownership. We support customers through RTO-linked registration assistance, partnerships with leading finance providers to reduce upfront burden, and top-of-the-line after-sales service—so operators can earn with confidence and minimal downtime.
                </p>
              </div>
            </div>
            <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full flex items-center justify-center">
                <div className="relative w-full max-w-full">
                  <Image
                    src="/Building the Future of Mobility.jpeg"
                    alt="Building the Future of Mobility - Royal Metro EV"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-dark-green/5 via-white to-light-green/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-light-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-dark-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 fade-in-up">
              <div className="relative w-full flex items-center justify-center">
                <div className="relative w-full max-w-full">
                  <Image
                    src="/ourmissionn.jpeg"
                    alt="Our Mission: Green Energy, Great Journeys"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 fade-in-up space-y-6" style={{ animationDelay: '0.2s' }}>
              <div>
                <span className="inline-block px-4 py-2 bg-light-blue/10 text-light-blue rounded-full text-sm font-semibold mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering Clean Mobility
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our mission is simple: <strong className="text-dark-green">Green Energy, Great Journeys</strong>. We believe every driver deserves a vehicle that is low-maintenance, high-earning, and built for the future. With <strong className="text-dark-green">ICAT-certified safety</strong>, <strong className="text-dark-green">heavy-duty chassis designs</strong>, and <strong className="text-dark-green">100% spare parts availability</strong>, we ensure your ride is not just Silent, Smooth, and Sustainable, but also reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
