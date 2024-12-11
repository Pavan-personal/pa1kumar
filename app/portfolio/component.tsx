"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import MyImg from "./image/MyImg.jpeg";
import X from "./image/x.png";
import github from "./image/github-logo.png";
import mail from "./image/email.png";
import project1 from "./image/project1.png";
import project2 from "./image/project2.png";
import project3 from "./image/project3.png";
import "./portfolio.css";
import {
  Github,
  Send,
  Code,
  Briefcase,
  Cpu,
  Globe,
  Terminal,
  Award,
  Heart,
  ExternalLink,
  CurrencyIcon,
} from "lucide-react";
import Image from "next/image";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", mass: 0.1 }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-sm" />
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const resumeLink = "https://drive.google.com/uc?export=download&id=1W2GzkqbvAi-WgyfrS5LDK38aZJuYt_S-";

  const InteractiveCard = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const [mousePosition, setMousePosition] = useState<{
      x: number;
      y: number;
    }>({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect: DOMRect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden bg-[#0C0C14] border border-gray-800 rounded-xl ${className}`}
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 25%)`,
        }}
      >
        {children}
      </motion.div>
    );
  };

  const sections = [
    { id: "home", icon: Terminal, label: "Home" },
    { id: "skills", icon: Cpu, label: "Skills" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "interests", icon: Heart, label: "Interests" },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "Rust"],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Materail UI",
        "Tailwind CSS",
        "AccentricityUI",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Socket.io",
        "WebRTC",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Vercel", "AWS", "Linux", "Firebase"],
    },
  ];

  const projects = [
    {
      title: "FilmyBuffs: a platform movie enthusiasts",
      description:
        "Apply and post roles for movies, and connect with other movie enthusiasts.",
      tech: ["MERN", "Material UI", "Cloudinary", "Tailwind CSS", "Recoil"],
      links: {
        github: "https://github.com/Pavan-personal/FilmybuffsPublic",
        live: "https://filmybuffs.vercel.app",
      },
    },
    {
      title: "CookShare: Recipe Sharing Platform",
      description: "Share and discover new recipes with the community.",
      tech: ["MERN", "Firebase", "Tailwind CSS"],
      links: {
        github: "https://github.com/Pavan-personal/recipePublic",
        live: "https://recipe-app-r3eo.vercel.app",
      },
    },
    {
      title: "Employee: Attendance & data management",
      description:
        "Organizational specific employee management system with attendance portal.",
      tech: ["MERN", "Tailwind CSS", "Chart.js"],
      links: {
        github: "https://github.com/Pavan-personal/EmployeeManagementPublic",
        live: "https://smartemployee-managementystem.vercel.app",
      },
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Cappsule",
      type: "Full-time",
      period: "2024 July - Present",
      achievements: [
        "Developed and maintained web applications using React.",
        "Improved system performance by 40%.",
        "Used virtualization to reduce costs by 20%.",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Sabhyasha Retail tech",
      type: "Internship",
      period: "2024 May - 2024 July",
      achievements: [
        "Built responsive web pages Tailwind.",
        "Worked on e-commerce end-to-end.",
        "Reduced load times by 60%.",
      ],
    },
  ];

  const interests = [
    {
      icon: Send,
      label: "WebRTC & WebSockets",
      description:
        "Developing peer-to-peer video, voice, and real-time communications",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: CurrencyIcon,
      label: "Web3 & Solana",
      description:
        "This is something I'm very excited about! Building smart contracts and DApps using Solana and Rust.",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <div className="select-none min-h-screen text-gray-200">
      <CursorFollower />

      <div className="fixed inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-fit px- max-w-3xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#0C0C14]/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-800"
        >
          <div className="flex justify-between w-fit mx-auto items-center">
            <motion.div
              className="flex space-x-6"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setActiveSection(section.id);
                    }}
                    onMouseEnter={() => {
                      const tooltip = document.createElement("div");
                      tooltip.className = "tooltip";
                      tooltip.textContent = section.label;
                    }}
                  >
                    <Icon size={20} />
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-purple-500/10 rounded-lg -z-10"
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </nav>

      <section
        id="home"
        className="min-h-screen overflow-hidden relative flex items-center justify-center px-4 pt-16 md:pt-0"
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 pt-12 sm:pt-0"
              >
                <span className="text-purple-400 text-lg md:text-xl font-medium">
                  Heyy, I&apos;m
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Pavan Kumar
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white">
                  Expect less & be amazed!
                </h2>
              </motion.div>

              <motion.p
                className="text-base md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I&apos;m a full-stack web developer skilled in MERN and Next.js.
                I do freelancing and contribute to open-source. Right now,
                I&apos;m exploring WebSockets, webRTC and Web3. Let&apos;s
                connect if you have any project in your mind! (PS: I&apos;m a
                good prompt engineer! 😁)
              </motion.p>

              <motion.div
                className="flex justify-center lg:justify-start gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#contact"
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold"
                >
                  Connect
                </motion.a>

                <motion.a
                  href={resumeLink}
                  download="Pavans_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-gray-800 rounded-full font-semibold border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 sm:hidden relative mt-8 md:mt-0 w-full max-w-xs md:max-w-none mx-auto"
            >
              <motion.div
                className="relative z-10 w-full max-w-[400px] aspect-[4/5] mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={MyImg}
                  alt="Picture of the author"
                  className="w-full h-full rounded-xl object-cover object-center"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="image-container relative z-10 w-[400px] h-[500px] mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6"
                animate={{
                  rotate: [6, -2, 6],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-6"
                animate={{
                  rotate: [-6, 2, -6],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-gray-800 bg-[#0C0C14]">
                <Image
                  src={MyImg}
                  alt="Picture of the author"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute -right-8 top-10 p-4 bg-[#0C0C14]/80 backdrop-blur-xl rounded-xl border border-gray-800"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Code className="w-6 h-6 text-purple-400" />
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 p-4 bg-[#0C0C14]/80 backdrop-blur-xl rounded-xl border border-gray-800"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Globe className="w-6 h-6 text-blue-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <InteractiveCard key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="px-4 py-2 bg-gray-800/50 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <InteractiveCard key={index} className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-6"
                  >
                    <div className="relative h-36 mb-4 rounded-lg overflow-hidden group">
                      <Image
                        src={
                          index === 0
                            ? project1
                            : index === 1
                            ? project2
                            : project3
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6"
                      >
                        <motion.a
                          href={project.links?.github}
                          className="text-white p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "tween" }}
                        >
                          <Github size={24} />
                        </motion.a>
                        <motion.a
                          href={project.links?.live}
                          className="text-white p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "tween" }}
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                      </motion.div>
                    </div>
                    <motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech?.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full 
                          border border-gray-700/50 backdrop-blur-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </InteractiveCard>
              ))}
            </div>

            <InteractiveCard
              className="text-center col-span-3 text-gray-400 text-[1.1rem] mt-8
             font-semibold border-none flex flex-col py-2 bg-none bg-transparent
            "
            >
              Many more projects in progress...
              <a
                href="https://github.com/Pavan-personal"
                className="text-sm cursor-pointer text-center bg-none hover:text-blue-500 border-none"
              >
                (visit my github for more)
              </a>
            </InteractiveCard>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="min-h-screen py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <InteractiveCard key={index} className="p-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-gray-400">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-col">
                      <span className="text-gray-500 text-right">
                        {job.period}
                      </span>
                      <span className="text-gray-500 self-end place-self-end">
                        {" "}
                        {job.type}{" "}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-2"
                      >
                        <Award className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="interests" className="min-h-screen py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col gap-[2rem]"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Current I&apos;m focusing on...
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <InteractiveCard key={index} className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${interest.color} bg-opacity-10`}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        {interest.label}
                      </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {interest.description}
                    </p>

                    <motion.div
                      className="absolute -z-10 top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        background: `linear-gradient(to bottom right, ${
                          interest.color.split(" ")[1]
                        }, ${interest.color.split(" ")[3]})`,
                      }}
                    />
                  </motion.div>
                </InteractiveCard>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center text-gray-400"
          >
            <p className="max-w-2xl mx-auto">
              I&apos;m very happy if anyone is interested in collaborating with
              me in learning Web3 and feel free to connect with me on my email,
              if you&apos;re into web3 and interested in hackathons & crypto....
            </p>
          </motion.div>

          <div id="contact" className="flex flex-col rounded-lg my-6 items-center py-6 relative justify-center sm:gap-2 bg-[rgba(0,0,0,0.5)]">
            <div className="flex rounded-lg sm:my-3 items-center py-2 relative justify-center gap-6">
              <motion.a
                href="https://github.com/Pavan-personal"
                whileHover={{ scale: 1.1 }}
                className="p-4 z-10 bg-white rounded-full transition-colors opacity-85"
              >
                <Image
                  src={github}
                  height={30}
                  style={{
                    opacity: 0.8,
                  }}
                  alt="Picture of the author"
                />
              </motion.a>
              <motion.a
                href="mailto:kumarpavan39877@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-4 z-10 bg-white rounded-full transition-colors opacity-85"
              >
                <Image
                  src={mail}
                  height={30}
                  style={{
                    opacity: 0.8,
                  }}
                  alt="Picture of the author"
                />
              </motion.a>
              <motion.a
                href="https://x.com/Mithabhashi__"
                whileHover={{ scale: 1.1 }}
                className="p-4 z-10 bg-white rounded-full transition-colors opacity-85"
              >
                <Image
                  src={X}
                  height={30}
                  style={{
                    opacity: 0.8,
                  }}
                  alt="Picture of the author"
                />
              </motion.a>
            </div>

            <h2 className="text-[4.5rem] sm:text-[7rem] opacity-60 static sedgwick-ave-display-regular font-bold text-center">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                My Socials
              </span>
            </h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
