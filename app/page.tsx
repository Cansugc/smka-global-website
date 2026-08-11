import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hammer, Building2, Wrench, Shield, CheckCircle2, ClipboardList, Users, HardHat, Home, Star, Layers, Square, PenTool, Clock, Award, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Home,
    title: "Renovation",
    description: "Transform your space with professional renovation services.",
    image: "/images/renovation.jpg",
  },
  {
    icon: Building2,
    title: "Demolition",
    description: "Safe and efficient demolition for homes, offices, and structures.",
    image: "/images/demolition.jpg",
  },
  {
    icon: HardHat,
    title: "Roofing",
    description: "Roof installation, repair, and maintenance for long-lasting protection.",
    image: "/images/roofing.jpg",
  },
  {
    icon: Layers,
    title: "Stairs",
    description: "Custom stair design and construction for all types of properties.",
    image: "/images/stairs.jpg",
  },
  {
    icon: Square,
    title: "Walls",
    description: "Build, repair, or modify walls with quality craftsmanship.",
    image: "/images/walls.jpg",
  },
  {
    icon: PenTool,
    title: "Custom Projects",
    description: "From concept to completion, we build your vision.",
    image: "/images/custom-build.jpg",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description: "Quick and reliable repair services for any issue.",
    image: "/images/completed-project.jpg",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project management for a smooth experience.",
    image: "/images/project-management.jpg",
  },
]

const featureBar = [
  { icon: Users, value: "500+", label: "Projects Completed" },
  { icon: Shield, value: "Licensed & Insured", label: "Your project is in safe hands" },
  { icon: HardHat, value: "Skilled Professionals", label: "Trusted contractors & workers" },
  { icon: Clock, value: "On-Time Delivery", label: "We get the job done right" },
]

const howItWorks = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Submit Your Project",
    description: "Share your construction needs through our simple project request form.",
  },
  {
    step: "02",
    icon: CheckCircle2,
    title: "We Review It",
    description: "Our team carefully assesses your requirements and project scope.",
  },
  {
    step: "03",
    icon: Users,
    title: "We Connect the Right Team",
    description: "We match you with vetted contractors who specialize in your project type.",
  },
  {
    step: "04",
    icon: HardHat,
    title: "Project Gets Done",
    description: "Your project is completed to the highest professional standards.",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All contractors in our network are fully licensed and carry comprehensive insurance coverage.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We stand behind every project with our satisfaction guarantee and quality standards.",
  },
  {
    icon: Users,
    title: "Vetted Professionals",
    description: "Rigorous background checks and skill verification for every contractor we partner with.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your timeline and work diligently to deliver projects on schedule.",
  },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Toronto",
    quote: "SMKA Global connected us with an amazing renovation team. Our kitchen looks absolutely stunning and the project was completed on time and within budget.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Property Developer",
    quote: "I've worked with SMKA Global on multiple projects. Their contractor network is top-notch and their project management support makes everything seamless.",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "Business Owner",
    quote: "The roofing team they connected us with was professional and efficient. Great communication throughout the entire process.",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Split Layout */}
      <section className="pt-24 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Left - Text Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">Trusted by 500+ clients</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
                Building Better Projects Through Trusted Connections
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
                SMKA Global connects clients with qualified and vetted contractors for projects
                of different sizes and requirements. We focus on making the process simple,
                organized, and reliable from the first request to project completion.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Share your project details with us, and we&apos;ll help identify suitable
                professionals from our network. Our goal is to create efficient connections,
                clear communication, and a smoother project experience.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md px-8">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-background text-foreground border-foreground/20 hover:bg-foreground hover:text-background px-8">
                  <Link href="/services">Start Your Project</Link>
                </Button>
              </div>
            </div>
            
            {/* Right - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-construction.jpg"
                  alt="Modern construction site with crane"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bar */}
      <section className="bg-accent py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {featureBar.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-accent-foreground">{item.value}</p>
                  <p className="text-xs text-accent-foreground/70">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-secondary/50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Full-Service Construction Solutions
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From small repairs to large-scale builds, we connect you with the right team for every type of construction project.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-background scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Simple Process, Professional Results
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We make it easy to get your construction project started and completed with trusted professionals.
            </p>
          </div>
          
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item, index) => (
                <div key={item.step} className="relative text-center group">
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
                  )}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary border border-border group-hover:border-primary/30 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">Step {item.step}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SMKA Global */}
      <section className="py-24 sm:py-32 bg-beige">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Professional construction team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-primary-foreground">15+</p>
                <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose SMKA Global
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We carefully vet every contractor and worker in our network. Your safety, 
                satisfaction, and project success are our top priorities.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed">
              Tell us about your construction needs and we will connect you with the right team 
              to get the job done right.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-8">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-background text-foreground border-foreground/30 hover:bg-foreground hover:text-background px-8">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
