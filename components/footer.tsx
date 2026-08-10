import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Renovation", href: "/services#renovation" },
    { name: "Demolition", href: "/services#demolition" },
    { name: "Roofing", href: "/services#roofing" },
    { name: "Custom Projects", href: "/services#custom-projects" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.jpeg"
                alt="SMKA Global Logo"
                width={160}
                height={50}
                className="h-14 w-auto rounded-lg bg-white p-2"
              />
            </Link>
            <p className="mt-6 text-sm text-accent-foreground/70 leading-relaxed max-w-xs">
              Connecting clients with qualified contractors for construction, renovation, and custom building projects.
            </p>
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-foreground/10 text-accent-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Navigation</h3>
            <ul className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Services</h3>
            <ul className="mt-6 space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                contact@smkaglobal.com
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                Available Nationwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-accent-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-foreground/60">
            &copy; {new Date().getFullYear()} SMKA Global. All rights reserved.
          </p>
          <p className="text-sm text-accent-foreground/60">
            Licensed & Insured Contractors
          </p>
        </div>
      </div>
    </footer>
  )
}
