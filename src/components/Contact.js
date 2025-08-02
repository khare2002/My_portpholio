import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
  FaPaperPlane, FaUser, FaComment
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 9131504873",
      href: "tel:+919131504873",
      color: "#00D4FF"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "YashKhare2002@gmail.com",
      href: "mailto:YashKhare2002@gmail.com",
      color: "#FF6B6B"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Jabalpur, MP, India",
      href: "#",
      color: "#FFD700"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/yash-khare-69766a249",
      href: "https://linkedin.com/in/yash-khare-69766a249",
      color: "#0077B5"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Let's Connect
            </h3>
            
            <p className="text-text-secondary mb-8">
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question about my work, want to discuss a potential collaboration, 
              or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 p-4 bg-surface rounded-lg hover:bg-surface-light transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="text-2xl p-3 rounded-lg"
                    style={{ 
                      backgroundColor: `${contact.color}20`,
                      color: contact.color
                    }}
                  >
                    <contact.icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-text-secondary text-sm font-mono">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="mt-8 card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-text-primary mb-3">Current Status</h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-text-secondary">Available for new opportunities</span>
              </div>
              <p className="text-text-secondary text-sm mt-2">
                I'm currently seeking internships and entry-level positions in cybersecurity.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-surface-light border border-surface-light rounded-lg focus:border-primary focus:outline-none text-text-primary placeholder-text-muted"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-surface-light border border-surface-light rounded-lg focus:border-primary focus:outline-none text-text-primary placeholder-text-muted"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface-light border border-surface-light rounded-lg focus:border-primary focus:outline-none text-text-primary placeholder-text-muted"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-text-muted" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full pl-10 pr-4 py-3 bg-surface-light border border-surface-light rounded-lg focus:border-primary focus:outline-none text-text-primary placeholder-text-muted resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn w-full flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-text-secondary mb-6">
              I'm passionate about cybersecurity and always excited to work on challenging projects. 
              Whether it's securing networks, developing secure applications, or contributing to 
              innovative security solutions, I'm ready to bring my expertise to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:YashKhare2002@gmail.com" className="btn">
                Send Email
              </a>
              <a href="https://linkedin.com/in/yash-khare-69766a249" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 