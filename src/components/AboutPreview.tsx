import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, Globe2, Layers } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Cloud-native application development and modernization with uncompromising quality.",
    link: "/services#software",
    bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Cpu,
    title: "AI & Data Science",
    description: "Transforming raw data into actionable insights and intelligent automation systems.",
    link: "/services#ai",
    bgImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Globe2,
    title: "Digital Strategy",
    description: "Comprehensive roadmaps for digital transformation and market-leading user experiences.",
    link: "/services#digital",
    bgImage: "https://images.unsplash.com/photo-1454165833762-0204b2816718?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Layers,
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and resilient cloud architectures tailored for enterprise needs.",
    link: "/services#cloud",
    bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000"
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        <div className="max-w-4xl mb-16 md:mb-24">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500">Expertise & Innovation</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Solve your toughest business challenges through <span className="text-primary">AI, Data, Cloud,</span> and <span className="text-primary">Digital Engineering</span> expertise.
            </h2>
            <div className="w-20 md:w-24 h-1 md:h-1.5 bg-primary rounded-full mb-8" />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {capabilities.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative flex flex-col h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-slate-900"
              >
                {/* Background Image Layer - Visible with dark overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.bgImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Refined Dark Overlay for better image visibility and text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900 z-10" />
                  <div className="absolute inset-0 bg-black/10 z-[5]" />
                </div>

                <div className="relative z-20 p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-6 md:mb-10 w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-sm border border-white/20 group-hover:border-primary">
                    <item.icon className="w-6 md:w-8 h-6 md:h-8 text-white group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed mb-8 md:mb-10 flex-grow transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <Link 
                    to={item.link} 
                    className="inline-flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors duration-300"
                  >
                    Explore {item.title.split(' ')[0]}
                    <ArrowRight className="w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
             <div className="text-slate-600 font-bold max-w-md text-base md:text-lg">
                Our approach combines deep technical knowledge with a passion for innovation.
             </div>
             <Link to="/about" className="btn-outline w-full md:w-auto flex items-center justify-center gap-3 hover:bg-slate-900 hover:text-white transition-all duration-300">
                More about Thrayana
                <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};