import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import {
  ShieldCheck,
  Microscope,
  BarChart3,
  School,
  Box,
  Map,
  Key,
  Cable
} from "lucide-react";

const industries = [
  {
    icon: ShieldCheck,
    title: "Finance & Banking",
    description: "Digital banking solutions, payment gateways, and fintech innovations that transform financial services.",
    solutions: ["Digital Banking", "Payment Processing", "Risk Management", "Fraud Detection"],
  },
  {
    icon: Microscope,
    title: "Healthcare & Pharma",
    description: "Healthcare IT solutions that improve patient care, streamline operations, and ensure compliance.",
    solutions: ["EHR Systems", "Telemedicine", "Drug Discovery", "Clinical Trials"],
  },
  {
    icon: BarChart3,
    title: "Retail & E-commerce",
    description: "Omnichannel retail solutions that enhance customer experience and drive sales growth.",
    solutions: ["E-commerce Platforms", "Inventory Management", "POS Systems", "Customer Analytics"],
  },
  {
    icon: School,
    title: "Education & EdTech",
    description: "Learning management systems and educational technology that transform how people learn.",
    solutions: ["LMS Platforms", "Virtual Classrooms", "Assessment Tools", "Student Analytics"],
  },
  {
    icon: Box,
    title: "Manufacturing",
    description: "Industry 4.0 solutions that optimize production, supply chain, and quality control.",
    solutions: ["Smart Factory", "Predictive Maintenance", "Supply Chain", "Quality Control"],
  },
  {
    icon: Map,
    title: "Travel & Hospitality",
    description: "Technology solutions that enhance guest experiences and optimize operations.",
    solutions: ["Booking Systems", "Revenue Management", "Guest Experience", "Loyalty Programs"],
  },
  {
    icon: Key,
    title: "Real Estate",
    description: "PropTech solutions that streamline property management and real estate transactions.",
    solutions: ["Property Management", "Virtual Tours", "CRM Systems", "Market Analytics"],
  },
  {
    icon: Cable,
    title: "Automotive",
    description: "Connected vehicle solutions and automotive technology for the modern age.",
    solutions: ["Connected Cars", "Fleet Management", "Dealer Systems", "EV Solutions"],
  },
];

const technologies = [
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    category: "AI/ML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "AWS",
    category: "Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
  },
  {
    name: "Azure",
    category: "Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Flutter",
    category: "Mobile",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  },
  {
    name: "Swift",
    category: "Mobile",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative flex items-center justify-center min-h-[50vh] border-b border-border/50">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-0" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-primary/20 rounded-full blur-[120px] -z-10" 
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-dark border border-primary/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">Industries We Serve</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Sector <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Deep domain knowledge combined with cutting-edge technology to engineer scalable, strategic, industry-specific solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-card rounded-[2rem] p-8 border border-white/5 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:border-primary/40 h-full group transition-all duration-500 relative overflow-hidden flex flex-col"
                >
                  {/* Subtle hover background bloom */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <motion.div 
                    whileHover={{ y: -5, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-secondary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 flex items-center justify-center mb-8 shadow-lg transition-all duration-500 relative z-10"
                  >
                    <industry.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                  </motion.div>

                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                      {industry.title}
                    </h3>

                    <p className="text-white/70 mb-8 leading-relaxed font-light text-lg">
                      {industry.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border mt-auto relative z-10">
                    {industry.solutions.map((solution) => (
                      <div key={solution} className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover/item:bg-primary group-hover/item:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300" />
                        <span className="text-sm font-medium text-white/60 group-hover/item:text-white transition-colors duration-300">
                          {solution}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-32 bg-secondary/30 relative border-t border-border">
        {/* Animated background dots */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <AnimatedSection direction="up">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Technologies We <span className="text-gradient">Master</span></h2>
              <p className="text-white/70 text-xl font-light leading-relaxed">
                Building robust, scalable architectures leveraging the most powerful modern technology stacks.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.05} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-card rounded-3xl p-6 text-center border border-border hover:border-primary/50 shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] group cursor-pointer transition-all duration-500 h-full flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-secondary/50 border border-white/5 group-hover:bg-background transition-colors duration-300">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-md"
                      />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-wide">
                        {tech.name}
                      </div>
                      <div className="text-xs text-primary/60 mt-1 uppercase tracking-wider font-semibold">{tech.category}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />

    </div>
  );
};

export default Industries;