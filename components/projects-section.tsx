"use client"

import { useEffect, useRef } from "react"
import SectionHeading from "./section-heading"
import ProjectCard from "./project-card"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "RAW Fashion World",
      description:
        "E-commerce website built with WordPress for a fashion brand, featuring product catalog and online shopping.",
      link: "#",
      tags: ["WordPress", "E-commerce", "WooCommerce", "Web Design"],
    },
    {
      title: "London Fighters Community Club",
      description:
        "Website for a sports community club, featuring event calendar, member profiles, and community resources.",
      link: "#",
      tags: ["WordPress", "Community", "Sports", "Web Development"],
    },
    {
      title: "GENIX.IT",
      description:
        "Digital marketing and technology service agency website, showcasing services, portfolio, and client testimonials.",
      link: "https://genix-it.com",
      tags: ["Digital Marketing", "Tech Services", "Agency", "Ongoing"],
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 dark:bg-gray-900 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Some of my recent work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
