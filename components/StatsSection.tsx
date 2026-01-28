'use client'

import { useEffect, useState } from 'react'

export default function StatsSection() {
  const [counts, setCounts] = useState({
    vehicles: 0,
    customers: 0,
    cities: 0,
    emissions: 0,
  })

  const stats = [
    { label: 'Vehicles Sold', value: counts.vehicles, suffix: '+', color: 'text-dark-green' },
    { label: 'Happy Customers', value: counts.customers, suffix: '+', color: 'text-light-green' },
    { label: 'Cities Served', value: counts.cities, suffix: '+', color: 'text-light-blue' },
    { label: 'CO₂ Saved (tons)', value: counts.emissions, suffix: '+', color: 'text-light-green' },
  ]

  useEffect(() => {
    const targets = { vehicles: 5000, customers: 10000, cities: 50, emissions: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        vehicles: Math.floor(targets.vehicles * progress),
        customers: Math.floor(targets.customers * progress),
        cities: Math.floor(targets.cities * progress),
        emissions: Math.floor(targets.emissions * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, increment)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-dark-green/10 to-light-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl sm:text-6xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


