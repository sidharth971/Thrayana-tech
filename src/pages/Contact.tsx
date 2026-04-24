import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Logo } from "@/components/layout/Logo";
import { MapPin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["Thrayana Private Limited", "AS16, Ittina Neela Apartments, Phase 2", "Glass Factory Layout, Electronic City", "Bengaluru, Karnataka 560100"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sales@thrayana.com"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden flex items-center justify-center min-h-[70vh] bg-slate-950">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about/contact-hero-v2.png" 
            alt="Contact Hero Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-10 shadow-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">Get in Touch</span>
            </motion.div>
            
            <div className="flex flex-col items-center">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
                Let's <span className="text-primary italic animate-pulse">Connect.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                Ready to architect your next breakthrough? Our senior leadership and engineering teams are standing by to collaborate on your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 shadow-2xl relative overflow-hidden group">
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity duration-700 opacity-50" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Send us a <span className="text-primary italic">Message</span></h2>
                  <p className="text-slate-500 mb-10 font-medium">Complete the form below and our strategic team will reach out within 24 hours.</p>
  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="block text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-900 font-medium placeholder:text-slate-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-900 font-medium placeholder:text-slate-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-3">
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-900 font-medium placeholder:text-slate-400"
                        placeholder="Partnership Inquiry"
                      />
                    </div>
  
                    <div className="space-y-3">
                      <label className="block text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                        How can we help? <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-900 font-medium placeholder:text-slate-400 resize-none"
                        placeholder="Tell us about your project or business goals..."
                      />
                    </div>
  
                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-gold-dark text-black font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.5)] transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Initiate Conversation</span>
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </motion.button>
                      <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                        Secure Submission • GDPR Compliant
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Have a question or want to discuss a project? We'd love to hear from you. Reach out through any of the channels below.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-xl group hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-sm">
                        <item.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-lg text-slate-600 font-bold leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
              {/* Address Details */}
              <div className="p-12 lg:p-20 flex flex-col justify-center items-center text-center lg:items-start lg:text-left bg-slate-50">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Location</h3>
                <div className="space-y-2">
                  <p className="text-xl font-extrabold text-slate-900">Thrayana Private Limited</p>
                  <p className="text-slate-600 font-bold text-lg leading-tight">AS16, Ittina Neela Apartments, Phase 2</p>
                  <p className="text-slate-600 font-bold text-lg">Electronic City, Bengaluru 560100</p>
                </div>
                <div className="mt-8 pt-8 border-t border-border w-full flex flex-col items-center lg:items-start gap-4">
                  <p className="text-sm text-muted-foreground italic">
                    Visit us to discuss your digital transformation journey.
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-[400px] lg:h-auto min-h-[400px] relative">
                <iframe
                  title="Thrayana Technologies Location"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Thrayana%20Private%20Limited,%20AS16,%20Ittina%20Neela%20Apartments,%20Phase%202,%20Electronic%20City,%20Bengaluru&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 transition-all duration-700 brightness-100 hover:brightness-110"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Contact;