"use client"

import { assets, infoList } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Stagger the info items animation
            infoList.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
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
    <div id="about" ref={sectionRef} className="py-20 px-5 lg:px-8 xl:px-[8%] bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 right-4 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
        <div className="absolute bottom-8 left-4 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-50 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h4 className="text-gray-500 text-lg font-medium mb-2 tracking-wide uppercase">Profil Singkat</h4>
          </div>
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative group max-w-xs mx-auto lg:max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl p-1.5 shadow-xl">
                <Image
                  src={assets.user_image || "/placeholder.svg?height=400&width=320"}
                  alt="Ahnaf Zaki"
                  width={240}
                  height={320}
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2.5 -right-2.5 w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">10+</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-10">
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-5">
                Saya adalah mahasiswa Sistem Informasi dari Surabaya yang tertarik di bidang pengembangan web. Saya memiliki pengalaman membangun aplikasi web secara menyeluruh (frontend dan backend) melalui proyek kuliah dan magang. Saya siap belajar dan berkontribusi sebagai Software Developer di lingkungan profesional.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-5">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <div
                  key={index}
                  className={`group bg-gray-50 hover:bg-white rounded-lg p-3 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{
                    transitionDelay: `${800 + index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                        <Image
                          src={icon || "/placeholder.svg?height=20&width=20"}
                          alt={title}
                          className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          className={`mt-8 lg:mt-12 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-5 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-xs font-medium">Antusias dalam menciptakan solusi yang memberikan pengalaman terbaik bagi pengguna</span>
            <div className="w-5 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-120deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(-240deg);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
          animation-delay: -5s;
        }
      `}</style>
    </div>
  )
}

export default About