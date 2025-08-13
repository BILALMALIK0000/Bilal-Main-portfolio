import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Github, Linkedin, Instagram, Mail, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/BILALMALIK0000", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bilal-malik-29331a2b7/", color: "hover:text-blue-400" },
   { icon: Instagram, href : "https://instagram.com/bilalmalik9000", color: "hover:text-pink-500" },
    { icon: Mail, href: "bilalmalik0938@gmail.com", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* About / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Muhammad Bilal Nadir</h3>
           <p className="text-gray-400 max-w-2xl mx-auto">
           Designing future-ready web applications and intelligent systems that blend creativity, performance, and innovation.
           </p>

          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${social.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>Made by Muhammad Bilal Malik</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-yellow-500" />
                <span>Fueled by passion & Tea</span>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              © {currentYear} Muhammad Bilal. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
