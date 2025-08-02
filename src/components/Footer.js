import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaGithub, FaLinkedin, FaEnvelope, FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/yashkhare',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/yash-khare-69766a249',
      color: '#0077B5'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:YashKhare2002@gmail.com',
      color: '#FF6B6B'
    }
  ];

  return (
    <footer className="bg-surface border-t border-surface-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <FaShieldAlt className="text-primary text-2xl" />
              <span className="text-xl font-bold text-primary">Yash Khare</span>
            </div>
            <p className="text-text-secondary text-sm">
              Cybersecurity specialist passionate about protecting digital assets and securing the future of technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#about" className="text-text-secondary hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-text-secondary hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-text-secondary hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-text-secondary hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-light hover:bg-surface transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: social.color }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-surface-light my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            className="text-text-secondary text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2024 Yash Khare. Made with{' '}
            <FaHeart className="inline text-accent" />{' '}
            for cybersecurity enthusiasts.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">Back to top</span>
            <FaArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 