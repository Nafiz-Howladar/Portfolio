"use client"

import { useEffect, useRef } from "react"
import SectionHeading from "./section-heading"
import { Briefcase, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ExperienceSection() {
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

  const experiences = [
    {
      title: "Founder & CEO",
      company: "GENIX.IT",
      period: "2023 – Present",
      description: "A digital marketing agency providing:",
      responsibilities: [
        "Social media management",
        "Web development",
        "Graphic design (logo, banner, poster)",
        "Digital content creation",
        "Branding and marketing strategy",
        "SaaS project planning",
        "Team management & client acquisition",
      ],
      link: "https://genix-it.com",
    },
    {
      title: "Web Developer",
      company: "RAW Fashion World",
      period: "2023 – 2024",
      description: "Developed a full e-commerce website using WordPress",
      link: "https://rawfashionworldbd.com",
    },
    {
      title: "Web Developer",
      company: "London Fighters Community Club",
      period: "2020 – 2021",
      description: "Built the club's cricket team website in the UK using WordPress",
      link: "https://londonfighterscommunityclub.com",
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

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  return (
    <section id="experience" ref={sectionRef} className="py-20 dark:bg-gray-900 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Work Experience" subtitle="Professional journey and achievements" />

        <div className="flex items-center mb-6">
          <Briefcase className="h-6 w-6 mr-2" />
          <h3 className="text-2xl font-bold">🌐 Work Experience</h3>
        </div>

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600"
              variants={item}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold">
                    {exp.title} – {exp.company}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                </div>
                {exp.link && (
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm mt-2 md:mt-0 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit Website
                  </Link>
                )}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>

              {exp.responsibilities && (
                <motion.ul
                  className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li key={idx} variants={listItem}>
                      {resp}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
