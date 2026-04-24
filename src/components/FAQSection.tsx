import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "What specific IT services do you specialize in?",
    answer: "We specialize in cutting-edge Application Development, Web and Mobile ecosystems, Cloud & DevOps architecture, AI/Machine Learning automation, and comprehensive Data Analytics. We build invincible digital foundations tailored to your enterprise."
  },
  {
    question: "How do you approach a custom software development project?",
    answer: "We employ an aggressive Agile methodology. After deep architectural planning and requirement gathering, we move into rapid iterative sprints. This ensures transparency, strict quality control, and faster time-to-market for your critical assets."
  },
  {
    question: "Do you provide post-implementation support and maintenance?",
    answer: "Absolutely. We offer rigorous post-deployment Service Level Agreements (SLAs), addressing scaling requirements, critical security patches, and structural updates to ensure your applications remain dominant and secure 24/7."
  },
  {
    question: "Which technology stacks do you primarily utilize?",
    answer: "Our arsenal includes React and Next.js for high-performance frontends, Node.js and Python for scalable backends, Kubernetes and Docker for containerized DevOps, alongside major cloud platforms like AWS and Azure."
  },
  {
    question: "How do you guarantee the security of the applications you build?",
    answer: "Security is engineered into our core pipeline natively. We utilize end-to-end encryption schemas, JWT token integrations, continuous vulnerability scanning, and OWASP best-practice adherence to protect you from brute-force and targeted exploits."
  },
  {
    question: "Can you implement advanced Data Analytics into our existing ecosystems?",
    answer: "Yes. We design and integrate massive data pipelines capable of absorbing, structuring, and visualizing your complex enterprise data, delivering undeniable strategic insights directly into your existing infrastructure."
  },
  {
    question: "What is the typical timeframe for deploying an enterprise application?",
    answer: "Depending on system complexity and the scale of integrations, MVP (Minimum Viable Product) releases range from 6 to 12 weeks. Large-scale enterprise overhauls are sequenced out through highly systematic multi-month roadmaps."
  },
  {
    question: "Do you develop unified cross-platform mobile applications?",
    answer: "Yes. Our mobile architecture division leverages powerful frameworks like Flutter and React Native. This enables us to deploy flawless, native-feeling applications to both iOS and Android simultaneously without compromising performance."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-slate-200">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px] z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/20 mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">FAQ Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold-dark">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            Everything you need to know about our uncompromised IT solutions and strategic deployment processes.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <AnimatedSection key={index} delay={index * 0.05} direction="up">
                <motion.div 
                  className={`bg-white border transition-all duration-500 rounded-2xl overflow-hidden ${
                    isOpen ? "border-primary/50 shadow-xl" : "border-slate-200 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-primary tracking-wide" : "text-slate-900"}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? "bg-primary/20 text-primary" : "bg-slate-100 text-slate-400 group-hover:text-primary"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 pt-0 text-slate-600 font-medium text-base md:text-lg leading-relaxed">
                          <div className="w-full h-px bg-gradient-to-r from-primary/30 to-transparent mb-6" />
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
