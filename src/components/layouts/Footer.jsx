import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Heart,
  ChevronRight,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "App Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "SEO Services", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex-shrink-0">
              <Logo></Logo>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              We create beautiful and functional digital experiences that help
              businesses grow and succeed in the digital world.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Business Street, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+880 1234-567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@company.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Your Company. All rights reserved.
            </p>

            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Bangladesh</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
