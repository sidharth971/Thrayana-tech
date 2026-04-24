import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Retail & E-commerce",
    description: "Omnichannel retail solutions that enhance customer experience, optimize supply chains, and drive sales growth at scale.",
    link: "/contact?industry=retail"
  },
  {
    title: "Financial Services",
    description: "Next-gen infrastructure for banking, payments, and wealth management, ensuring security and regulatory compliance.",
    link: "/contact?industry=finance"
  },
  {
    title: "Manufacturing & CPG",
    description: "Optimize operations and increase efficiency with Industry 4.0 innovations, IoT, and real-time data analytics.",
    link: "/contact?industry=manufacturing"
  },
  {
    title: "Technology & Media",
    description: "Accelerate product development and cloud transformation for high-growth tech companies and global media leaders.",
    link: "/contact?industry=tech"
  },
  {
    title: "Pharma & Life Sciences",
    description: "Modernize drug discovery, support clinical research, and streamline supply chains with advanced data platforms.",
    link: "/contact?industry=pharma"
  },
  {
    title: "Insurance",
    description: "Transform operations through digital claims processing, modernized core systems, and advanced risk analytics.",
    link: "/contact?industry=insurance"
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
             <div className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Expertise across sectors</div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight">
               Accelerate <span className="text-primary">revenue growth</span>, cut costs, and manage risk.
             </h1>
             <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl">
               Our deep domain expertise combined with technology innovation delivers measurable impact 
               for global enterprises.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <div className="group flex flex-col h-full border-t border-slate-200 pt-10 hover:border-primary transition-colors duration-500">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 flex-grow">
                    {industry.description}
                  </p>
                  <motion.div whileHover={{ x: 5 }}>
                    <a 
                      href={industry.link} 
                      className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-900 group-hover:text-primary transition-colors duration-300"
                    >
                      Explore {industry.title.split(' ')[0]} solutions
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTASection is already included below */}

      <CTASection />
      <Footer />

    </div>
  );
};

export default Industries;