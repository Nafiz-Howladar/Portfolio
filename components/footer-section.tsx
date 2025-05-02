"use client"

import { useEffect, useRef } from "react"
import { SocialLinks } from "./social-links"

export default function FooterSection() {
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
    <footer ref={sectionRef} className="py-12 bg-gray-100 dark:bg-gray-900 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
          <SocialLinks />
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Nafiz Howladar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
