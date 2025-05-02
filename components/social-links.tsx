import type React from "react"
import { Facebook, Instagram, Github, Twitter, Linkedin, Globe, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      {icon}
      <span className="sr-only md:not-sr-only">{label}</span>
    </Link>
  )
}

export function SocialLinks({ vertical = false }: { vertical?: boolean }) {
  const socialLinks = [
    {
      href: "https://www.facebook.com/heyitsnafiz21",
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/heyits_nafiz/",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
    },
    {
      href: "https://github.com/Nafiz-Howladar",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: "https://x.com/nafiz_howladar",
      icon: <Twitter className="h-5 w-5" />,
      label: "X",
    },
    {
      href: "https://www.linkedin.com/in/nafiz-howladar-54a711326/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://genix-it.com",
      icon: <Globe className="h-5 w-5" />,
      label: "GENIX.IT",
    },
    {
      href: "https://wa.me/8801705065780",
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
    },
    {
      href: "https://t.me/ItsNafiz",
      icon: <Send className="h-5 w-5" />,
      label: "Telegram",
    },
  ]

  return (
    <div className={`flex ${vertical ? "flex-col items-start gap-2" : "flex-wrap items-center justify-center gap-4"}`}>
      {socialLinks.map((link) => (
        <SocialLink key={link.label} href={link.href} icon={link.icon} label={link.label} />
      ))}
    </div>
  )
}
