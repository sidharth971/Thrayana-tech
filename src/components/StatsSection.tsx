import { CounterCard } from "./CounterCard";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Smile, Zap, Rocket, Package } from "lucide-react";

const stats = [
  { 
    value: 98, 
    suffix: "%", 
    label: "Client satisfaction rate across our global enterprise partnerships.",
    icon: Smile
  },
  { 
    value: 45, 
    suffix: "%", 
    label: "Average increase in operational efficiency through AI automation.",
    icon: Zap
  },
  { 
    value: 10, 
    suffix: "x", 
    label: "Faster deployment cycles using our cloud-native architectures.",
    icon: Rocket
  },
  { 
    value: 500, 
    suffix: "+", 
    label: "Scalable digital solutions delivered to industry-leading clients.",
    icon: Package
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/stats-bg.png" 
          alt="Stats Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-slate-950 via-slate-950/80 to-primary/10 z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-4">
              <AnimatedSection direction="right">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Business Impact</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 md:mb-8">
                  Proven business impact <span className="text-primary italic">across industries.</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                  We deliver measurable results by combining deep engineering expertise with 
                  cutting-edge technology innovation.
                </p>
                <div className="mt-8 md:mt-12 w-20 md:w-24 h-1 md:h-1.5 bg-primary rounded-full" />
             </AnimatedSection>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <CounterCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    index={index}
                    icon={stat.icon}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};