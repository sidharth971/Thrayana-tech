import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const bgImages = [
  "/images/hero/bg1.png",
  "/images/hero/bg2.png",
  "/images/hero/bg3.png",
];

const heroContent = [
  {
    title: "Technology ",
    highlight: "innovation",
    subtitle: " that scales. AI-driven efficiency.",
    description: "Thrayana Technologies brings the power of data science and AI to your business, transforming complex challenges into scalable engineering expertise."
  },
  {
    title: "Engineering ",
    highlight: "future-ready",
    subtitle: " solutions. Digital growth at scale.",
    description: "We help enterprises navigate the digital landscape with precision engineering, cloud-native architectures, and robust data strategies."
  },
  {
    title: "Data-driven ",
    highlight: "insights",
    subtitle: " for growth. Unlock your potential.",
    description: "Our advanced analytics and machine learning models turn raw data into strategic assets, propelling your business towards market leadership."
  }
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 6000); // Slightly longer for readability
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const textAnimation = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.8, ease: "easeInOut" }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pt-20 pb-20 md:pb-32">
      {/* Dynamic Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${bgImages[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-slate-950/70 md:bg-slate-950/60 backdrop-blur-[1px] md:backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-1 py-1 pr-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="px-2 md:px-3 py-1 rounded-full bg-primary text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary-foreground">New</span>
              <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest">Innovation that scales</span>
            </div>
          </motion.div>
          
          <div className="relative overflow-hidden min-h-[300px] md:min-h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                {...textAnimation}
              >
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
                  {heroContent[currentImage].title}
                  <span className="text-primary font-black">{heroContent[currentImage].highlight}</span>
                  {heroContent[currentImage].subtitle}
                </h1>

                <p className="text-base md:text-xl lg:text-2xl text-white/80 font-medium mb-8 md:mb-12 max-w-2xl leading-relaxed">
                  {heroContent[currentImage].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link 
              to="/services" 
              className="btn-primary text-base md:text-lg px-8 md:px-10 py-4 md:py-5 flex items-center justify-center gap-3 group shadow-2xl shadow-primary/20"
            >
              Our Capabilities
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-white/30 text-white font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Explore Solutions
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="mt-12 md:mt-20 flex flex-wrap items-center gap-8 md:gap-12 opacity-70"
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/60">Trusted by innovators</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 z-10 hidden sm:flex"
      >
        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-white/30 rounded-full flex justify-center p-1 md:p-1.5 backdrop-blur-sm">
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 md:h-2 bg-primary rounded-full shadow-[0_0_8px_hsla(43,100%,50%,0.5)]"
          />
        </div>
      </motion.div>
    </section>
  );
};