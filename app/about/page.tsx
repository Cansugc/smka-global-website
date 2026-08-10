import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Heart, Users, Shield, Award, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every contractor in our network is licensed, insured, and committed to maintaining the highest safety standards.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We ensure every project meets professional standards through our rigorous vetting and oversight process.",
  },
  {
    icon: Heart,
    title: "Client-Centered",
    description: "Your satisfaction drives everything we do. We listen, communicate clearly, and deliver on our promises.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "We build long-term relationships with both clients and contractors based on trust and mutual respect.",
  },
]

const team = [
  {
    name: "Michael Torres",
    role: "Founder & CEO",
    bio: "20+ years in construction project management and contractor relations.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Director",
    bio: "Expert in project coordination and quality assurance across diverse construction projects.",
  },
  {
    name: "James Chen",
    role: "Contractor Relations",
    bio: "Specializes in vetting, onboarding, and managing our network of qualified contractors.",
  },
  {
    name: "Linda Martinez",
    role: "Client Success Manager",
    bio: "Dedicated to ensuring every client has a seamless experience from start to finish.",
  },
]

const milestones = [
  { year: "2009", title: "Founded", description: "SMKA Global was established with a mission to connect clients with trusted contractors." },
  { year: "2013", title: "100+ Contractors", description: "Grew our network to over 100 vetted contractors across multiple specialties." },
  { year: "2018", title: "Nationwide Reach", description: "Expanded operations to serve clients across the entire country." },
  { year: "2024", title: "500+ Projects", description: "Celebrated completing over 500 successful construction projects." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/team-meeting.jpg"
            alt="SMKA Global team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/60" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Connecting Clients with Trusted Construction Professionals
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              SMKA Global bridges the gap between clients and qualified contractors, 
              ensuring every project is completed with professionalism and care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Making Construction Simple and Reliable
              </h2>
              <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At SMKA Global, we understand that finding the right contractor can be 
                  challenging. That is why we created a platform that takes the guesswork 
                  out of construction projects by connecting you with pre-vetted, qualified 
                  professionals.
                </p>
                <p>
                  When you submit a project to us, we do not just hand you a list of names. 
                  We carefully review your requirements, match you with specialists who have 
                  proven expertise in your specific type of project, and provide oversight 
                  throughout the process.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/custom-build.jpg"
                  alt="Completed custom project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-xl">
                <Target className="h-8 w-8 text-primary-foreground mb-2" />
                <p className="text-sm font-semibold text-primary-foreground">Our Vision</p>
                <p className="text-xs text-primary-foreground/80 mt-1">Excellence in every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Values
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Principles That Guide Us
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              These core values shape every project and relationship we build.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-6 bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Journey
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Building Trust Since 2009
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Key milestones in building a trusted construction network.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-8">
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-6 top-14 h-full w-px bg-gradient-to-b from-primary/40 to-border" />
                  )}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="pt-1 pb-4">
                    <p className="text-sm text-primary font-semibold">{milestone.year}</p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">{milestone.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Team
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the People Behind SMKA Global
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Dedicated professionals committed to your project success.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-construction.jpg"
            alt="Construction site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent/90" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Let us connect you with the right contractors for your construction needs.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link href="/contact">
                  Get in Touch
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
