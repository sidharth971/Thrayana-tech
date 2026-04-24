import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Content - Message */}
            <div className="p-8 md:p-12 lg:p-20 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Background Image with Dark Overlay */}
               <div className="absolute inset-0 z-0">
                  <img 
                    src="/images/cta-bg.png" 
                    alt="CTA Background" 
                    className="w-full h-full object-cover opacity-40 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-slate-900 via-slate-900/80 to-primary/20 z-10" />
               </div>
               
               <div className="relative z-20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-12"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 md:mb-10 leading-[1.1] tracking-tightest font-heading">
                      Let's <span className="text-primary italic animate-pulse">talk.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-md">
                      Ready to transform your digital landscape? Our experts are standing by to architect your next breakthrough.
                    </p>
                  </motion.div>
                  
                  <div className="space-y-6 md:space-y-8">
                     {[
                       "Direct access to senior engineering talent",
                       "Scalable cloud and AI architectures",
                       "Strategic technology roadmaps",
                       "Uncompromising focus on business impact"
                     ].map((item, i) => (
                       <motion.div 
                         key={item} 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.1 * i }}
                         className="flex items-center gap-4 md:gap-5 group"
                       >
                          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                            <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                          </div>
                          <span className="text-base md:text-lg font-bold tracking-tight">{item}</span>
                       </motion.div>
                     ))}
                  </div>
               </div>

               <div className="relative z-20 mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 flex items-center gap-6">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Thrayana Technologies © 2026</div>
               </div>
            </div>

            {/* Right Content - Form */}
            <div className="p-8 md:p-12 lg:p-20 bg-white">
               <form className="space-y-8 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
                     <div className="space-y-2 md:space-y-3 group">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors">First Name*</label>
                        <input 
                           type="text" 
                           placeholder="John" 
                           className="w-full bg-transparent border-0 border-b-2 border-slate-100 py-3 md:py-4 px-0 focus:ring-0 focus:border-primary transition-all text-lg md:text-xl font-bold placeholder:text-slate-200 outline-none" 
                        />
                     </div>
                     <div className="space-y-2 md:space-y-3 group">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors">Last Name*</label>
                        <input 
                           type="text" 
                           placeholder="Doe" 
                           className="w-full bg-transparent border-0 border-b-2 border-slate-100 py-3 md:py-4 px-0 focus:ring-0 focus:border-primary transition-all text-lg md:text-xl font-bold placeholder:text-slate-200 outline-none" 
                        />
                     </div>
                  </div>

                  <div className="space-y-2 md:space-y-3 group">
                     <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors">Work Email*</label>
                     <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-transparent border-0 border-b-2 border-slate-100 py-3 md:py-4 px-0 focus:ring-0 focus:border-primary transition-all text-lg md:text-xl font-bold placeholder:text-slate-200 outline-none" 
                     />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
                     <div className="space-y-2 md:space-y-3 group">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors">Company Name*</label>
                        <input 
                           type="text" 
                           placeholder="Thrayana Tech" 
                           className="w-full bg-transparent border-0 border-b-2 border-slate-100 py-3 md:py-4 px-0 focus:ring-0 focus:border-primary transition-all text-lg md:text-xl font-bold placeholder:text-slate-200 outline-none" 
                        />
                     </div>
                     <div className="space-y-2 md:space-y-3 group">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors">Industry*</label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-0 border-b-2 border-slate-100 py-3 md:py-4 px-0 focus:ring-0 focus:border-primary transition-all text-lg md:text-xl font-bold text-slate-900 appearance-none outline-none">
                             <option className="text-slate-300">Select Industry</option>
                             <option>Financial Services</option>
                             <option>Retail & E-commerce</option>
                             <option>Manufacturing</option>
                             <option>Healthcare</option>
                             <option>Technology</option>
                          </select>
                          <div className="absolute right-0 bottom-5 pointer-events-none text-slate-400">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                          </div>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2 md:space-y-3 group">
                     <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-primary transition-colors">Message*</label>
                     <textarea 
                        rows={3}
                        placeholder="How can we help you?" 
                        className="w-full bg-transparent border-0 border-b-2 border-slate-100 py-3 md:py-4 px-0 focus:ring-0 focus:border-primary transition-all text-lg md:text-xl font-bold placeholder:text-slate-200 outline-none resize-none" 
                     ></textarea>
                  </div>

                  <div className="pt-4 md:pt-8">
                     <motion.button 
                       type="submit" 
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       className="btn-primary w-full md:w-auto text-lg md:text-xl px-10 md:px-14 py-4 md:py-6 group shadow-xl shadow-primary/20"
                     >
                        Submit Inquiry
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                     </motion.button>
                  </div>
                  
                  <p className="text-[9px] md:text-[10px] text-slate-400 font-bold leading-relaxed max-w-sm">
                     By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and authorize Thrayana Technologies to process your data.
                  </p>
               </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};