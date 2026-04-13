import { CounterCard } from "./CounterCard";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="bg-card rounded-[3rem] p-10 md:p-16 border-2 border-border shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Ambient inner glows */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none" 
            />
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[60px] pointer-events-none" 
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10 break-words">
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative group">
                  {/* Divider line between stats on desktop */}
                  {index !== 0 && (
                    <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-white/5 group-hover:bg-primary/30 transition-colors duration-500" />
                  )}
                  <CounterCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};