"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /* scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* nav links */
  const navItems = [
    { href: "#top", label: "Beranda" },
    { href: "#about", label: "Tentang Saya" },
    { href: "#services", label: "Layanan" },
    { href: "#work", label: "Portofolio" },
    { href: "#contact", label: "Kontak" },
  ]

  /* smooth scroll helper */
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* background header gradient */}
      <div className="fixed top-0 right-0 w-11/12 -z-10">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* ---------------- NAVBAR ---------------- */}
      <nav
        className={`fixed top-0 left-0 w-full px-4 lg:px-6 xl:px-[6%] py-2 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="group hover:scale-105 transition-transform duration-300"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#top")
          }}
        >
          <Image
            src={assets.logo || "/placeholder.svg"}
            className="w-20 lg:w-24 cursor-pointer mr-8 transition-opacity duration-300 group-hover:opacity-80" // 👈 changed
            alt="Logo"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8"> {/* 👈 changed gap */}
          {navItems.map((item, i) => (
            <li key={item.href} className="animate-fade-in-down" style={{ animationDelay: `${i * 0.1}s` }}>
              <a
                href={item.href}
                className="relative text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium text-[11px] lg:text-sm group" // 👈 changed font size
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Contact button – desktop */}
        <div className="hidden md:block animate-fade-in-down" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 text-[11px] font-medium" // 👈 changed paddings & font
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#contact")
            }}
          >
            Hubungi saya
            <Image
              src={assets.arrow_icon || "/placeholder.svg"}
              className="w-3 transition-transform duration-300 group-hover:translate-x-1"
              alt="Arrow"
            />
          </a>
        </div>

        {/* Trigger burger – mobile */}
        {!isMobileMenuOpen && (
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </nav>

      {/* ---------------- MOBILE MENU ---------------- */}
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`} // 👈 changed width
      >
        {/* button X */}
        <button
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="p-6 pt-20">
          <ul className="space-y-6">
            {navItems.map((item, i) => (
              <li key={item.href} className="animate-slide-in-right" style={{ animationDelay: `${i * 0.1}s` }}>
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium text-sm py-2 border-b border-gray-100 hover:border-gray-300" // 👈 smaller font
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg text-sm font-medium"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
            >
              Hubungi saya
              <Image
                src={assets.arrow_icon || "/placeholder.svg"}
                className="w-3 transition-transform duration-300 group-hover:translate-x-1"
                alt="Arrow"
              />
            </a>
          </div>
        </div>
      </div>

      {/* global animations */}
      <style jsx global>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out forwards;
          opacity: 0;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}

export default Navbar
