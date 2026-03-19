/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  ExternalLink, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Code,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Mentorship', href: '#mentorship' },
    { name: 'DevTun', href: '#devtun' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-display font-bold tracking-tight text-zinc-900">
              Arwa <span className="text-primary italic">Badri</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-primary hover:bg-zinc-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-zinc-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl ${light ? 'text-zinc-300' : 'text-zinc-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-primary mt-4"
    />
  </div>
);

const TimelineItem = ({ 
  role, 
  company, 
  period, 
  description, 
  tasks 
}: { 
  role: string; 
  company: string; 
  period: string; 
  description?: string;
  tasks: string[];
}) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l border-zinc-200 last:pb-0"
  >
    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white" />
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <h3 className="text-xl font-bold text-zinc-900">{role}</h3>
      <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full mt-1 md:mt-0 inline-block w-fit">
        {period}
      </span>
    </div>
    <p className="text-lg font-medium text-zinc-700 mb-3">{company}</p>
    {description && <p className="text-zinc-600 mb-4 italic">{description}</p>}
    <ul className="space-y-2">
      {tasks.map((task, idx) => (
        <li key={idx} className="flex items-start text-zinc-600 text-sm">
          <ChevronRight className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
          <span>{task}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </motion.div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-zinc-50/50 skew-x-[-12deg] translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Available for Collaboration</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-zinc-900 leading-tight mb-6">
                Arwa Badri
              </h1>
              <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
                Technology Educator & EdTech Founder supporting schools and institutions in delivering practical and industry-relevant technology education.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#about" 
                  className="px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all flex items-center group"
                >
                  About Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#devtun" 
                  className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-semibold hover:bg-zinc-50 transition-all"
                >
                  Explore DevTun
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl relative">
                <img 
                  src="img/arwa.jpg"
                  alt="Arwa Badri" 
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-[200px]"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-bold text-zinc-900">Riyadh, KSA</span>
                </div>
                <p className="text-xs text-zinc-500">Based in Riyadh, working across Tunisia & Saudi Arabia.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <SectionHeading 
                title="Professional Profile" 
                subtitle="A technology educator and EdTech founder with experience in teaching, mentoring, and developing digital learning initiatives."
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Education Background</h4>
                    <p className="text-sm text-zinc-600">Master's in Cyber Physical Systems & Bachelor's in E-Business.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Industry Experience</h4>
                    <p className="text-sm text-zinc-600">Former Full-Stack Developer and IT Recruiter in blockchain platforms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Mentorship</h4>
                    <p className="text-sm text-zinc-600">Experience mentoring students and supporting technology communities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
                <p className="text-xl text-zinc-700 leading-relaxed mb-6">
                  Arwa Badri is a dedicated technology educator and the founder of the DevTun EdTech initiative. Currently based in Riyadh as an ICT Teacher, she specializes in teaching technology and programming concepts while simplifying complex technical topics for diverse learners.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  With a background spanning Tunisia and Saudi Arabia, Arwa leverages her experience as a former Full-Stack Developer and IT Recruiter to bridge the gap between academic learning and industry requirements. She is passionate about mentoring students and actively participating in technology communities to support digital tools adoption in learning environments.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
                  <div>
                    <span className="block text-3xl font-bold text-zinc-900">5+</span>
                    <span className="text-sm text-zinc-500 uppercase tracking-wider">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-zinc-900">400+</span>
                    <span className="text-sm text-zinc-500 uppercase tracking-wider">Students Mentored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Professional Experience" 
            subtitle="A timeline of my journey in technology education, development, and leadership."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <TimelineItem 
              role="ICT Teacher"
              company="Knowledge Towers School, Riyadh"
              period="Nov 2025 – Present"
              tasks={[
                "Delivered technology learning programs",
                "Supported the adoption of digital learning tools",
                "Communicated technology concepts to students and non-technical audiences",
                "Produced structured learning performance reports",
                "Coordinated academic sessions and learning initiatives"
              ]}
            />
            <TimelineItem 
              role="Founder"
              company="DevTun EdTech Initiative"
              period="Jan 2025 – Present"
              description="An education-focused platform connecting technology skills with institutional learning environments."
              tasks={[
                "Designed an EdTech model supporting schools and education providers",
                "Developed structured learning modules and digital learning solutions",
                "Engaged with students, educators and education communities to identify learning gaps",
                "Led partnerships and collaboration outreach",
                "Coordinated mentoring programs and technical workshops"
              ]}
            />
            <TimelineItem 
              role="ICT Teacher"
              company="Newcastle Institute"
              period="Jan 2023 – Nov 2025"
              tasks={[
                "Delivered structured technology training programs",
                "Simplified technical concepts for diverse learners through interactive teaching",
                "Monitored student progress and produced performance summaries",
                "Coordinated training schedules and logistics"
              ]}
            />
            <TimelineItem 
              role="Co-Founder & Mentor"
              company="Cyber Dev Students Club"
              period="Oct 2024 – Jun 2025"
              tasks={[
                "Mentored students in technology skills",
                "Supported hands-on learning and technical problem-solving",
                "Helped create collaborative learning environments"
              ]}
            />
            <TimelineItem 
              role="University Instructor"
              company="Higher Institute of Technological Studies (ISET)"
              period="Sep 2024 – Jan 2025"
              tasks={[
                "Delivered university-level technology instruction",
                "Evaluated student work using structured academic standards",
                "Maintained alignment with university academic frameworks"
              ]}
            />
            <TimelineItem 
              role="Full-Stack Developer & IT Recruiter"
              company="MintMe Coin"
              period="Mar 2022 – Nov 2022"
              tasks={[
                "Collaborated with technical teams and stakeholders",
                "Communicated technical requirements between technical and non-technical teams",
                "Tracked development progress and supported testing cycles",
                "Supported platform improvements and system testing"
              ]}
            />
            <TimelineItem 
              role="Technical Support"
              company="Media Ben Lazher"
              period="Mar 2021 – Mar 2022"
              tasks={[
                "Provided technical support and troubleshooting",
                "Created documentation and technical guides",
                "Communicated solutions clearly to users",
                "Analyzed recurring technical issues"
              ]}
            />
            <TimelineItem 
              role="Developer Analyst"
              company="Tousi SL"
              period="Nov 2020 – Mar 2021"
              tasks={[
                "Gathered user requirements",
                "Translated requirements into development tasks",
                "Documented system updates and feature improvements"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Recent & Current Work Section */}
      <section id="work" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Recent & Current Work" 
            subtitle="Visual highlights from my teaching sessions, workshops, and professional activities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { src: 'img/image1.jpg', caption: 'Workshop with students' },
              { src: 'img/image.jpg', caption: 'Mentoring session with tech club members' },
              { src: 'img/image3.jpg', caption: 'Classroom technology learning activity' },
              { src: 'img/image4.jpeg', caption: 'Students guidance' },
              { src: 'img/image5.jpg', caption: 'Participating in summit' },
              { src: 'img/image6.jpg', caption: 'participating in club integration day' },
            ].map((photo, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship & Community Work Section */}
      <section id="mentorship" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Mentorship & Community" 
                subtitle="Empowering students and supporting technology communities through hands-on guidance."
              />
              <div className="space-y-8 mt-8">
                <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">Co-Founder & Mentor – Cyber Dev Students Club</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Mentoring students in technical skills, supporting hands-on learning initiatives and helping solve technical problems in development environments.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">Mentor – Metaverse Tunisian Summit</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Supported teams in structuring ideas and preparing presentations during an international technology event with over 350 participants.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <img src="img/mentoring.jpeg" alt="Mentoring" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <img src="img/cds1.jpg" alt="Team Discussion" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pt-8"
              >
                <img src="img/mts.jpg" alt="Hackathon" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <img src="img/mts1.jpg" alt="Workshop" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* DevTun Section */}
      <section id="devtun" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeading 
                title="DevTun – EdTech Initiative" 
                light
              />
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                DevTun is an EdTech initiative that helps individuals discover the IT field that suits them best through soft-skills assessment, personality analysis, and guided learning pathways.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-zinc-400">Connecting <strong>self-discovery with technology education</strong>, helping beginners and career switchers understand how their <strong>skills, mindset and interests align with different careers in the IT domain </strong> before starting their learning journey.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-zinc-400">Providing participants with clear guidance on the most suitable path in technology through a combination of <strong> structured assessments, one-to-one analysis and personalized reports. </strong> </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-zinc-400">Offering <strong> introductory IT learning programs </strong> , allowing learners to explore different technology fields and validate their interests before committing to a specialization. </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold">Our Vision</h3>
                    <p className="text-zinc-400">Helping people choose the right path in technology before starting their journey.</p>
                  </div>
                </div>
                <p className="text-zinc-300 italic leading-relaxed">
                  "We believe that entering the IT world should begin with understanding one’s strengths, personality, and potential. By aligning soft skills with technology fields, learners can build meaningful and sustainable careers in the digital world"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <BookOpen className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Career Discovery Assessment</h3>
              <p className="text-zinc-400">A structured soft-skills assessment designed to identify personality traits, thinking styles, and abilities that influence success in different IT domains.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Code className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Personalized Career Report</h3>
              <p className="text-zinc-400">Each participant receives a comprehensive report including:

<li>Personal profile description</li>
<li>Observed soft skills</li>
<li>Core strengths and capabilities</li>
<li>SWOT analysis</li>
<li>Recommended IT career paths</li>
<li>Career decision flowchart</li>
<li>Step-by-step learning roadmap</li></p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">IT Field Exploration Programs</h3>
              <p className="text-zinc-400">Introductory lessons across multiple technology domains that help learners explore fields such as development, data, design, cybersecurity, and others before choosing a specialization.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <User className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">B2B Solutions for Schools and Organizations</h3>
              <p className="text-zinc-400">DevTun also works with schools, universities, and organizations by creating customized assessment programs that help identify students’ or participants’ potential in technology fields.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors md:col-span-2 lg:col-span-1">
              <Briefcase className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Institutional Support</h3>
              <p className="text-zinc-400">Each organization can receive tailored assessments and analysis frameworks adapted to their educational or training objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Community Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Education */}
            <div>
              <SectionHeading title="Education" />
              <div className="space-y-8">
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary">2024</span>
                    <h3 className="text-xl font-bold text-zinc-900 mt-1">Master of Science in Cyber Physical Systems</h3>
                    <p className="text-zinc-600">Higher Institute of Computer Sciences and Multimedia of Sfax (ISIM Sfax)</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary">2020</span>
                    <h3 className="text-xl font-bold text-zinc-900 mt-1">Bachelor’s Degree in E-Business</h3>
                    <p className="text-zinc-500 text-sm mb-1">Management Information Technology</p>
                    <p className="text-zinc-600">Higher Business School of Sfax (ESC Sfax)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community */}
            <div>
              <SectionHeading title="Community & Volunteering" />
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-zinc-900">Metaverse Tunisian Summit</h3>
                    <span className="text-xs font-bold px-2 py-1 bg-zinc-200 rounded uppercase">Mentor</span>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Supported teams in structuring ideas and preparing presentations during an international technology event with over 350 participants.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-zinc-900">AIESEC in Tunisia</h3>
                    <span className="text-xs font-bold px-2 py-1 bg-zinc-200 rounded uppercase">Global Volunteer</span>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Participated in youth leadership and international volunteering initiatives within the Global Volunteer Department.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-zinc-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16 bg-zinc-900 text-white">
                <h2 className="text-4xl font-display font-bold mb-8">Let's Collaborate</h2>
                <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                  Whether you are an individual exploring your path in IT or a school, university, or organization interested in collaboration, DevTun is open to working together to support technology learning and career discovery.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Email</p>
                      <a href="mailto:arwaba4@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">arwaba4@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 uppercase font-bold tracking-widest">LinkedIn</p>
                      <a href="https://linkedin.com/in/arwabadri" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">linkedin.com/in/arwabadri</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Location</p>
                      <p className="text-lg font-medium">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 md:p-16">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-zinc-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-zinc-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Collaboration Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project or institution..."
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/25">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <span className="text-2xl font-display font-bold text-zinc-900">
                Arwa <span className="text-primary italic">Badri</span>
              </span>
              <p className="text-zinc-500 text-sm mt-2">Technology Educator & EdTech Founder</p>
            </div>
            
            <div className="flex space-x-8 mb-8 md:mb-0">
              <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-primary">About</a>
              <a href="#experience" className="text-sm font-medium text-zinc-600 hover:text-primary">Experience</a>
              <a href="#devtun" className="text-sm font-medium text-zinc-600 hover:text-primary">DevTun</a>
              <a href="#contact" className="text-sm font-medium text-zinc-600 hover:text-primary">Contact</a>
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/arwabadri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:arwaba4@gmail.com" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Arwa Badri. All rights reserved.</p>
            <p className="mt-4 md:mt-0">DevTun EdTech Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
