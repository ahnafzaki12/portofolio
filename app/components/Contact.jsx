"use client"
import React from "react"
import { useState, useEffect, useRef } from "react"
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

const Contact = () => {
    const [result, setResult] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [focusedField, setFocusedField] = useState("")
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

        return () => observer.disconnect()
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        setResult("Mengirim....")

        const formData = new FormData(event.target)
        formData.append("access_key", "52bf35eb-4085-4969-a457-521b89d190d3")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                setResult("Formulir Anda Telah Terkirim")
                    ; (event.target).reset()
                setFocusedField("")
            } else {
                console.log("Error", data)
                setResult(data.message)
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
            setTimeout(() => setResult(""), 5000)
        }
    }

    return (
        <div
            id="contact"
            ref={sectionRef}
            className="py-20 px-5 lg:px-8 xl:px-[8%] bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"></div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full mix-blend-multiply filter blur-xl animate-float-contact"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-100/50 to-indigo-100/50 rounded-full mix-blend-multiply filter blur-xl animate-float-contact-delayed"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h4 className="text-gray-600 text-lg font-medium mb-2 tracking-wide uppercase">Connect with me</h4>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                               Hubungi Saya
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                           Saya senang mendengar dari Anda! Jika Anda memiliki pertanyaan, komentar, atau masukan, silakan isi formulir di bawah ini.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div
                        className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <div className="space-y-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mari mulai percakapan</h3>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Saya selalu terbuka untuk peluang baru dan proyek menarik. Jika Anda memiliki pertanyaan atau sekadar ingin menyapa, saya akan berusaha membalas secepat mungkin!
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Email</p>
                                            <p className="text-gray-900 font-medium">ahnafzaki.b@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Phone</p>
                                            <p className="text-gray-900 font-medium">+62 859 3037 3350</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Location</p>
                                            <p className="text-gray-900 font-medium">Surabaya, Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                    >
                        <form onSubmit={onSubmit}>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Masukkan nama anda"
                                                required
                                                name="name"
                                                className={`w-full px-4 py-4 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ${focusedField === "name" ? "border-blue-400 bg-gray-100" : "border-gray-300"
                                                    }`}
                                                onFocus={() => setFocusedField("name")}
                                                onBlur={() => setFocusedField("")}
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="Masukkan email anda"
                                                required
                                                name="email"
                                                className={`w-full px-4 py-4 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ${focusedField === "email" ? "border-blue-400 bg-gray-100" : "border-gray-300"
                                                    }`}
                                                onFocus={() => setFocusedField("email")}
                                                onBlur={() => setFocusedField("")}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            rows={6}
                                            placeholder="Masukkan pesan anda"
                                            name="message"
                                            required
                                            className={`w-full px-4 py-4 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none ${focusedField === "message" ? "border-blue-400 bg-gray-100" : "border-gray-300"
                                                }`}
                                            onFocus={() => setFocusedField("message")}
                                            onBlur={() => setFocusedField("")}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="group w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                Kirim Sekarang
                                                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </button>

                                    {/* Result Message */}
                                    {result && (
                                        <div
                                            className={`flex items-center gap-2 p-4 rounded-xl transition-all duration-300 ${result.includes("Terkirim")
                                                    ? "bg-green-100 border border-green-300 text-green-700"
                                                    : result.includes("Mengirim")
                                                        ? "bg-blue-100 border border-blue-300 text-blue-700"
                                                        : "bg-red-100 border border-red-300 text-red-700"
                                                }`}
                                        >
                                            {result.includes("Terkirim") ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : result.includes("Mengirim") ? (
                                                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <AlertCircle className="w-5 h-5" />
                                            )}
                                            <p className="font-medium">{result}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes float-contact {
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

        @keyframes float-contact-delayed {
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

        .animate-float-contact {
          animation: float-contact 20s ease-in-out infinite;
        }

        .animate-float-contact-delayed {
          animation: float-contact-delayed 25s ease-in-out infinite;
          animation-delay: -8s;
        }
      `}</style>
        </div>
    )
}

export default Contact