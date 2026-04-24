import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact Us", path: "/contact" },
  ],
  services: [
    { name: "Software Engineering", path: "/services#software" },
    { name: "AI & Data Science", path: "/services#ai" },
    { name: "Digital Strategy", path: "/services#digital" },
    { name: "Cloud Infrastructure", path: "/services#cloud" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ]
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <Logo className="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter">THRAYANA</span>
                <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase -mt-1">Technologies</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8 max-w-sm">
              Engineering the future of enterprise technology through innovation, data science, and scalable AI solutions.
            </p>

          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">Capabilities</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400 font-bold text-sm leading-relaxed">
                  Enterprise Innovation Hub,<br />
                  Bangalore, KA 560001, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@thrayana.com" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">
                  contact@thrayana.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
             <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
               © {new Date().getFullYear()} Thrayana Technologies
             </p>
             <div className="flex gap-6">
                {footerLinks.legal.map(link => (
                  <Link key={link.name} to={link.path} className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
                    {link.name}
                  </Link>
                ))}
             </div>
          </div>
          
          <button 
             onClick={scrollToTop}
             className="group flex items-center gap-3 text-slate-500 hover:text-primary transition-colors"
          >
             <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to top</span>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowUp className="w-4 h-4" />
             </div>
          </button>
        </div>
      </div>
    </footer>
  );
};