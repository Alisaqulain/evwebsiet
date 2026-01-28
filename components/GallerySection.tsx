'use client'

import Image from 'next/image'

export default function GallerySection() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Electric rickshaw on city street',
      title: 'City Mobility',
    },
    {
      src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
      alt: 'Electric vehicle charging',
      title: 'Eco-Friendly',
    },
    {
      src: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&q=80',
      alt: 'Modern electric vehicle',
      title: 'Modern Design',
    },
    {
      src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      alt: 'Electric vehicle in traffic',
      title: 'Urban Transport',
    },
    {
      src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
      alt: 'Electric vehicle battery',
      title: 'Advanced Battery',
    },
    {
      src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      alt: 'Sustainable transportation',
      title: 'Sustainable Future',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-green mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium e-rickshaws in action and see why thousands choose Royal Metro EV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-lg overflow-hidden border border-dark-green/20 hover:border-dark-green/40 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
