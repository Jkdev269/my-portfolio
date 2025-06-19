"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  CodeSquare,
  Braces,
  LayoutDashboard,
  GitBranch,
  Zap,
  Cloud,
  ShieldCheck,
} from "lucide-react";
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "MongoDB", icon: Database, color: "from-green-400 to-green-600" },
    { name: "Express.js", icon: Server, color: "from-gray-400 to-gray-600" },
    { name: "React.js", icon: CodeSquare, color: "from-blue-400 to-blue-600" },
    { name: "Node.js", icon: Server, color: "from-green-500 to-green-700" },
    {
      name: "JavaScript",
      icon: Braces,
      color: "from-yellow-400 to-yellow-600",
    },
    { name: "TypeScript", icon: Braces, color: "from-blue-500 to-blue-700" },
    { name: "Next.js", icon: LayoutDashboard, color: "from-black to-gray-800" },
    { name: "Tailwind CSS", icon: Zap, color: "from-teal-400 to-teal-600" },
    {
      name: "Shadcn UI",
      icon: LayoutDashboard,
      color: "from-purple-400 to-purple-600",
    },
    { name: "Socket.io", icon: Cloud, color: "from-blue-500 to-blue-700" },
    { name: "Firebase", icon: Zap, color: "from-yellow-400 to-yellow-600" },
    { name: "Redux", icon: Braces, color: "from-purple-500 to-purple-700" },
    { name: "Agora", icon: Smartphone, color: "from-pink-400 to-pink-600" },
    { name: "Zod", icon: ShieldCheck, color: "from-gray-500 to-gray-700" },
    {
      name: "NextAuth.js",
      icon: ShieldCheck,
      color: "from-blue-400 to-blue-600",
    },
    { name: "Git", icon: GitBranch, color: "from-red-400 to-red-600" },
    { name: "GitHub", icon: Github, color: "from-gray-800 to-gray-900" },
  ];
  const projects = [
    {
      title: "Website Generator",
      description:
        "Generate Your Website in Minutes Describe what you want, and our AI-powered tool will create a custom website for you. No coding required!",
      tech: ["nextjs", "TailwindCSS"],
      image: "/assets/project1.png",
      github: "https://github.com/Jkdev269/website-generator.git",
      live: "https://website-generator-wine.vercel.app/",
    },
    {
      title: "Jtext Chat",
      description:
        "Developed a real-time communication app with instant messaging, typing indicators, read receipts, voice/videocalls, and media sharing",
      tech: [
        "Reactjs",
        "Nodejs",
        "Express",
        "Shadcn",
        "MongoDB",
        "Socket.io",
        "Agora",
        "Firebase",
      ],
      image:
        "https://jk-portfolio-lilac.vercel.app/assets/project_4-7nN6qneC.png",
      github: "https://github.com/Jkdev269/jtextfrontend.git",
      live: "https://jtextfrontend.vercel.app/",
    },
    {
      title: "Feedback messaging ",
      description:
        "Created an anonymous messaging platform with secure user authentication and message management features.",
      tech: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "NextAuth",
        "Shadcn",
        "Zod",
        "TailwindCSS",
      ],
      image:
        "https://jk-portfolio-lilac.vercel.app/assets/project_3-5GSoaKE1.png",
      github: "https://github.com/Jkdev269/FeedbackInbox.git",
      live: "https://feedback-inbox.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with user authentication and admin dashboard.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Redux",
      ],
      image:
        "https://jk-portfolio-lilac.vercel.app/assets/project_2-CbFhhHdO.svg",
      github: "https://github.com/Jkdev269/NexaMart_ecommerce.git",
      live: "https://nexamart-jk.vercel.app/",
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                      activeSection === item
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.home
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Hi, I'm Jaharuddin
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
              A Passionate MERN Stack Developer 🚀
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
              I craft full-stack web applications using MongoDB, Express.js,
              React.js, and Node.js. I'm a BCA graduate with a strong passion
              for building impactful digital solutions.
            </p>

            <p className="text-md text-gray-400 mb-10 max-w-2xl mx-auto">
              Some of my projects include:{" "}
              <span className="text-white font-medium">Website Generator</span>,{" "}
              <span className="text-white font-medium">
                JText Real-Time Chat
              </span>
              ,{" "}
              <span className="text-white font-medium">
                E-commerce Platform
              </span>
              , and{" "}
              <span className="text-white font-medium">Feedback System</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side: Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi, I'm{" "}
                  <span className="text-white font-semibold">Jaharuddin</span>,
                  a MERN Stack Developer with a strong foundation in web
                  technologies and a degree in BCA. I specialize in building
                  robust and scalable web applications using MongoDB,
                  Express.js, React, and Node.js.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I've built several projects that reflect my skills and
                  creativity, including a{" "}
                  <span className="text-white font-medium">
                    Website Generator
                  </span>
                  ,{" "}
                  <span className="text-white font-medium">
                    JText Real-Time Chat App
                  </span>
                  ,{" "}
                  <span className="text-white font-medium">
                    E-commerce Platform
                  </span>
                  , and a{" "}
                  <span className="text-white font-medium">
                    Feedback System
                  </span>
                  .
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm always eager to learn and take on new challenges. Whether
                  it’s frontend interactivity or backend logic, I enjoy bringing
                  ideas to life with clean, maintainable code.
                </p>

                {/* Social Links */}
                <div className="flex space-x-6 pt-2">
                  <a
                    href="https://github.com/Jkdev269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaharuddin-990444319/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:jaharuddin269@gmail.com"
                    className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* Right Side: Visual Icon */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                    <Code
                      size={120}
                      className="text-purple-400 animate-pulse"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.skills
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`group p-4 bg-gradient-to-r ${skill.color} rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon
                      size={36}
                      className="mx-auto mb-3 group-hover:animate-bounce"
                    />
                    <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-gray-100">
                      {skill.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Let's connect and create something amazing together!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:jaharuddin269@gmail.com"
                className="group p-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl text-center hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:scale-105"
              >
                <Mail
                  size={48}
                  className="mx-auto mb-4 text-purple-400 group-hover:animate-bounce"
                />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">jaharuddin269@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/jaharuddin-990444319/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl text-center hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin
                  size={48}
                  className="mx-auto mb-4 text-blue-400 group-hover:animate-bounce"
                />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400">Connect with me</p>
              </a>
              <a
                href="https://github.com/Jkdev269"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-gradient-to-r from-gray-600/20 to-gray-800/20 border border-gray-500/30 rounded-2xl text-center hover:from-gray-600/30 hover:to-gray-800/30 transition-all duration-300 transform hover:scale-105"
              >
                <Github
                  size={48}
                  className="mx-auto mb-4 text-gray-400 group-hover:animate-bounce"
                />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400">Check out my repos</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">copyright©Jaharuddin 2025.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
