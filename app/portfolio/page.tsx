"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Home, Hammer, Building2, Wrench, Quote, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const categories = ["All", "Renovation", "Demolition", "Roofing", "Repairs", "Custom"]

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Renovation",
    location: "Austin, TX",
    description: "Complete kitchen remodel with custom cabinetry, granite countertops, and modern appliances.",
    icon: Home,
    image: "/images/renovation.jpg",
  },
  {
    id: 2,
    title: "Commercial Building Demolition",
    category: "Demolition",
    location: "Houston, TX",
    description: "Safe demolition of a 15,000 sq ft commercial building with full debris removal.",
    icon: Hammer,
    image: "/images/hero-construction.jpg",
  },
  {
    id: 3,
    title: "Residential Roof Replacement",
    category: "Roofing",
    location: "Dallas, TX",
    description: "Full roof replacement with architectural shingles and improved ventilation system.",
    icon: Building2,
    image: "/images/roofing.jpg",
  },
  {
    id: 4,
    title: "Historic Home Restoration",
    category: "Renovation",
    location: "San Antonio, TX",
    description: "Careful restoration of a 1920s historic home preserving original character.",
    icon: Home,
    image: "/images/completed-project.jpg",
  },
  {
    id: 5,
    title: "Foundation Repair Project",
    category: "Repairs",
    location: "Fort Worth, TX",
    description: "Comprehensive foundation repair using pier and beam method for structural stability.",
    icon: Wrench,
    image: "/images/hero-construction.jpg",
  },
  {
    id: 6,
    title: "Custom Outdoor Living Space",
    category: "Custom",
    location: "Austin, TX",
    description: "Custom deck, pergola, and outdoor kitchen construction for a stunning backyard.",
    icon: Square,
    image: "/images/custom-build.jpg",
  },
]

const testimonials = [
  {
    quote: "SMKA Global connected us with an amazing contractor for our kitchen renovation. The process was seamless and the results exceeded our expectations.",
    author: "Jennifer M.",
    role: "Homeowner, Austin",
  },
  {
    quote: "Professional, reliable, and easy to work with. They matched us with the perfect team for our commercial demolition project.",
    author: "Robert T.",
    role: "Property Developer, Houston",
  },
  {
    quote: "From start to finish, they handled everything. The contractor they provided was licensed, insured, and did exceptional work on our roof.",
    author: "David & Lisa K.",
    role: "Homeowners, Dallas",
  },
]

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "$25M+", label: "Project Value Managed" },
  { value: "200+", label: "Contractors in Network" },
  { value: "98%", label: "Client Satisfaction" },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/completed-project.jpg"
            alt="Completed project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/60" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Projects
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Completed Work That Speaks for Itself
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              Browse our portfolio of successful construction projects completed through 
              our network of qualified contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Real feedback from clients who trusted us with their projects.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote className="h-10 w-10 text-primary/30 mb-6" />
                <p className="text-foreground leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/custom-build.jpg"
            alt="Custom build project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent/90" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Add Your Project to Our Portfolio?
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Tell us about your construction needs and let us connect you with the right team.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
