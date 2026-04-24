import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-[2rem] p-10 group border border-slate-200 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative"
    >
      {/* Background glow injected on hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 rounded-3xl bg-secondary border border-border group-hover:bg-primary/20 group-hover:border-primary/50 flex items-center justify-center mb-8 transition-all duration-500 relative z-10"
      >
        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
      </motion.div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed font-medium text-lg">
          {description}
        </p>
      </div>

      {/* Decorative arrow indicating clickability */}
      <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary/10 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-primary">
         <ArrowUpRight className="w-5 h-5 pointer-events-none" />
      </div>
    </motion.div>
  );
};