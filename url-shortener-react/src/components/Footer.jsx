import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLink,
  FaEnvelope,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Dashboard", path: "/dashboard" },
];

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://facebook.com",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com",
  },
];

const Footer = () => {
  return (
      <footer className="relative overflow-hidden bg-custom-gradient text-white">
        {/* Background Blur */}
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>

        {/* Top Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 py-14">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <FaLink className="text-cyan-300 text-2xl" />
                </div>

                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                  Linklytics
                </h1>
              </div>

              <p className="text-white/80 leading-7">
                Linklytics helps you shorten, organize, and monitor your URLs
                with powerful analytics, secure link management, and lightning
                fast redirects.
              </p>

              <div className="flex items-center gap-3 mt-6 text-white/80">
                <FaEnvelope />
                <span>support@linklytics.com</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
            >
              <h2 className="text-2xl font-bold mb-6">
                Quick Links
              </h2>

              <div className="space-y-4">
                {quickLinks.map((link) => (
                    <motion.div
                        key={link.name}
                        whileHover={{
                          x: 6,
                        }}
                    >
                      <Link
                          to={link.path}
                          className="text-white/80 hover:text-cyan-300 transition duration-300 text-lg"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center lg:text-right"
            >
              <h2 className="text-2xl font-bold mb-6">
                Connect With Us
              </h2>

              <div className="flex justify-center lg:justify-end gap-5">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          y: -8,
                          scale: 1.2,
                          rotate: 10,
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                ))}
              </div>

              <p className="mt-8 text-white/80 leading-7">
                Stay connected and discover the latest updates, features, and
                improvements from Linklytics.
              </p>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-center">
              © 2026 Linklytics. All Rights Reserved.
            </p>

            <p className="text-white/70 text-sm text-center">
              Built with ❤️ for faster, smarter, and more secure link management.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;