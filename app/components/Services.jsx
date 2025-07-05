"use client"

import { serviceData } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Stagger the service cards animation
            serviceData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id="services"
      ref={sectionRef}
      className="py-20 px-5 lg:px-8 xl:px-[8%] bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-gray-500 text-lg font-medium mb-2 tracking-wide uppercase">Yang saya tawarkan</h4>
          </div>
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
               Layanan Saya
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-8"></div>
          </div>
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Fullstack Developer dengan pengalaman membangun aplikasi web menggunakan React.js, Laravel, dan MySQL.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-gray-300/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${600 + index * 150}ms`,
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src={icon || ""}
                      alt={title}
                      className="w-8 h-8 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {description}
                </p>

                {/* Read More Link */}
                <a
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group-hover:gap-3"
                >
                  <span>Selengkapnya</span>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Siap memulai proyek Anda?</h3>
            <p className="text-gray-600 mb-6">
              Mari kita diskusikan bagaimana saya bisa membantu mewujudkan ide Anda dengan teknologi web modern.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
             Hubungi Saya
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        /* Custom hover effects */
        .group:hover .group-hover\\:gap-3 {
          gap: 0.75rem;
        }
      `}</style>
    </div>
  )
}

export default Services
