import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  Home,
  Hammer,
  Building2,
  Layers,
  Square,
  Wrench,
  PenTool,
  ClipboardList,
  Users,
  HardHat,
  CheckCircle2,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    id: "renovation",
    icon: Home,
    title: "Renovation",
    description: "Complete home and commercial renovation services to transform and modernize your space with premium finishes.",
    features: [
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Basement Finishing",
      "Room Additions",
      "Interior Updates",
      "Commercial Buildouts",
    ],
  },
  {
    id: "demolition",
    icon: Hammer,
    title: "Demolition",
    description: "Safe, efficient demolition services for structures of all sizes with proper debris removal and environmental compliance.",
    features: [
      "Interior Demolition",
      "Structural Demolition",
      "Selective Demolition",
      "Site Clearing",
      "Debris Removal",
      "Hazardous Material Handling",
    ],
  },
  {
    id: "roofing",
    icon: Building2,
    title: "Roofing",
    description: "Professional roofing installation, repair, and replacement for residential and commercial properties.",
    features: [
      "Roof Installation",
      "Roof Repair",
      "Roof Replacement",
      "Shingle & Tile Work",
      "Flat Roof Systems",
      "Gutter Installation",
    ],
  },
  {
    id: "stairs",
    icon: Layers,
    title: "Stairs",
    description: "Custom staircase construction, repair, and remodeling for interior and exterior applications.",
    features: [
      "Custom Stair Design",
      "Stair Construction",
      "Stair Repair",
      "Railing Installation",
      "Deck Stairs",
      "Commercial Staircases",
    ],
  },
  {
    id: "walls",
    icon: Square,
    title: "Walls",
    description: "Wall construction, removal, and finishing services including drywall, framing, and structural work.",
    features: [
      "Wall Framing",
      "Drywall Installation",
      "Wall Removal",
      "Retaining Walls",
      "Partition Walls",
      "Wall Finishing",
    ],
  },
  {
    id: "custom-projects",
    icon: PenTool,
    title: "Custom Projects",
    description: "Specialized construction projects tailored to your unique requirements and architectural vision.",
    features: [
      "Custom Home Builds",
      "Specialty Structures",
      "Outdoor Living Spaces",
      "Garage Construction",
      "Shed & Outbuildings",
      "Unique Architectural Work",
    ],
  },
  {
    id: "repairs",
    icon: Wrench,
    title: "Repairs",
    description: "Quality repair work for structural, electrical, plumbing, and general maintenance needs.",
    features: [
      "Structural Repairs",
      "Foundation Repair",
      "Water Damage Repair",
      "General Maintenance",
      "Emergency Repairs",
      "Inspection & Assessment",
    ],
  },
]

const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Submit Your Project",
    description: "Fill out our project request form with details about your construction needs, timeline, and budget.",
  },
  {
    step: "02",
    icon: CheckCircle2,
    title: "We Review It",
    description: "Our team carefully reviews your project to understand the scope, requirements, and best approach.",
  },
  {
    step: "03",
    icon: Users,
    title: "We Connect the Right Team",
    description: "We match you with pre-vetted contractors who specialize in your specific type of project.",
  },
  {
    step: "04",
    icon: HardHat,
    title: "Project Gets Done",
    description: "Your project is completed to professional standards with our oversight and quality assurance.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/renovation.jpg"
            alt="Professional renovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/60" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Comprehensive Construction Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              From renovation to demolition, roofing to custom builds, we connect you with 
              qualified contractors for every type of construction project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What We Offer
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services Tailored to Your Needs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group rounded-2xl bg-card p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A simple process to get your project started and completed with excellence.
            </p>
          </div>
          
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <div key={item.step} className="relative text-center group">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  )}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-card border border-primary/20 group-hover:border-primary/40 shadow-sm transition-all">
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

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/completed-project.jpg"
                  alt="Completed project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Work With SMKA Global
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We make construction projects easier and more reliable by connecting you with trusted professionals.
              </p>
              
              <div className="mt-10 space-y-4">
                {[
                  "Vetted & Licensed Contractors",
                  "Project Management Support", 
                  "Quality Assurance",
                  "Transparent Communication",
                  "Competitive Pricing",
                  "Satisfaction Guaranteed"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 rounded-xl bg-secondary px-5 py-4"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/roofing.jpg"
            alt="Professional roofing"
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
              Submit your project details and we will connect you with the right contractors.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-accent">
                <Link href="/portfolio">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
