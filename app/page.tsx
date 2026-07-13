"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import {
  ArrowDownRight, ArrowUpRight, Award, BriefcaseBusiness, Check, ChevronRight,
  Code2, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, Send, Sparkles,
  X, Download, Cpu, Database, Layers3, TerminalSquare, Trophy,
} from "lucide-react";

const links = {
  github: "https://github.com/awanishmishra642-commits",
  linkedin: "https://www.linkedin.com/in/awanish-mishra-349506235",
  email: "mailto:awanishmishra642@gmail.com",
  resume: "/documents/awanish-mishra-resume.pdf",
};

const projects = [
  {
    name: "Nerve IDE",
    category: "AI-powered coding interview platform",
    image: "/images/projects/nerve-ide.png",
    description: "A full-stack practice environment for technical interviews, pairing AI-generated DSA questions with a Monaco-powered editor, voice interaction, and performance feedback.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Groq AI"],
    github: "https://github.com/awanishmishra642-commits/Ai-coding-interviewer",
    demo: "https://ai-interview-master--trokilo06.replit.app/",
    tone: "indigo",
  },
  {
    name: "Women Safety Device",
    category: "IoT emergency-response wearable",
    image: "/images/projects/women-safety-device.png",
    description: "A portable ESP32 prototype for one-tap emergency alerts and live GPS location sharing through GSM-based communication.",
    stack: ["ESP32", "GSM", "GPS", "ThingSpeak"],
    github: "https://github.com/awanishmishra642-commits/Women-Safety-Device",
    tone: "rose",
    hardware: true,
  },
  {
    name: "Industrial Gas Safety",
    category: "Embedded industrial monitoring",
    image: "/images/projects/industrial-gas-system.png",
    description: "A real-time gas-leak safety system that detects hazardous levels, triggers alarms and exhaust control, sends SMS alerts, and logs readings to the cloud.",
    stack: ["ESP32", "MQ-2 / MQ-135", "GSM", "PCB Design"],
    github: "https://github.com/awanishmishra642-commits/Industrial-Gas-Safety-Monitoring-System",
    tone: "amber",
    hardware: true,
  },
];

