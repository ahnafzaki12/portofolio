"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Sparkles } from "lucide-react"
import { assets } from "@/assets/assets"
import Image from "next/image"


export const toolsData = [
    {
        category: "Frontend Development",
        tools: [
            { name: "HTML", icon: 'html', color: "from-orange-400 to-orange-600" },
            { name: "CSS", icon: 'css', color: "from-blue-400 to-blue-600" },
            { name: "JavaScript", icon: 'javascript', color: "from-yellow-400 to-yellow-600" },
            { name: "TypeScript", icon: 'typescript', color: "from-sky-400 to-sky-600" },
            { name: "React.js", icon: 'react', color: "from-cyan-400 to-cyan-600" },
            { name: "Next.js", icon: 'nextjs', color: "from-gray-700 to-gray-900" },
            { name: "Tailwind CSS", icon: 'tailwind', color: "from-teal-400 to-teal-600" },
            { name: "Vite", icon: 'vite', color: "from-purple-400 to-purple-600" },
        ],
    },
    {
        category: "Backend Development",
        tools: [
            { name: "Node.js", icon: 'nodejs', color: "from-green-400 to-green-600" },
            { name: "Express.js", icon: 'express', color: "from-gray-600 to-gray-800" },
            { name: "Laravel", icon: 'laravel', color: "from-red-400 to-red-600" },
            { name: "PHP", icon: 'php', color: "from-indigo-400 to-indigo-600" },
            { name: "Python", icon: 'python', color: "from-blue-500 to-blue-700" },
            { name: "FastAPI", icon: 'fastapi', color: "from-emerald-400 to-emerald-600" },
        ],
    },
    {
        category: "Database & Tools",
        tools: [
            { name: "MySQL", icon: 'mysql', color: "from-blue-400 to-blue-600" },
            { name: "PostgreSQL", icon: 'postgresql', color: "from-blue-500 to-blue-700" },
            { name: "MongoDB", icon: 'mongodb', color: "from-green-500 to-green-700" },
            { name: "GitHub", icon: 'github', color: "from-gray-700 to-gray-900" },
            { name: "Figma", icon: 'figma', color: "from-purple-400 to-purple-600" },
        ],
    },
];

const Tools = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleCategories, setVisibleCategories] = useState([])
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        // Stagger the categories animation
                        toolsData.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCategories((prev) => [...prev, index])
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
        <div id="tools" ref={sectionRef} className="py-20 px-5 lg:px-8 xl:px-[8%] bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-slow"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-slow-delayed"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h4 className="text-gray-500 text-lg font-medium mb-2 tracking-wide uppercase">Teknologi</h4>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                                Tools & Technologies
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-8"></div>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Teknologi dan tools yang saya gunakan untuk mengembangkan solusi web modern dan efisien.
                        </p>
                    </div>
                </div>

                {/* Tools Categories */}
                <div className="space-y-12">
                    {toolsData.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`transition-all duration-1000 ${visibleCategories.includes(categoryIndex)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                            style={{
                                transitionDelay: `${600 + categoryIndex * 200}ms`,
                            }}
                        >
                            {/* Category Title */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <Code2 className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                            </div>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.tools.map((tool, toolIndex) => (
                                    <div
                                        key={toolIndex}
                                        className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200"
                                    >
                                        {/* Icon */}
                                        <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 relative w-12 h-12">
                                            {assets[tool.icon] ? (
                                                <Image
                                                    src={assets[tool.icon]}
                                                    alt={tool.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="text-4xl">{tool.icon}</div>
                                            )}
                                        </div>

                                        {/* Tool Name */}
                                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                            {tool.name}
                                        </h4>

                                        {/* Hover Gradient Effect */}
                                        <div
                                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                        />

                                        {/* Sparkle Effect on Hover */}
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Sparkles className="w-3 h-3 text-gray-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Selalu belajar teknologi baru</h3>
                        <p className="text-gray-600 mb-6">
                            Saya terus mengembangkan skill dan mengikuti perkembangan teknologi terbaru untuk memberikan solusi terbaik.
                        </p>
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium"
                            onClick={(e) => {
                                e.preventDefault()
                                const workSection = document.querySelector("#work")
                                if (workSection) {
                                    workSection.scrollIntoView({ behavior: "smooth" })
                                }
                            }}
                        >
                            Lihat Proyek Saya
                            <Code2 className="w-4 h-4" />
                        </a>
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

export default Tools