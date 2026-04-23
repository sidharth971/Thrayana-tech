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
    { name: "Web Development", path: "/services#web-development" },
    { name: "Mobile Apps", path: "/services#mobile-app-development" },
    { name: "AI & Automation", path: "/services#ai-&-automation" },
    { name: "Cloud & DevOps", path: "/services#cloud-&-devops" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-dark pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">THRAYANA</span>
                <span className="text-xs text-white/70 tracking-wider">TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering businesses with innovative technology solutions. We transform ideas into powerful digital experiences.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Bangalore, Karnataka, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@thrayana.com"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  sales@thrayana.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Thrayana Technologies. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center hover:glow-coral transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};