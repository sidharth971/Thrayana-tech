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
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Robust, responsive, and scalable web apps engineered to guarantee dominating user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Flawless native and cross-platform mobile ecosystems for iOS and Android platforms.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent enterprise-scale automation propelled by breakthrough machine learning pipelines.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Invincible cloud infrastructure and strict DevOps practices for lightning-fast deployments.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transforming chaotic raw data into pure, decisive strategic insights via powerful analytics.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="mb-20">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Premium Services"
            description="We deliver aggressive, uncompromised tech infrastructure to ensure you lead, not follow, in your sector."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link to="/services" className="btn-outline inline-flex items-center gap-4 text-lg px-10 py-5 hover:bg-slate-900 hover:text-white transition-all duration-300">
            Explore All Capabilities
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};