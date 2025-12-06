"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Instagram, Facebook, Mail, ArrowUp, Heart } from "lucide-react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Show scroll to top button when user scrolls down
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/ahnafzaki12",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ahnaf-zaki/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ahnafzaki12/",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
  ]

  const quickLinks = [
    { name: "Beranda", href: "#top" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#work" },
    { name: "Kontak", href: "#contact" },
  ]

  return (
    <>
      <footer
        ref={sectionRef}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="relative z-10 px-5 lg:px-8 xl:px-[8%] py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="mb-6">
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Software Engineer dengan semangat membangun pengalaman terbaik menggunakan teknologi terkini.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">ahnafzaki.b@gmail.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Navigasi</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Ikuti Saya</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-gray-300 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {social.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className={`border-t border-gray-700 pt-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Bottom Section */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-center md:text-left">
              {/* Left Text */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-300 justify-center md:justify-start">
                <span>&copy; 2025 Ahnaf Zaki</span>
              </div>

              {/* Right Links */}
              <div className="flex justify-center md:justify-end items-center gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Kebijakan Privasi
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Syarat dan Ketentuan Layanan
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  )
}

export default Footer
