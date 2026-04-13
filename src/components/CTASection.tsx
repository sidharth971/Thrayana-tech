import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
        >
          {/* Background - Dark Theme aligned */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 2%) 100%)" }} />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Floating Ambient Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-[50px] pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 20, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-accent/20 blur-[60px] pointer-events-none"
          />

          {/* Glowing Border Accents */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 py-24 px-8 md:px-20 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/80 border border-primary/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 shadow-lg"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">Partner for Your Success</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight max-w-4xl"
            >
              Unleash the Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IT Solutions</span> for your Enterprise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We cut through the noise of modern markets to deliver brutal, scalable, and invincible business solutions tailored perfectly to dominate your competition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1"
              >
                Launch Your Project Now
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};