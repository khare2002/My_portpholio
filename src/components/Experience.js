import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCertificate, FaUsers, FaShieldAlt, FaGraduationCap, 
  FaTrophy, FaHandshake, FaLightbulb, FaRocket
} from 'react-icons/fa';

const Experience = () => {
  const certifications = [
    {
      name: "Python for Data Science",
      issuer: "Coding Ninjas",
      year: "2023",
      icon: FaCertificate,
      color: "#3776AB"
    },
    {
      name: "Deep Learning Bootcamp",
      issuer: "Devtown",
      year: "2023",
      icon: FaCertificate,
      color: "#FF6B6B"
    },
    {
      name: "Cisco CCNA 1, 2, 3",
      issuer: "Cisco",
      year: "2023",
      icon: FaShieldAlt,
      color: "#1BA0D7"
    },
    {
      name: "Python Essentials 1 & 2",
      issuer: "Cisco NetAcad",
      year: "2023",
      icon: FaCertificate,
      color: "#3776AB"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      year: "2023",
      icon: FaShieldAlt,
      color: "#1BA0D7"
    },
    {
      name: "Palo Alto & Microsoft Cybersecurity",
      issuer: "Palo Alto & Microsoft",
      year: "2023",
      icon: FaShieldAlt,
      color: "#FF9900"
    }
  ];

  const internships = [
    {
      role: "Cybersecurity & Ethical Hacking Intern",
      organization: "CODTECH IT SOLUTIONS PVT. LTD.",
      period: "April 21, 2025 - June 21, 2025",
      duration: "8 Weeks",
      description: "Online internship with comprehensive training in cybersecurity and ethical hacking. Focused on practical skill development and gaining hands-on experience in security tools and methodologies.",
      icon: FaShieldAlt,
      achievements: [
        "Complete all assignments to the best of ability",
        "Follow lawful and reasonable instructions from supervisors",
        "Participate actively in team meetings and discussions",
        "Provide regular updates on progress and learning outcomes",
        "Adhere to company policies and maintain professional demeanor",
        "Collaborate effectively with team members on group projects",
        "Seek feedback and apply it to improve performance"
      ],
      skills: ["Cybersecurity", "Ethical Hacking", "Security Tools", "Team Collaboration", "Professional Development"],
      location: "Hyderabad, Telangana (Remote)",
      internId: "CT2MTDA462"
    }
  ];

  const leadership = [
    {
      role: "IT Club Member",
      organization: "Global Engineering College",
      period: "2022 - Present",
      description: "Active member organizing seminars and workshops on AI, cybersecurity, and blockchain technology. Led technical sessions and mentored junior students.",
      icon: FaUsers,
      achievements: [
        "Organized 5+ technical workshops",
        "Mentored 20+ junior students",
        "Conducted cybersecurity awareness sessions"
      ]
    },
    {
      role: "RHA Volunteer",
      organization: "Residence Hall Association",
      period: "2022 - Present",
      description: "Volunteered with RHA leading food drives, community outreach programs, and awareness campaigns to support local communities.",
      icon: FaHandshake,
      achievements: [
        "Led 3 community food drives",
        "Organized awareness campaigns",
        "Coordinated with 50+ volunteers"
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained strong academic performance while pursuing specialized cybersecurity coursework",
      icon: FaGraduationCap,
      color: "#00D4FF"
    },
    {
      title: "Technical Leadership",
      description: "Demonstrated leadership in technical communities and student organizations",
      icon: FaUsers,
      color: "#FF6B6B"
    },
    {
      title: "Continuous Learning",
      description: "Earned 8+ professional certifications in cybersecurity and programming",
      icon: FaCertificate,
      color: "#FFD700"
    },
    {
      title: "Community Service",
      description: "Actively contributed to community development through volunteer work",
      icon: FaHandshake,
      color: "#00FF88"
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience & Achievements
        </motion.h2>

        {/* Internships */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <FaShieldAlt className="text-primary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Internships</h3>
          </div>
          
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <internship.icon className="text-primary text-2xl mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-xl mb-2">
                      {internship.role}
                    </h4>
                    <p className="text-primary text-lg mb-1">
                      {internship.organization}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <p className="text-accent">
                        <span className="font-semibold">Period:</span> {internship.period}
                      </p>
                      <p className="text-accent">
                        <span className="font-semibold">Duration:</span> {internship.duration}
                      </p>
                      <p className="text-accent">
                        <span className="font-semibold">Location:</span> {internship.location}
                      </p>
                      <p className="text-accent">
                        <span className="font-semibold">Intern ID:</span> {internship.internId}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6">
                  {internship.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-semibold text-text-primary mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-text-secondary flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-text-primary mb-3">Skills Developed:</h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-surface-light text-primary text-xs rounded-full border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <FaCertificate className="text-primary text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-primary">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="text-2xl mt-1"
                      style={{ color: cert.color }}
                    >
                      <cert.icon />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-primary text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-accent text-xs">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <FaUsers className="text-primary text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-primary">Leadership Experience</h3>
            </div>
            
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <role.icon className="text-primary text-xl mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary mb-1">
                        {role.role}
                      </h4>
                      <p className="text-primary text-sm mb-1">
                        {role.organization}
                      </p>
                      <p className="text-accent text-xs">
                        {role.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4">
                    {role.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-text-primary mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {role.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-xs text-text-secondary flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <FaTrophy className="text-primary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Key Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="text-4xl mb-4 mx-auto"
                  style={{ color: achievement.color }}
                >
                  <achievement.icon />
                </div>
                <h4 className="font-semibold text-text-primary mb-3">
                  {achievement.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <div className="flex items-center mb-6">
              <FaRocket className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-primary">Future Goals</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Short-term Goals</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <FaLightbulb className="text-primary mr-2 text-sm" />
                    Complete advanced cybersecurity certifications
                  </li>
                  <li className="flex items-center">
                    <FaLightbulb className="text-primary mr-2 text-sm" />
                    Contribute to open-source security projects
                  </li>
                  <li className="flex items-center">
                    <FaLightbulb className="text-primary mr-2 text-sm" />
                    Develop more IoT security solutions
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Long-term Goals</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <FaRocket className="text-primary mr-2 text-sm" />
                    Lead cybersecurity teams in major organizations
                  </li>
                  <li className="flex items-center">
                    <FaRocket className="text-primary mr-2 text-sm" />
                    Develop innovative blockchain security protocols
                  </li>
                  <li className="flex items-center">
                    <FaRocket className="text-primary mr-2 text-sm" />
                    Contribute to cybersecurity education and awareness
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 