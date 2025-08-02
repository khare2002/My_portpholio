import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaDatabase, FaShieldAlt, 
  FaNetworkWired, FaLock, FaCloud, FaServer, FaTerminal, FaCode, FaUsers
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiPowershell, SiCisco } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "Python", icon: FaPython, level: 90, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, level: 85, color: "#00599C" },
        { name: "C", icon: SiC, level: 80, color: "#A8B9CC" },
        { name: "JavaScript", icon: FaJs, level: 75, color: "#F7DF1E" },
        { name: "Java", icon: FaJava, level: 70, color: "#ED8B00" },
        { name: "Bash", icon: FaTerminal, level: 80, color: "#4EAA25" },
        { name: "PowerShell", icon: SiPowershell, level: 75, color: "#5391FE" },
        { name: "SQL", icon: FaDatabase, level: 85, color: "#336791" }
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: FaShieldAlt,
      skills: [
        { name: "Nessus", icon: FaShieldAlt, level: 85, color: "#00A8E1" },
        { name: "OpenVAS", icon: FaShieldAlt, level: 80, color: "#00FF88" },
        { name: "Packet Tracer", icon: SiCisco, level: 90, color: "#1BA0D7" },
        { name: "Wireshark", icon: FaNetworkWired, level: 75, color: "#1679A7" },
        { name: "Metasploit", icon: FaTerminal, level: 70, color: "#FF6B6B" },
        { name: "Burp Suite", icon: FaShieldAlt, level: 75, color: "#FF5722" }
      ]
    },
    {
      title: "Security Concepts",
      icon: FaLock,
      skills: [
        { name: "Network Security", icon: FaNetworkWired, level: 90, color: "#00D4FF" },
        { name: "Cryptography", icon: FaLock, level: 85, color: "#FFD700" },
        { name: "Ethical Hacking", icon: FaShieldAlt, level: 80, color: "#FF4444" },
        { name: "Digital Forensics", icon: FaServer, level: 75, color: "#9C27B0" },
        { name: "Risk Management", icon: FaShieldAlt, level: 85, color: "#4CAF50" },
        { name: "Incident Response", icon: FaShieldAlt, level: 80, color: "#FF9800" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: FaCloud,
      skills: [
        { name: "AWS", icon: FaCloud, level: 75, color: "#FF9900" },
        { name: "Azure", icon: FaCloud, level: 70, color: "#0089D6" },
        { name: "Docker", icon: FaServer, level: 65, color: "#2496ED" },
        { name: "Kubernetes", icon: FaServer, level: 60, color: "#326CE5" },
        { name: "Linux", icon: FaTerminal, level: 85, color: "#FCC624" },
        { name: "Windows Security", icon: FaShieldAlt, level: 80, color: "#0078D4" }
      ]
    }
  ];

  const softSkills = [
    { name: "Analytical Thinking", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Adaptability", level: 85 },
    { name: "Team Collaboration", level: 80 },
    { name: "Attention to Detail", level: 95 }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Technical Skills */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="text-primary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <skill.icon 
                        className="text-2xl mr-3" 
                        style={{ color: skill.color }}
                      />
                      <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                    </div>
                    
                    <div className="w-full bg-surface-light rounded-full h-2 mb-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          width: `${skill.level}%`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Proficiency</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaUsers className="text-primary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-surface-light rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-6 text-primary">Additional Skills & Tools</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Security Protocols</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• AES & RSA Encryption</li>
                  <li>• SSL/TLS Implementation</li>
                  <li>• Endpoint Security</li>
                  <li>• Firewall Configuration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Version Control</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Git & GitHub</li>
                  <li>• Branch Management</li>
                  <li>• Collaborative Development</li>
                  <li>• Code Review</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Methodologies</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• OOP Principles</li>
                  <li>• Agile Development</li>
                  <li>• Security Testing</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 