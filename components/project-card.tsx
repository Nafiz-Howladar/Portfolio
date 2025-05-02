import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  github?: string
  tags: string[]
}

export default function ProjectCard({ title, description, link, github, tags }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-sm border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:underline"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Visit Site
          </Link>
        )}

        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:underline"
          >
            <Github className="h-4 w-4 mr-1" />
            Source Code
          </Link>
        )}
      </div>
    </div>
  )
}
