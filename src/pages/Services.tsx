import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import {
  Code,
  Smartphone,
  Cloud,
  Bot,
  Globe,
  Database,
  Shield,
  Cpu,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Application Development",
    description: "Custom software solutions tailored to your unique business requirements. We build scalable, secure, and high-performance applications using modern technologies and best practices.",
    features: ["Custom ERP Solutions", "CRM Systems", "Inventory Management", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive and scalable web applications that deliver exceptional user experiences. From corporate websites to complex web platforms, we bring your vision to life.",
    features: ["Progressive Web Apps", "E-commerce Platforms", "Content Management", "API Development"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We create intuitive, feature-rich apps that engage users and drive business results.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by machine learning and artificial intelligence. Transform your operations with smart, data-driven technologies.",
    features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Chatbots"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps practices for scalable, reliable, and cost-effective deployments. We help you modernize your IT infrastructure.",
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics solutions. Make data-driven decisions that propel your business forward.",
    features: ["Business Intelligence", "Data Visualization", "ETL Pipelines", "Real-time Analytics"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions. We implement robust security measures to safeguard your business from threats.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connect your physical world to the digital realm with our IoT solutions. We design and implement smart systems for various industries.",
    features: ["Sensor Integration", "Edge Computing", "IoT Platforms", "Smart Devices"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden flex items-center justify-center min-h-[60vh] border-b border-black/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }} 
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] -z-10" 
          />
          <motion.div 
            animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }} 
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[150px] -z-10" 
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/80 border border-primary/20 mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">What We Offer</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              Transformative <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold-dark to-primary animate-pulse">Digital Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions meticulously designed to accelerate your operational efficiency and drive sustainable market dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction={index % 2 === 0 ? "right" : "left"}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Text Content Side */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-200 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/5 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                      
                      <motion.div 
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg group-hover:shadow-primary/40 transition-all duration-500 relative z-10"
                      >
                        <service.icon className="w-10 h-10 text-primary-foreground" />
                      </motion.div>
                      
                      <div className="relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                          {service.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-secondary/80 border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                                <ArrowRight className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-sm md:text-base text-slate-700 font-semibold group-hover:text-primary transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Presentation Side */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative group px-4 py-8 lg:px-8">
                      {/* Animated Offset Frame */}
                      <motion.div 
                        animate={{ x: [0, index % 2 === 0 ? 15 : -15, 0], y: [0, 15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute inset-0 rounded-[2.5rem] border-2 border-primary/30 z-0 hidden sm:block ${index % 2 === 0 ? 'mr-12 mb-12' : 'ml-12 mb-12'}`} 
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-slate-200 shadow-2xl z-10 bg-white"
                      >
                        <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 transition-opacity duration-700 group-hover:opacity-0" />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-20 pointer-events-none" />
                        
                        {/* Huge Watermark Icon on Image */}
                        <div className="absolute bottom-0 right-0 p-8 z-30 opacity-20 group-hover:opacity-40 transition-opacity duration-700 translate-x-12 translate-y-12">
                           <service.icon className="w-64 h-64 text-white" />
                        </div>
                      </motion.div>
                      
                      {/* Floating glowing orbs */}
                      <motion.div
                        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                        className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/20 blur-[50px] z-20 pointer-events-none"
                      />
                      <motion.div
                        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-[50px] z-20 pointer-events-none"
                      />
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-secondary/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="A battle-tested methodology meticulously crafted to ensure spectacular project delivery every single time."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[100px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {[
              { step: "01", title: "Discovery", description: "Deep diving into your core requirements and long-term business goals." },
              { step: "02", title: "Planning", description: "Architecting detailed technical roadmaps and scalable infrastructure." },
              { step: "03", title: "Development", description: "Engineering with agile methodology and uncompromising code quality." },
              { step: "04", title: "Delivery", description: "Rigorous testing, flawless deployment, and dedicated ongoing support." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative group p-8 bg-white border border-slate-200 hover:border-primary/40 rounded-[2rem] shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full overflow-hidden z-10"
                >
                  <div className="absolute -right-6 -top-10 text-[150px] font-black text-slate-900/[0.03] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none select-none">
                    {item.step}
                  </div>
                  
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    className="w-16 h-16 rounded-2xl bg-slate-50 border border-primary/20 flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary/20 transition-colors duration-500"
                  >
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">{item.title}</h4>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed relative z-10">{item.description}</p>
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

export default Services;