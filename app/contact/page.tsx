"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@smkaglobal.ca",
    description: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (437) 604-4329",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Ontario",
    description: "Connecting clients with qualified contractors across Ontario.",
  },
]

const projectTypes = [
  "Renovation",
  "Demolition",
  "Roofing",
  "Stairs",
  "Walls",
  "Custom Project",
  "Repairs",
  "Other",
]

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "Fast Response" },
  { icon: Users, label: "Vetted Contractors" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 bg-secondary">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-secondary to-secondary" />
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl text-balance">
              Start Your Construction Project Today
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80 sm:text-xl">
              Tell us about your project and we will connect you with qualified contractors 
              who can get the job done right.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Request a Quote
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below with your project details and we will get back to you 
                with contractor options.
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <badge.icon className="h-4 w-4 text-primary" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              {isSubmitted ? (
                <div className="mt-10 rounded-lg border border-primary/30 bg-primary/10 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Project Request Received!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. Our team will review your project and contact you 
                    within 24 hours with contractor recommendations.
                  </p>
                  <Button
                    className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        projectType: "",
                        timeline: "",
                        description: "",
                      })
                    }}
                  >
                    Submit Another Project
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="mt-2 bg-card border-border"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="mt-2 bg-card border-border"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="mt-2 bg-card border-border"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground">
                        Project Type <span className="text-primary">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formState.projectType}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-border bg-card px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formState.timeline}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-card px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-foreground">
                      Project Description <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formState.description}
                      onChange={handleChange}
                      className="mt-2 bg-card border-border resize-none"
                      placeholder="Tell us about your project: What work needs to be done? What's the scope? Any specific requirements or concerns?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Project Request
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Quick answers to questions about our process.
              </p>

              <div className="mt-10 space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    How does SMKA Global work?
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    You submit your project details through our form. We review your requirements 
                    and match you with qualified, vetted contractors from our network who specialize 
                    in your type of project. We then facilitate the connection and provide oversight 
                    throughout the project.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    How are your contractors vetted?
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    All contractors in our network are licensed, insured, and have undergone background 
                    checks. We verify their credentials, review their work history, and maintain ongoing 
                    quality standards.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    What types of projects do you handle?
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    We handle renovation, demolition, roofing, structural work, stairs, walls, repairs, 
                    and custom building projects. Whether residential or commercial, small or large, we 
                    can connect you with the right team.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    How quickly can I get started?
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    After you submit your project, our team reviews it within 24 hours. We then present 
                    you with contractor options, and once you approve, work can begin based on contractor 
                    availability - often within days for urgent projects.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Is there a fee for your service?
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Getting a quote and being matched with contractors is free. Our service fee is built 
                    into the project cost and covers our project management support, contractor vetting, 
                    and quality assurance throughout your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
