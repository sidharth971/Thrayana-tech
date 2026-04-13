import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ChevronRight, Activity, Shield, Database, BarChart2 } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background border-b border-white/5 pt-20">
      {/* Floating Ambient Light Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-0" />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[120px] -z-10" 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10 text-center lg:text-left">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-8 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">Welcome to Thrayana</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
            >
              Providing you the best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse block mt-2">innovative guidance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/70 font-light mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We bring the massive power of data science and AI to your business. Transform complex ideas into invincible digital ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link to="/services" className="btn-primary flex items-center gap-2 text-lg px-8 py-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all">
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919703164064?text=Hi%20Thrayana%20Technologies,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light flex items-center gap-2 text-lg px-8 py-4 bg-white/5 hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right Content - Hero Illustration Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              
              {/* Outer Glowing Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-primary/20 border-t-primary/60 border-l-primary/60 pointer-events-none"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-accent/10 border-b-accent/50 border-r-accent/50 pointer-events-none"
              />

              {/* Central Floating Hardware Box Slideshow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-[24rem] h-[16rem]"
                >
                  <AnimatePresence mode="wait">
                    
                    {/* Slide 0: Code Terminal */}
                    {activeSlide === 0 && (
                      <motion.div
                        key="slide-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-full h-full rounded-3xl bg-card/60 backdrop-blur-2xl border-2 border-primary/30 p-6 relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -mr-16 -mt-16" />
                          
                          <div className="flex gap-2.5 mb-6 pb-4 border-b border-white/5">
                            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                          </div>
                          
                          <div className="font-mono text-xs md:text-sm leading-loose tracking-wide z-10 relative">
                            <div className="text-primary italic">const</div> <div className="inline text-white font-bold ml-2">thrayana</div> = {"{"}
                            <div className="pl-6 border-l-2 border-primary/20 ml-2 mt-2 space-y-2">
                              <div className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-primary" /><span className="text-accent/80 font-semibold">innovative</span>: <span className="text-emerald-400 font-bold ml-2">true</span>,</div>
                              <div className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-primary" /><span className="text-accent/80 font-semibold">dataPowered</span>: <span className="text-emerald-400 font-bold ml-2">true</span>,</div>
                              <div className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-primary" /><span className="text-accent/80 font-semibold">guidance</span>: <span className="text-primary font-bold ml-2">"expert"</span></div>
                            </div>
                            <div className="mt-2">{"};"}</div>
                          </div>
                        </div>

                        <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-secondary border border-primary/30 flex items-center justify-center shadow-2xl backdrop-blur-md"
                        >
                          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🤖</span>
                        </motion.div>

                        <motion.div 
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                          className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-secondary border border-accent/30 flex items-center justify-center shadow-2xl backdrop-blur-md"
                        >
                          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">💡</span>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Slide 1: AI Analytics Board */}
                    {activeSlide === 1 && (
                      <motion.div
                        key="slide-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-full h-full rounded-3xl bg-card/60 backdrop-blur-2xl border-2 border-accent/30 p-6 relative overflow-hidden shadow-[0_0_50px_rgba(255,200,80,0.15)] flex flex-col">
                          
                          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                            <span className="text-accent font-semibold tracking-wide flex items-center gap-2"><BarChart2 className="w-4 h-4"/> Live AI Analytics</span>
                            <span className="text-emerald-400 text-xs font-bold tracking-widest animate-pulse">● SYNCED</span>
                          </div>
                          
                          <div className="flex-1 flex items-end justify-between gap-3 px-2 pt-2">
                            {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                              <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                                className="w-full bg-gradient-to-t from-primary/20 to-accent/80 rounded-t-lg relative group"
                              >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">{height}k</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-secondary border border-accent/30 flex items-center justify-center shadow-2xl backdrop-blur-md"
                        >
                          <Activity className="w-7 h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Slide 2: Cybersecurity Core */}
                    {activeSlide === 2 && (
                      <motion.div
                        key="slide-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-full h-full rounded-3xl bg-card/60 backdrop-blur-2xl border-2 border-emerald-500/30 p-6 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />
                          
                          <div className="relative z-10 w-24 h-24 rounded-full border-4 border-emerald-500/20 flex items-center justify-center mb-6">
                            <motion.div 
                               animate={{ rotate: 360 }}
                               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                               className="absolute inset-0 rounded-full border-t-4 border-emerald-400" 
                            />
                            <motion.div
                               animate={{ scale: [1, 1.1, 1] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                               <Shield className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                            </motion.div>
                          </div>
                          
                          <h3 className="text-emerald-400 font-extrabold tracking-widest text-lg drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">SHIELD ACTIVE</h3>
                          <p className="text-white/60 text-xs mt-2 font-mono tracking-widest">Enterprise grade security</p>
                        </div>

                        <motion.div 
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-secondary border border-emerald-500/30 flex items-center justify-center shadow-2xl backdrop-blur-md"
                        >
                          <Database className="w-7 h-7 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                        </motion.div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};