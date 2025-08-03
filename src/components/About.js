import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaShieldAlt, FaCode, FaUsers } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology (CS)",
      institution: "Global Engineering College",
      year: "Expected 2026",
      description: "Specialization in IoT Cybersecurity and Blockchain Technology"
    },
    {
      degree: "Higher Secondary School",
      institution: "Maharshi Vidhya Mandir",
      year: "2021-2022",
      description: "Class 12th (PCM) - 71%"
    }
  ];

  const highlights = [
    {
      icon: FaShieldAlt,
      title: "Cybersecurity Focus",
      description: "Specialized in network security, ethical hacking, and digital forensics"
    },
    {
      icon: FaCode,
      title: "Technical Expertise",
      description: "Proficient in Python, C++, JavaScript, and security tools like Nessus, OpenVAS"
    },
    {
      icon: FaUsers,
      title: "Leadership Experience",
      description: "Active in college IT club and volunteered with RHA for community outreach"
    },
    {
      icon: FaGraduationCap,
      title: "Continuous Learning",
      description: "8+ certifications including Cisco CCNA, Python Essentials, and Cybersecurity"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Dedicated Cybersecurity Specialist
            </h3>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                I am a passionate B.Tech student pursuing Computer Science and Engineering with a specialization in cybersecurity with a strong foundation in network security, ethical hacking, and digital forensics. My journey in the world of cybersecurity began with a curiosity about how systems can be protected and how vulnerabilities can be identified and mitigated.
              </p>
              
              <p>
                Currently pursuing my degree at Global Engineering College with a focus on IoT Cybersecurity and Blockchain Technology, I've developed expertise in various security protocols, risk management strategies, and threat mitigation techniques.
              </p>
              
              <p>
                I believe in the power of continuous learning and have earned multiple certifications including Cisco CCNA, Python Essentials, and various cybersecurity certifications. My goal is to contribute to a dynamic cybersecurity team where I can leverage my knowledge to protect digital assets and ensure secure operations.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <highlight.icon className="text-primary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <FaGraduationCap className="mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-accent text-sm mb-2">
                      {edu.year}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Objective */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Career Objective
              </h3>
              <p className="text-text-secondary">
                Seeking an internship or entry-level position to leverage knowledge of security protocols, risk management, and threat mitigation to contribute to a dynamic cybersecurity team.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-surface-light rounded-lg">
                  <div className="text-2xl font-bold text-primary">2026</div>
                  <div className="text-sm text-text-secondary">Graduation Year</div>
                </div>
                <div className="text-center p-3 bg-surface-light rounded-lg">
                  <div className="text-2xl font-bold text-primary">71%</div>
                  <div className="text-sm text-text-secondary">12th Grade Score</div>
                </div>
                <div className="text-center p-3 bg-surface-light rounded-lg">
                  <div className="text-2xl font-bold text-primary">IoT, Cybersecurity and Blockchain Technology</div>
                  <div className="text-sm text-text-secondary">Specialization</div>
                </div>
                <div className="text-center p-3 bg-surface-light rounded-lg">
                  <div className="text-2xl font-bold text-primary">Blockchain and Cybersecurity</div>
                  <div className="text-sm text-text-secondary">Technology Focus</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 