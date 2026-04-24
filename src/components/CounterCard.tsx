import { motion, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CounterCardProps {
  value: number;
  suffix?: string;
  label: string;
  index?: number;
  icon: LucideIcon;
}

export const CounterCard = ({ value, suffix = "", label, index = 0, icon: Icon }: CounterCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="h-full bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-500 overflow-hidden">
        {/* Hover Glow Effect */}
        <div className="absolute -right-20 -top-20 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
            <Icon className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors duration-500" />
          </div>

          <div className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight flex items-baseline gap-1 group-hover:text-primary transition-colors duration-500">
            {displayValue}
            <span className="text-4xl md:text-5xl font-bold">{suffix}</span>
          </div>
          <div className="text-lg text-slate-600 font-bold leading-relaxed max-w-[280px]">
            {label}
          </div>
          <div className="mt-8 w-12 h-1.5 bg-slate-100 group-hover:w-24 group-hover:bg-primary transition-all duration-500 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};