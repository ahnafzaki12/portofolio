"use client"

import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const Work = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleCards, setVisibleCards] = useState([])
    const sectionRef = useRef(null)



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        // Stagger the project cards animation
                        workData.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => [...prev, index])
                            }, index * 200)
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
        <div id="work" ref={sectionRef} className="py-20 px-5 lg:px-8 xl:px-[8%] bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-slow"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-slow-delayed"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h4 className="text-gray-500 text-lg font-medium mb-2 tracking-wide uppercase">Portfolio Saya</h4>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                                Proyek Terbaru
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-8"></div>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Halo! Selamat datang di portofolio saya. Di sini, kamu bisa melihat berbagai proyek yang saya kerjakan, mulai dari tampilan hingga logika server.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {workData.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{
                                transitionDelay: `${600 + index * 200}ms`,
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${project.bgImage || "/placeholder.svg?height=300&width=400"})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Hover Actions */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <a href={project.link} className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors duration-300">
                                        <Github className="w-5 h-5 text-white" />
                                    </a>
                                    <a href={project.linkDemo} className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors duration-300">
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </a>
                                </div>

                                {/* Project Number */}
                                <div className="absolute top-4 left-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                    {project.description}
                                </p>

                                {/* View Project Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group-hover:gap-3"
                                >
                                    <span>Lihat Proyek</span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                        </div>
                    ))}
                </div>

                {/* View All Projects CTA */}
                <div
                    className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Tertarik dengan proyek lainnya?</h3>
                        <p className="text-gray-600 mb-6">
                            Lihat GitHub saya untuk proyek lainnya dan kontribusi di dunia open-source.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/ahnafzaki12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium"
                            >
                                <Github className="w-5 h-5" />
                                Lihat GitHub
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium"
                                onClick={(e) => {
                                    e.preventDefault()
                                    const contactSection = document.querySelector("#contact")
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" })
                                    }
                                }}
                            >
                                Ayo Bekerja Sama
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes float-slow {
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

        @keyframes float-slow-delayed {
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

        .animate-float-slow {
          animation: float-slow 25s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 30s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>
        </div>
    )
}

export default Work
