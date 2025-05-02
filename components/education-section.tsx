"use client"

import { useEffect, useRef } from "react"
import SectionHeading from "./section-heading"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function EducationSection() {
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

  const education = [
    {
      degree: "BSc in Computer Science Engineering",
      institution: "Daffodil Institute of IT, Dhaka",
      period: "Aug 2023 - Present",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "H.S.C.",
      institution: "Mohammadpur Govt. College",
      period: "2020 - 2022",
      gpa: "GPA 5.00",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      degree: "S.S.C.",
      institution: "Rayer Bazar High School",
      period: "2018 - 2020",
      gpa: "GPA 4.94",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const certifications = [
    {
      name: "IELTS",
      details: "Overall Band: 6.0",
    },
    {
      name: "SSC",
      details: "GPA 4.94",
    },
    {
      name: "HSC",
      details: "GPA 5.00",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" ref={sectionRef} className="py-20 dark:bg-gray-900 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Education & Certifications" subtitle="Academic background and achievements" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 mr-2" />
              <h3 className="text-2xl font-bold">🎓 Education</h3>
            </div>

            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600"
                  variants={item}
                >
                  <div className="flex items-start">
                    <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full mr-4">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold">{item.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.period}</p>
                      {item.gpa && <p className="text-black dark:text-white font-medium mt-1">{item.gpa}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 mr-2" />
              <h3 className="text-2xl font-bold">🧾 Certifications</h3>
            </div>

            <motion.div
              className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center py-3 border-b last:border-0 border-gray-100 dark:border-gray-600"
                  variants={item}
                >
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-gray-600 dark:text-gray-300">{cert.details}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
