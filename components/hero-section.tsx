"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { SocialLinks } from "./social-links"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center pt-16 fade-in-section">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-lg">
            <Image src="/nafiz-profile.png" alt="Nafiz Howladar" fill className="object-cover" priority />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nafiz Howladar</h1>
          <p className="text-xl md:text-2xl mb-6">Web Developer | Digital Marketer | Founder of GENIX.IT</p>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Computer Science student with a passion for web development, digital marketing, and startup building.
            Founder of GENIX.IT.
          </p>

          <div className="mb-8">
            <Link
              href="#projects"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              View My Work
            </Link>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </section>
  )
}
