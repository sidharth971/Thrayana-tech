import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { Target, Eye, Award, Users, Zap, Shield, Heart, Globe, CheckCircle2 } from "lucide-react";

const whyChooseUs = [
  { icon: Zap, title: "Fast Delivery", description: "Quick turnaround without compromising quality" },
  { icon: Shield, title: "Secure Solutions", description: "Enterprise-grade security in every project" },
  { icon: Users, title: "Expert Team", description: "Skilled professionals with years of experience" },
  { icon: Heart, title: "Client-Centric", description: "Your success is our top priority" },
  { icon: Globe, title: "Global Reach", description: "Serving clients across the globe" },
  { icon: Award, title: "Quality Assured", description: "Rigorous testing and quality control" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" 
          />
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" 
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">Discover Our Journey</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold-dark animate-pulse">Digital</span> Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              We engineer intelligent solutions that elevate businesses and redefine possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Overview Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Side */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 px-4 lg:px-8 py-8">
              <AnimatedSection direction="up" className="relative group">
                
                {/* Animated Background Offset Frame */}
                <motion.div 
                  animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/40 ml-8 mt-12 z-0 hidden sm:block" 
                />

                {/* Main Image Container */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_0_50px_rgba(212,175,55,0.1)] z-10 bg-card border border-black/5">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 transition-opacity duration-700 group-hover:opacity-0" />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                    alt="Our Collaborative Team"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-20 pointer-events-none" />
                </div>
                
                {/* Glowing Orbs */}
                <motion.div 
                  animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-[40px] z-20 pointer-events-none" 
                />
                <motion.div 
                  animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -right-4 w-40 h-40 bg-accent/30 rounded-full blur-[50px] z-20 pointer-events-none" 
                />
                
              </AnimatedSection>
            </div>

            {/* Right Content Side */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <AnimatedSection direction="down">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  Your growth is our <span className="text-primary italic">blueprint</span>.
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600 font-medium">
                  <p>
                    Thrayana Technologies is an elite software engineering and consulting firm headquartered in Bangalore. We don't just write code; we design transformative digital infrastructure that propels organizations into the future.
                  </p>
                  <p>
                    Our dynamic team of experts masterfully harnesses the power of Data Science, Artificial Intelligence, and scalable Cloud Architectures. From ambitious startups to massive enterprises, we craft bespoke strategies and resilient software tailored uniquely to your sector's demands.
                  </p>
                </div>
                
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                  {["Automotive & Logistics", "Financial Services", "Healthcare & Pharma", "Real Estate Ventures"].map((industry) => (
                    <div key={industry} className="flex items-center gap-3 text-slate-800">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-bold">{industry}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated background wave */}
        <div className="absolute inset-0 bg-secondary/40" />
        <motion.div 
          animate={{ x: [0, -100, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" 
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            
            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-200 hover:border-primary/50 relative overflow-hidden h-full group shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center mb-8 shadow-lg group-hover:shadow-primary/40 transition-shadow duration-500"
                >
                  <Target className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  To empower ambitious businesses with avant-garde technology solutions that drive explosive growth, streamline efficiency, and forge a lasting competitive advantage. We dedicate ourselves to being your invincible technological fortress.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-200 hover:border-accent/50 relative overflow-hidden h-full group shadow-xl hover:shadow-accent/5"
              >
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -ml-20 -mb-20 transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-tl from-primary to-accent flex items-center justify-center mb-8 shadow-lg group-hover:shadow-accent/40 transition-shadow duration-500"
                >
                  <Eye className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 group-hover:text-accent transition-colors duration-300">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  To emerge as the absolute global titan in technology innovation—renowned for delivering extraordinary value through revolutionary systems and unwavering support. We envision a business ecosystem inherently strengthened by our code.
                </p>
              </motion.div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Competence</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8">What Sets Us <span className="text-gradient">Apart</span></h2>
              <p className="text-slate-600 text-xl font-medium leading-relaxed">
                We deliver uncompromising excellence through deep-rooted expertise and relentless innovation in every single project.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-primary/40 transition-all duration-500 h-full overflow-hidden shadow-xl hover:shadow-primary/10"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-[2.5] ease-out" />
                  
                  <div className="relative z-10 flex flex-col items-start gap-6">
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="p-5 rounded-3xl bg-slate-50 border border-slate-200 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-500 shadow-md"
                    >
                      <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-slate-600 text-lg leading-relaxed font-bold">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      
      {/* Decorative divider before CTA */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full opacity-50" />
      
      <CTASection />
      <Footer />

    </div>
  );
};

export default About;