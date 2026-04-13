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
    details: ["A BLK, Ittina Limited Glass Factory Layout", "Electronic City Phase 2, Bangalore", "Karnataka 560100, India"],
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
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <div className="flex flex-col items-center mt-6">
              <Logo className="w-20 h-20 mb-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-lg text-white/80">
                Ready to start your project? Let's discuss how we can help transform your business.
              </p>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary flex items-center justify-center gap-2 flex-1"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
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
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
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
              <div className="p-12 lg:p-20 flex flex-col justify-center items-center text-center lg:items-start lg:text-left bg-secondary/30">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Location</h3>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-foreground">A BLK, Ittina Limited</p>
                  <p className="text-muted-foreground text-md">Glass Factory Layout, Electronic City Phase 2</p>
                  <p className="text-muted-foreground text-md">Bangalore Urban, Karnataka 560100</p>
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
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=A%20BLK,%20ITTINA%20LIMITED%20GLASS%20FACTORY%20LAYOUT,%20ELECTRONIC%20CITY%20PHASE2,%20BANGALORE%20560100&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
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