"use client"

import { useEffect, useRef } from "react"
import SectionHeading from "./section-heading"
import { Code, Globe, Monitor, FileText, Layers } from "lucide-react"
import { motion } from "framer-motion"

export default function SkillsSection() {
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

  const skillCategories = [
    {
      name: "Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Frontend Development", level: "Good" },
        { name: "Backend Development", level: "Moderate" },
        { name: "WordPress", level: "Excellent" },
      ],
    },
    {
      name: "Programming",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "C", level: "Very good" },
        { name: "Python", level: "Very good" },
      ],
    },
    {
      name: "Computer Skills",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "Computer Basics", level: "Excellent" },
        { name: "Office Applications", level: "Good" },
      ],
    },
  ]

  const languages = [
    { name: "Bengali", level: "Fluent" },
    { name: "English", level: "Good" },
  ]

  const hobbies = ["Cybersecurity", "Programming", "Language learning"]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Skills & Languages" subtitle="Technical abilities and communication skills" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Layers className="h-6 w-6 mr-2" />
              <h3 className="text-2xl font-bold">💻 Skills</h3>
            </div>

            <motion.div
              className="space-y-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600"
                  variants={item}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full mr-3">{category.icon}</div>
                    <h4 className="text-lg font-bold">{category.name}</h4>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded">
                            {skill.level}
                          </span>
                          <div className="ml-3 bg-gray-200 dark:bg-gray-600 w-24 h-2 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-black dark:bg-white"
                              initial={{ width: 0 }}
                              whileInView={{
                                width:
                                  skill.level === "Excellent"
                                    ? "100%"
                                    : skill.level === "Very good"
                                      ? "85%"
                                      : skill.level === "Good"
                                        ? "70%"
                                        : "50%",
                              }}
                              transition={{ duration: 1, delay: 0.3 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">🌍 Languages</h3>
                </div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center py-3 border-b last:border-0 border-gray-100 dark:border-gray-600"
                      variants={item}
                    >
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{lang.level}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">💡 Hobbies & Interests</h3>
                </div>

                <motion.div
                  className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby, index) => (
                      <motion.span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm"
                        variants={item}
                      >
                        {hobby}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
