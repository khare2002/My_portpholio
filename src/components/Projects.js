import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaShieldAlt,
  FaCode, FaServer
} from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "IoT Security Simulation",
      category: "cybersecurity",
      description: "Simulated a comprehensive IoT network environment and implemented advanced security measures against common cyber attacks including DDoS, man-in-the-middle, and device spoofing.",
      features: [
        "Network vulnerability assessment",
        "Real-time threat detection",
        "Automated response systems",
        "Security protocol implementation"
      ],
      technologies: ["Python", "Packet Tracer", "Wireshark", "IoT Protocols"],
      image: "🔒",
      github: "https://github.com/khare2002/IOT-Security-Simulation",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Secure Chat Application",
      category: "development",
      description: "Developed a fully-featured chat application with end-to-end encryption, secure user authentication, and robust key exchange mechanisms ensuring complete privacy and data protection.",
      features: [
        "End-to-end encryption (AES-256)",
        "Secure user authentication",
        "Real-time messaging",
        "File sharing with encryption"
      ],
      technologies: ["Python", "JavaScript", "WebSocket", "Cryptography"],
      image: "💬",
      github: "https://github.com/khare2002/-Secure-File-Encryption-Tool",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "File Encryption Tool",
      category: "development",
      description: "Built a comprehensive file encryption/decryption tool using AES and RSA algorithms with secure file sharing capabilities and user-friendly interface.",
      features: [
        "AES & RSA encryption",
        "Secure file sharing",
        "Password protection",
        "Batch processing"
      ],
      technologies: ["Python", "Cryptography", "Tkinter", "SQLite"],
      image: "🔐",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 4,
      title: "Network Security Analyzer",
      category: "cybersecurity",
      description: "Created a network security analysis tool that scans for vulnerabilities, monitors traffic patterns, and provides detailed security reports with remediation recommendations.",
      features: [
        "Vulnerability scanning",
        "Traffic analysis",
        "Security reporting",
        "Automated alerts"
      ],
      technologies: ["Python", "Nessus", "OpenVAS", "Network Analysis"],
      image: "🛡️",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain Security Framework",
      category: "blockchain",
      description: "Developed a security framework for blockchain applications focusing on smart contract security, transaction validation, and consensus mechanism protection.",
      features: [
        "Smart contract auditing",
        "Transaction validation",
        "Consensus security",
        "Threat modeling"
      ],
      technologies: ["Solidity", "Python", "Web3", "Security Tools"],
      image: "⛓️",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Penetration Testing Toolkit",
      category: "cybersecurity",
      description: "Built a comprehensive penetration testing toolkit with automated scanning, exploit modules, and detailed reporting capabilities for security assessments.",
      features: [
        "Automated scanning",
        "Exploit modules",
        "Detailed reporting",
        "Custom payloads"
      ],
      technologies: ["Python", "Metasploit", "Nmap", "Custom Scripts"],
      image: "🔍",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const filters = [
    { name: 'all', label: 'All Projects' },
    { name: 'cybersecurity', label: 'Cybersecurity' },
    { name: 'development', label: 'Development' },
    { name: 'blockchain', label: 'Blockchain' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'cybersecurity': return FaShieldAlt;
      case 'development': return FaCode;
      case 'blockchain': return FaServer;
      default: return FaCode;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'cybersecurity': return '#FF4444';
      case 'development': return '#00D4FF';
      case 'blockchain': return '#FFD700';
      default: return '#00D4FF';
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.name
                  ? 'bg-primary text-background shadow-lg'
                  : 'bg-surface text-text-secondary hover:text-primary border border-surface-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const categoryColor = getCategoryColor(project.category);
            
            return (
              <motion.div
                key={project.id}
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="text-3xl"
                      style={{ color: categoryColor }}
                    >
                      {project.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <CategoryIcon 
                          className="text-sm" 
                          style={{ color: categoryColor }}
                        />
                        <span className="text-xs text-text-secondary capitalize">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-xs bg-primary text-background px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-text-secondary flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-surface-light text-text-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4 border-t border-surface-light">
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-sm" />
                    <span className="text-xs">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span className="text-xs">Live</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <a href="#contact" className="btn">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
