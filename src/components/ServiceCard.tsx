import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl?: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, imageUrl, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="h-full bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-slate-800 shadow-sm group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
        {/* Background Image with Dark Overlay - Visible by default */}
        {imageUrl && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div 
              className="w-full h-full opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
              style={{ 
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            {/* Multi-stage Dark Gradient Overlay for optimal contrast and image visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/70 to-slate-900 z-10" />
            <div className="absolute inset-0 bg-black/20 z-[5]" />
          </div>
        )}

        {/* Decorative Glow injected on hover */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Bottom indicator shape */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-primary transition-all duration-500" />

        <div className="relative z-20 flex flex-col h-full">
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 flex items-center justify-center mb-8 md:mb-10 transition-all duration-500 shadow-sm"
          >
            <Icon className="w-8 md:w-10 h-8 md:h-10 text-white group-hover:text-white transition-colors duration-500" />
          </motion.div>
          
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
              {title}
            </h3>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="mt-8 md:mt-10 flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-all duration-300">
             <span>Learn More</span>
             <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};