import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Users, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const features = [
  {
    icon: Target,
    title: "Level Up Productivity",
    description: "We are passionate to show our services to users with cutting-edge security architecture.",
  },
  {
    icon: Users,
    title: "Engage Teammates",
    description: "We help you in enhancing yourselves in this aggressively competitive digital directory.",
  },
  {
    icon: Lightbulb,
    title: "Post-implementation Support",
    description: "We offer the absolute best agile solutions for your business that guarantees success.",
  },
  {
    icon: Zap,
    title: "Collaborative Spirit",
    description: "Making it drastically easier to navigate for a more enjoyable end-user experience.",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden border-b border-slate-200">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] rounded-full opacity-20 bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full opacity-10 bg-accent/20 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left - Image & Brand Visual */}
          <AnimatedSection direction="right" className="relative">
            <div className="relative group px-4 lg:px-0">
              
              {/* Backglow Frame Layer */}
              <motion.div 
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/30 z-0 hidden lg:block -ml-6 -mb-6" 
              />

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200 z-10">
                <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
                  alt="Innovation and Technology"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                />

                {/* Glass Overlay inside Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none z-20" />

                <div className="absolute bottom-8 left-8 right-8 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card/70 border border-primary/30 p-6 rounded-2xl backdrop-blur-xl shadow-xl"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        <span className="text-2xl drop-shadow-md">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">Innovation First</h3>
                        <p className="text-slate-600 text-sm font-semibold">Transforming businesses rapidly</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Satisfaction Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 hidden md:block z-30"
              >
                <div className="bg-secondary/90 p-8 rounded-3xl border-2 border-border shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-2xl">
                  <div className="flex items-center gap-6">
                    <div className="relative pointer-events-none">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          className="text-slate-200"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 36}
                          strokeDashoffset={0}
                          className="text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-lg">
                        100%
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900 mb-1 uppercase tracking-wider">Client</div>
                      <div className="text-sm text-slate-600 whitespace-nowrap font-medium">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div className="space-y-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Grow your <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-primary to-gold-dark">Knowledge.</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <div className="group bg-card p-6 rounded-2xl border border-black/5 hover:border-primary/40 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] h-full">
                    <div className="flex flex-col gap-5">
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-md"
                      >
                        <feature.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-base text-slate-600 leading-relaxed font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="mt-8 pt-4">
              <Link to="/about" className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};