const skillGroups = [
  { icon: Code2, label: "Languages", skills: ["Java", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { icon: Layers3, label: "Frontend", skills: ["React", "Tailwind CSS", "Responsive UI"] },
  { icon: TerminalSquare, label: "Backend & APIs", skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Postman"] },
  { icon: Database, label: "Data", skills: ["PostgreSQL", "Prisma ORM", "Relational schema design"] },
  { icon: Cpu, label: "Embedded & IoT", skills: ["ESP32", "Arduino Uno", "GSM / GPS", "ThingSpeak", "Sensors"] },
  { icon: Sparkles, label: "Computer Science", skills: ["DSA", "OOP", "DBMS", "OS", "Networks", "System design basics"] },
];

const certificates = [
  { title: "micro1 AI Interview", subtitle: "Outstanding interview performance", date: "June 29, 2026", image: "/images/certificates/micro1-ai-interview.jpg", asset: "", kind: "image" },
  { title: "TinkerCase 3.0", subtitle: "IEEE Day ’25 · Participation", date: "October 9, 2025", image: "/images/certificates/tinkercase.png", asset: "/documents/tinkercase-certificate.pdf", kind: "pdf" },
  { title: "ParanoX 2.0", subtitle: "Team Nemesis · Top 200 teams", date: "2025", image: "/images/certificates/paranox.png", asset: "/documents/paranox-certificate.pdf", kind: "pdf" },
  { title: "Deloitte Technology Job Simulation", subtitle: "Forage · Coding & development", date: "June 25, 2025", image: "/images/certificates/forage.png", asset: "/documents/forage-certificate.pdf", kind: "pdf" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !heroRef.current) return;
    const ctx = gsap.context(() => gsap.fromTo(".hero-orbit", { rotate: -8 }, { rotate: 8, duration: 4.5, ease: "sine.inOut", repeat: -1, yoyo: true }), heroRef);
    return () => ctx.revert();
  }, [reduced]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!selectedCertificate) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCertificate]);

  return <main>
    <nav className="nav-shell" aria-label="Main navigation">
      <a className="wordmark" href="#top" onClick={closeMenu}>AM<span>.</span></a>
      <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      <a className="nav-resume" href={links.resume} download><Download size={15} /> Resume</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      <AnimatePresence>{menuOpen && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><a onClick={closeMenu} href="#about">About</a><a onClick={closeMenu} href="#work">Work</a><a onClick={closeMenu} href="#experience">Experience</a><a onClick={closeMenu} href="#contact">Contact</a></motion.div>}</AnimatePresence>
    </nav>

    <section className="hero" id="top" ref={heroRef}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="hero-copy">
        <motion.div className="availability" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span /><span>Open to opportunities</span></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.7 }}>Designing thoughtful<br /><em>technology</em> for the real world.</motion.h1>
        <motion.p className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.7 }}>I’m Awanish Mishra — a final-year IoT student building AI-powered applications, embedded systems, and scalable software.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}><a className="button button-primary" href="#work">View projects <ArrowDownRight size={17} /></a><a className="button button-secondary" href="#contact">Contact me <Mail size={16} /></a></motion.div>
      </div>
      <motion.div className="portrait-stage" initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}><div className="hero-orbit" /><div className="portrait-frame"><Image src="/images/hero-awanish.jpeg" alt="Awanish Mishra outdoors in a dark half-zip jacket" fill priority sizes="(max-width: 850px) 75vw, 360px" /></div><div className="portrait-note"><span>Based in</span><strong>Gwalior, India</strong><MapPin size={15} /></div></motion.div>
      <a className="scroll-note" href="#about"><span>Scroll to explore</span><ChevronRight size={16} /></a>
    </section>

    <section id="about" className="section about-section">
      <Reveal><SectionTitle eyebrow="01 — About" title="A curious builder at the intersection of intelligent software and the physical world." /></Reveal>
      <div className="about-grid"><Reveal className="about-image-wrap"><Image src="/images/about-awanish.jpg" alt="Awanish Mishra outdoors" width={600} height={768} sizes="(max-width: 850px) 280px, 360px" /><span>Always learning, always building.</span></Reveal><Reveal className="about-story"><p>I enjoy turning real-world problems into useful technology — from AI-powered applications to embedded systems and IoT products. I’m continuously learning new tools and care about the details that make a product clear, dependable, and human.</p><div className="principles"><div><span>Education</span><strong>B.Tech in Internet of Things</strong><small>MITS, Gwalior · 2023–2027 · CGPA 7.62</small></div><div><span>Focus</span><strong>Software with real-world purpose</strong><small>AI · IoT · Embedded systems · Product building</small></div></div></Reveal></div>
    </section>

    <section className="section skills-section"><Reveal><SectionTitle eyebrow="02 — Toolkit" title="A versatile engineering foundation." copy="From interface to infrastructure to hardware, I enjoy working across the whole system." /></Reveal><div className="skills-grid">{skillGroups.map(({ icon: Icon, label, skills }) => <Reveal key={label} className="skill-card"><Icon size={20} /><h3>{label}</h3><div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div></section>

    <section id="work" className="section work-section"><Reveal><SectionTitle eyebrow="03 — Selected work" title="Building products that turn complexity into clarity." /></Reveal><div className="project-list">{projects.map((project, index) => <Reveal key={project.name} className={`project-card ${project.tone}`}><div className="project-visual"><Image src={project.image} alt={`${project.name} project interface or prototype`} width={960} height={520} sizes="(max-width: 850px) 100vw, 52vw" /><span className="project-index">0{index + 1}</span></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a> : project.hardware && <span className="hardware-badge">Hardware Project — Source Code &amp; Documentation Available</span>}</div></div></Reveal>)}</div>
    </section>

    <section id="experience" className="section experience-section"><Reveal><SectionTitle eyebrow="04 — Experience" title="Learning how high-quality AI systems are shaped." /></Reveal><Reveal className="experience-card"><div className="experience-meta"><span>Jan — May 2026</span><span>Ethara AI</span></div><div className="experience-body"><h3>LLM Post-Training Intern</h3><p>Worked on structured data quality and evaluation workflows for LLM post-training, collaborating through review cycles to improve model output reliability.</p><ul><li><Check /> Curated and annotated large-scale training data using defined quality criteria.</li><li><Check /> Evaluated AI-generated outputs, identifying error patterns against correctness benchmarks.</li><li><Check /> Contributed technical feedback within multi-person model training and evaluation workflows.</li></ul></div><BriefcaseBusiness className="experience-icon" size={42} /></Reveal></section>

    <section className="section achievement-section"><Reveal><SectionTitle eyebrow="05 — Recognition" title="Progress measured in practice, not just potential." /></Reveal><div className="achievement-grid"><Reveal className="achievement-card"><Trophy /><span>Recognition</span><h3>ParanoX 2.0</h3><p>Team Nemesis was recognized among the Top 200 teams and qualified for the Top 822 pre-final participants.</p></Reveal><Reveal className="achievement-card"><Award /><span>Program</span><h3>Deloitte Job Simulation</h3><p>Completed practical coding and development tasks in Deloitte’s Technology Job Simulation on Forage.</p></Reveal><Reveal className="achievement-card"><Sparkles /><span>Community</span><h3>Campus & initiative</h3><p>Campus Ambassador at Codefest, IIT BHU; college volleyball event organizer; and contributor to an affordable IoT components supply initiative.</p></Reveal></div></section>

    <section className="section certificates-section"><Reveal><SectionTitle eyebrow="06 — Certificates" title="Moments that mark the journey." copy="Click a certificate to view the original document." /></Reveal><div className="certificate-grid">{certificates.map((certificate) => <Reveal key={certificate.title}><button className="certificate-card" onClick={() => setSelectedCertificate(certificate)}><div className="certificate-image"><Image src={certificate.image} alt="" fill sizes="(max-width: 850px) 50vw, 25vw" /><span>View <ArrowUpRight size={15} /></span></div><div><p>{certificate.date}</p><h3>{certificate.title}</h3><small>{certificate.subtitle}</small></div></button></Reveal>)}</div></section>

    <section className="section github-section"><Reveal><div className="github-panel"><div><p className="eyebrow">07 — GitHub</p><h2>Code is where ideas<br />become tangible.</h2><p>Explore the repositories behind the projects, experiments, and learning in progress.</p></div><a className="github-link" href={links.github} target="_blank" rel="noreferrer"><Github size={22} /><span>awanishmishra642-commits</span><ArrowUpRight size={18} /></a></div></Reveal></section>

    <section id="contact" className="section contact-section"><div className="contact-orb" /><Reveal><p className="eyebrow">08 — Contact</p><h2>Let’s make something<br /><em>meaningful.</em></h2><p>Have an opportunity, collaboration, or project in mind? I’d be glad to hear from you.</p><div className="contact-actions"><a className="button button-primary" href={links.email}>Send an email <Send size={16} /></a><a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16} /></a></div></Reveal><Reveal className="contact-links"><a href={links.email}><Mail /> <span>awanishmishra642@gmail.com</span><ArrowUpRight /></a><a href={links.github} target="_blank" rel="noreferrer"><Github /> <span>GitHub</span><ArrowUpRight /></a><a href={links.resume} download><Download /> <span>Download resume</span><ArrowDownRight /></a></Reveal></section>

    <footer><span>© {new Date().getFullYear()} Awanish Mishra</span><span>Built with focus and curiosity.</span></footer>

    <AnimatePresence>{selectedCertificate && <motion.div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${selectedCertificate.title} certificate`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCertificate(null)}><motion.div className="certificate-modal" initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 16 }} onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate"><X /></button><div className="modal-title"><span>{selectedCertificate.date}</span><h3>{selectedCertificate.title}</h3></div><a className="modal-download" href={selectedCertificate.kind === "pdf" ? selectedCertificate.asset : selectedCertificate.image} download aria-label={`Download ${selectedCertificate.title} certificate`}><Download size={15} /> Download</a>{selectedCertificate.kind === "image" ? <Image src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} width={1920} height={1080} sizes="90vw" /> : <iframe src={selectedCertificate.asset} title={selectedCertificate.title} />}</motion.div></motion.div>}</AnimatePresence>
  </main>;
}
