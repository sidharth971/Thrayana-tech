import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Cloud, Bot, Globe, Database } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Code,
    title: "Application Development",
    description: "Custom software solutions architected for speed and customized to your brutal business demands.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Robust, responsive, and scalable web apps engineered to guarantee dominating user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Flawless native and cross-platform mobile ecosystems for iOS and Android platforms.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent enterprise-scale automation propelled by breakthrough machine learning pipelines.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Invincible cloud infrastructure and strict DevOps practices for lightning-fast deployments.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transforming chaotic raw data into pure, decisive strategic insights via powerful analytics.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Golden Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #FFC850 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Center Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[150px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Premium Services"
          description="We deliver aggressive, uncompromised tech infrastructure to ensure you lead, not follow, in your sector."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-outline inline-flex items-center gap-3 text-lg px-8 py-4 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary transition-all">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};