"use client"

import { useEffect, useRef } from "react"
import SectionHeading from "./section-heading"
import ServiceCard from "./service-card"
import { Globe, Share2, FileText, PenTool, Layers } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Website Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
    },
    {
      icon: <Share2 className="h-10 w-10" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to increase brand awareness and engage with your target audience.",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Content Creation",
      description: "Compelling content that tells your story, engages your audience, and drives conversions.",
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand message and enhance your marketing materials.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "SaaS Planning",
      description: "Strategic planning and development roadmaps for Software as a Service (SaaS) products.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 fade-in-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Services" subtitle="What I can do for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
