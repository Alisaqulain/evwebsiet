'use client'

import Image from 'next/image'

export default function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Electric Power',
      description: 'Zero emissions, eco-friendly transportation powered by advanced battery technology.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80',
    },
    {
      icon: '🔋',
      title: 'Long Range',
      description: 'Extended battery life ensuring reliable daily commutes without frequent charging.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80',
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Built with premium safety features and robust construction for peace of mind.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
    {
      icon: '💚',
      title: 'Sustainable',
      description: 'Contributing to a greener future with every ride, reducing carbon footprint.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&q=80',
    },
    {
      icon: '🚀',
      title: 'Performance',
      description: 'Smooth acceleration and reliable performance for urban and suburban travel.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80',
    },
    {
      icon: '👑',
      title: 'Premium Quality',
      description: 'Royal-grade craftsmanship with attention to detail and superior comfort.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-green mb-4">
            Why Choose Royal Metro <span className="text-light-blue">EV</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of innovation, sustainability, and premium quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-green/5 to-light-green/5 rounded-lg border border-dark-green/20 hover:border-dark-green/40 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent"></div>
                <div className="absolute top-4 left-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


