"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import SectionHeading from "./section-heading"
import { Code, BookOpen, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="About Me" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image src="/nafiz-profile.png" alt="Nafiz Howladar" fill className="object-cover" />
            </div>
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <p>Computer Science Student</p>
              <p className="text-gray-600 dark:text-gray-300">
                Currently pursuing my degree with a focus on web technologies and software development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Experience</h3>
              </div>
              <p>Founder of GENIX.IT</p>
              <p className="text-gray-600 dark:text-gray-300">
                Leading a digital marketing and technology service agency, providing solutions to clients.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Tech Stack</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                <li className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">C</li>
                <li className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">Python</li>
                <li className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">WordPress</li>
                <li className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">Frontend</li>
                <li className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">Backend</li>
                <li className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center border-l-4 border-black dark:border-white pl-6 py-4 italic">
          <p className="text-xl">"Driven by passion, guided by purpose."</p>
        </div>
      </div>
    </section>
  )
}
