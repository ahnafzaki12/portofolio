"use client"

import React from "react"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown, Download, Mail } from "lucide-react"

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleContactClick = (e) => {
        e.preventDefault()
        const contactSection = document.querySelector("#contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div id="top" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-5 lg:px-8 xl:px-[8%] py-20">
                {/* Profile Image */}
                <div
                    className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="relative inline-block">
                        <Image
  src={assets.profile_img || "/placeholder.svg?height=128&width=128"}
  alt="Ahnaf Zaki"
  width={128}
  height={128}
  className="
    rounded-full w-32 h-32
    object-cover object-[50%_15%]   /* 50% X, 15% Y → turun ~15 % */
    mx-auto shadow-2xl ring-4 ring-white
    transition-transform duration-300 hover:scale-105
  "
/>
                        <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"></div>
                    </div>
                </div>

                {/* Greeting */}
                <div
                    className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-6 text-gray-700 font-medium">
                        Hi! Saya Ahnaf Zaki
                        <Image
                            src={assets.hand_icon || "/placeholder.svg?height=24&width=24"}
                            alt="Wave"
                            className="w-6 h-6 animate-wave"
                        />
                    </h3>
                </div>

                {/* Main Heading */}
                <div
                    className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Fullstack web developer
                        </span>
                        <br />
                        <span className="text-gray-600 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal">
                            Fullstack Web Developer dengan ketertarikan pada pengembangan sistem berbasis teknologi terbaru
                        </span>

                    </h1>
                </div>

                {/* Description */}
                <div
                    className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                        Mahasiswa Sistem Informasi dengan fokus pada pengembangan web fullstack, aktif mengerjakan proyek akademik dan mandiri untuk membangun aplikasi end-to-end.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div
                    className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="#contact"
                            onClick={handleContactClick}
                            className="group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 font-medium text-lg min-w-[200px] justify-center"
                        >
                            <Mail className="w-5 h-5" />
                            Hubungi saya
                            <div className="w-2 h-2 bg-white rounded-full transition-transform duration-300 group-hover:translate-x-1"></div>
                        </a>

                        <a
                            href="/CV_M Ahnaf Zaki.pdf"
                            download
                            className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-3 font-medium text-lg min-w-[200px] justify-center"
                        >
                            <Download className="w-5 h-5" />
                            CV Saya
                            <div className="w-2 h-2 bg-current rounded-full transition-transform duration-300 group-hover:translate-y-1"></div>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <a href="#about" className="flex flex-col items-center text-gray-400">
                        <p className="text-sm mb-2 font-medium">Scroll to explore</p>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
            </div>

            <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
        </div>
    )
}

export default Header
