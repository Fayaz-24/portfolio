
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Monitor, Users, Star, GitBranch, Zap, Sparkles, Sun, Moon, Instagram } from 'lucide-react';


const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500', neon: 'shadow-cyan-500/50' },
    { name: 'JavaScript (ES6+)', level: 88, color: 'from-yellow-400 to-orange-500', neon: 'shadow-yellow-500/50' },
    { name: 'TypeScript', level: 82, color: 'from-blue-400 to-indigo-600', neon: 'shadow-blue-500/50' },
    { name: 'HTML5 & CSS3', level: 95, color: 'from-orange-400 to-red-500', neon: 'shadow-orange-500/50' },
    { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-cyan-500', neon: 'shadow-teal-500/50' },
    { name: 'Next.js', level: 78, color: 'from-slate-400 to-gray-600', neon: 'shadow-slate-500/50' },
    { name: 'Redux/Zustand', level: 75, color: 'from-purple-400 to-pink-500', neon: 'shadow-purple-500/50' },
    { name: 'Node.js', level: 70, color: 'from-green-400 to-emerald-600', neon: 'shadow-green-500/50' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce React Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce management built with React, featuring real-time analytics, inventory management, and order tracking.',
      technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Context API'],
      role: 'Full Frontend Development',
      github: 'https://github.com/yourusername/ecommerce-dashboard',
      demo: 'https://ecommerce-dashboard-demo.netlify.app',
      image: 'from-cyan-500 via-blue-500 to-purple-600',
      stats: { stars: 47, forks: 12, views: 1200 }
    },
    {
      id: 2,
      title: 'Social Media React App',
      description: 'A modern social media platform with real-time messaging, post interactions, and user profiles. Features responsive design and optimized performance.',
      technologies: ['React', 'Socket.io', 'Redux Toolkit', 'Material-UI', 'Firebase'],
      role: 'Lead Frontend Developer',
      github: 'https://github.com/yourusername/social-media-app',
      demo: 'https://social-react-app.vercel.app',
      image: 'from-pink-500 via-red-500 to-yellow-500',
      stats: { stars: 89, forks: 23, views: 2100 }
    },
    {
      id: 3,
      title: 'Weather Forecast PWA',
      description: 'A Progressive Web App providing detailed weather forecasts with geolocation, offline functionality, and beautiful data visualizations.',
      technologies: ['React', 'PWA', 'Chart.js', 'Geolocation API', 'Service Workers'],
      role: 'Solo Frontend Developer',
      github: 'https://github.com/yourusername/weather-pwa',
      demo: 'https://weather-forecast-pwa.netlify.app',
      image: 'from-blue-400 via-cyan-500 to-teal-500',
      stats: { stars: 34, forks: 8, views: 890 }
    }
  ];

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`group fixed top-6 right-6 z-50 p-4 rounded-full transition-all duration-500 transform hover:scale-110 ${
        isDarkMode 
          ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 text-gray-300 hover:text-white shadow-lg hover:shadow-cyan-500/25' 
          : 'bg-white/50 backdrop-blur-sm border border-gray-300/50 hover:border-blue-500/50 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-blue-500/25'
      }`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          size={24} 
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          } group-hover:rotate-12`} 
        />
        <Moon 
          size={24} 
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          } group-hover:-rotate-12`} 
        />
      </div>
      <div className={`absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDarkMode ? 'bg-cyan-500/25' : 'bg-blue-500/25'
      }`}></div>
    </button>
  );

  const SkillBar = ({ skill, index }) => (
    <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex justify-between mb-3">
        <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold text-lg flex items-center gap-2`}>
          <Sparkles size={16} className="text-cyan-400 animate-pulse" />
          {skill.name}
        </span>
        <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
      </div>
      <div className={`relative w-full ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded-full h-4 overflow-hidden border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden shadow-lg ${skill.neon}`}
          style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/40 to-transparent animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <div className={`group relative ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10 animate-spin-slow"></div>
      
      <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.image}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/40 group-hover:bg-black/20' : 'bg-white/40 group-hover:bg-white/20'} transition-all duration-500`} />
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-white/60 to-transparent'}`} />
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float-particles"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <div className={`${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-yellow-500/50 hover:border-yellow-400 transition-colors`}>
            <Star size={14} className="text-yellow-400 animate-pulse" />
            <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.stats.stars}</span>
          </div>
          <div className={`${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-cyan-500/50 hover:border-cyan-400 transition-colors`}>
            <GitBranch size={14} className="text-cyan-400 animate-bounce" />
            <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.stats.forks}</span>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 group-hover:opacity-100 animate-pulse group-hover:animate-bounce transition-all duration-500 flex items-center justify-center">
          <Zap className="text-white" size={20} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 relative">
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500 flex items-center gap-2`}>
          {project.title}
          <Sparkles size={20} className="text-cyan-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
        </h3>
        
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed group-hover:${isDarkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>{project.description}</p>
        
        <div className="mb-6">
          <p className="text-sm font-semibold text-cyan-400 mb-3">
            Role: <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-normal`}>{project.role}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.github}
            className={`group/btn relative flex items-center gap-2 ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-gray-200/50 hover:bg-gray-300/50'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-4 py-3 rounded-xl transition-all duration-300 flex-1 justify-center border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'} hover:shadow-lg hover:shadow-gray-500/25 overflow-hidden backdrop-blur-sm`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            <Github size={16} className="relative z-10 group-hover/btn:rotate-12 transition-transform" />
            <span className="relative z-10 font-semibold">Code</span>
          </a>
          <a
            href={project.demo}
            className="group/btn relative flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-3 rounded-xl transition-all duration-300 flex-1 justify-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            <ExternalLink size={16} className="relative z-10 group-hover/btn:rotate-45 transition-transform" />
            <span className="relative z-10 font-semibold">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'} relative transition-all duration-500`}>
      <ThemeToggle />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]'} bg-[size:50px_50px] animate-pulse`}></div>
        
        <div 
          className="absolute w-96 h-96 rounded-full mix-blend-screen filter blur-3xl transition-all duration-300 ease-out animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: isDarkMode 
              ? 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(147,51,234,0.2) 50%, rgba(236,72,153,0.1) 100%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.15) 50%, rgba(236,72,153,0.1) 100%)'
          }}
        />
        
        <div className={`absolute top-20 left-20 w-72 h-72 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10' : 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5'} rounded-full mix-blend-screen filter blur-2xl animate-float`}></div>
        <div className={`absolute top-40 right-20 w-96 h-96 ${isDarkMode ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10' : 'bg-gradient-to-r from-purple-500/5 to-pink-500/5'} rounded-full mix-blend-screen filter blur-2xl animate-float-delayed`}></div>
        <div className={`absolute bottom-20 left-1/3 w-80 h-80 ${isDarkMode ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10' : 'bg-gradient-to-r from-emerald-500/5 to-teal-500/5'} rounded-full mix-blend-screen filter blur-2xl animate-float-slow`}></div>
        <div className={`absolute top-1/2 right-1/3 w-64 h-64 ${isDarkMode ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10' : 'bg-gradient-to-r from-yellow-500/5 to-orange-500/5'} rounded-full mix-blend-screen filter blur-2xl animate-float-reverse`}></div>
        
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent' : 'bg-gradient-to-b from-transparent via-blue-500/3 to-transparent'} animate-scan`}></div>
        
        {isDarkMode && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center mb-12">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse relative">
              <span className="inline-block animate-bounce">&lt;</span>
              WELCOME TO MY PORTFOLIO 
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>/</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>&gt;</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
            </div>
          </nav>

          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-cyan-500/50 animate-pulse group-hover:animate-spin transition-all duration-1000 relative z-10">
                FAYAZ
              </div>
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-2xl opacity-25 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              
              
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-6 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-6 left-1/2 w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} relative`}>
                React Frontend Developer
                <div className={`absolute inset-0 ${isDarkMode ? 'text-white' : 'text-gray-900'} blur-sm opacity-50 -z-10`}></div>
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x relative inline-block">
                <span className="relative z-10">Developer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10 animate-gradient-x"></div>
              </span>
            </h1>
            
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
  As a Computer Science student, I’m dedicated to building 
  <span className="text-cyan-400 font-semibold animate-pulse"> innovative digital solutions </span>
  using intuitive design principles and 
  <span className="text-purple-400 font-semibold animate-pulse"> performance-optimized interfaces</span>.
</p>

            
            <div className={`flex justify-center gap-4 mt-10 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="https://github.com/Fayaz-24"
                className={`group relative flex items-center gap-3 ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-6 py-4 rounded-full transition-all duration-500 hover:scale-110 border ${isDarkMode ? 'border-gray-600/50' : 'border-gray-300/50'} shadow-lg shadow-gray-800/50 hover:shadow-gray-600/50 overflow-hidden backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Github size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 font-bold text-lg">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/fayaz024"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-4 rounded-full transition-all duration-500 hover:scale-110 shadow-lg shadow-blue-600/50 hover:shadow-blue-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Linkedin size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 font-bold text-lg">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/fayaz_crush._"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-4 rounded-full transition-all duration-500 hover:scale-110 shadow-lg shadow-pink-600/50 hover:shadow-pink-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Instagram size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 font-bold text-lg">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                About Me
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-16 rounded-full animate-pulse"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float-particles"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Journey</h3>
                  </div>
                  <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed relative z-10`}>
                    <p>
                      Hi, I'm Fayaz A., a passionate and forward-thinking Computer Science Engineering student with a strong focus on <span className="text-cyan-400 font-semibold animate-pulse">Frontend web development</span> and 
                      <span className="text-purple-400 font-semibold animate-pulse"> visually stunning</span> web applications 
                      using React and modern JavaScript frameworks.
                    </p>
                    <p>
                      My focus lies in creating <span className="text-emerald-400 font-semibold animate-pulse">responsive</span>, 
                      <span className="text-yellow-400 font-semibold animate-pulse"> accessible</span>, and 
                      <span className="text-pink-400 font-semibold animate-pulse"> performant</span> user interfaces 
                      that provide exceptional user experiences.
                    </p>
                    <p>
                      Currently seeking <span className="text-cyan-400 font-semibold animate-pulse">internship opportunities</span> where I can contribute to meaningful 
                      projects while continuing to grow as a frontend developer.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-cyan-600/20 to-purple-600/20' : 'from-cyan-600/10 to-purple-600/10'} backdrop-blur-sm rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20`}>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center gap-2">
                    <Sparkles className="animate-spin" size={24} />
                    Quick Fact
                  </h3>
                  <div className="space-y-6">
                    {[
                      { icon: Code, title: '2+ Years', subtitle: 'React Experience', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
                      { icon: Monitor, title: '15+ Projects', subtitle: 'Completed', color: 'text-purple-400', bg: 'bg-purple-500/20' },
                      { icon: Smartphone, title: 'Mobile-First', subtitle: 'Design Approach', color: 'text-pink-400', bg: 'bg-pink-500/20' }
                    ].map((fact, index) => (
                      <div key={index} className="flex items-center gap-4 group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-white/5">
                        <div className={`p-3 rounded-full ${fact.bg} backdrop-blur-sm ${fact.color} group-hover:animate-pulse border border-current/30`}>
                          <fact.icon size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{fact.title}</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{fact.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`bg-gradient-to-br ${isDarkMode ? 'from-emerald-600/20 to-teal-600/20' : 'from-emerald-600/10 to-teal-600/10'} backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group`}>
                    <div className="text-3xl font-bold text-emerald-400 mb-2 animate-pulse group-hover:animate-bounce">100%</div>
                    <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Dedication</div>
                    <div className="absolute inset-0 bg-emerald-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`bg-gradient-to-br ${isDarkMode ? 'from-yellow-600/20 to-orange-600/20' : 'from-yellow-600/10 to-orange-600/10'} backdrop-blur-sm rounded-xl p-6 text-center border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden`}>
                    <div className="text-3xl font-bold text-yellow-400 mb-2 animate-pulse group-hover:animate-bounce">24/7</div>
                    <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Learning</div>
                    <div className="absolute inset-0 bg-yellow-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Technical Skills
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-16 rounded-full animate-pulse"></div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden`}>
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' : 'bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-pink-500/3'} animate-gradient-x`}></div>
                
                <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center gap-3 relative z-10`}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
                    <Code className="text-white" size={20} />
                  </div>
                  Frontend Technologies
                </h3>
                <div className="relative z-10">
                  {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-600/10 to-purple-600/10'} backdrop-blur-sm rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 relative z-10">Core Competencies</h3>
                  <div className="space-y-3 relative z-10">
                    {[
                      'Component-based Architecture',
                      'State Management (Redux, Context)',
                      'RESTful API Integration',
                      'Responsive Web Design',
                      'Performance Optimization',
                      'Version Control (Git)'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping"></div>
                        <span className="group-hover:text-blue-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-green-600/20 to-teal-600/20' : 'from-green-600/10 to-teal-600/10'} backdrop-blur-sm rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400 rounded-full animate-twinkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-green-300 relative z-10">Development Tools</h3>
                  <div className="space-y-3 relative z-10">
                    {[
                      'VS Code & Extensions',
                      'Webpack & Vite',
                      'Tailwind CSS',
                      'Chrome DevTools',
                      'Figma to Code',
                      'Testing Libraries'
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-ping"></div>
                        <span className="group-hover:text-green-300 transition-colors">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Featured Projects
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 animate-pulse"></div>
            <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-16 max-w-3xl mx-auto text-lg leading-relaxed`}>
              A showcase of my React-based web applications and academic projects, 
              demonstrating my <span className="text-cyan-400 font-semibold animate-pulse">frontend development skills</span> and 
              <span className="text-purple-400 font-semibold animate-pulse">creative problem-solving abilities</span>.
            </p>
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Let's Build Something Amazing
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10"></div>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 animate-pulse"></div>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-16 max-w-3xl mx-auto leading-relaxed`}>
              I'm actively seeking <span className="text-cyan-400 font-semibold animate-pulse">internship opportunities</span> and exciting 
              <span className="text-purple-400 font-semibold animate-pulse"> frontend development projects</span>. 
              Let's connect and discuss how we can work together!
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  href: "fayazsmily12.com",
                  icon: Mail,
                  title: "Email",
                  subtitle: "Any queries",
                  gradient: "from-red-500 to-pink-500",
                  shadow: "shadow-red-500/25"
                },
                {
                  href: "https://linkedin.com/in/fayaz024",
                  icon: Linkedin,
                  title: "LinkedIn",
                  subtitle: "Connect with me",
                  gradient: "from-blue-600 to-blue-800",
                  shadow: "shadow-blue-500/25"
                },
                {
                  href: "https://github.com/Fayaz-24",
                  icon: Github,
                  title: "GitHub",
                  subtitle: "View my code",
                  gradient: "from-gray-700 to-gray-900",
                  shadow: "shadow-gray-500/25"
                },
                {
                  href: "https://instagram.com/fayaz_crush_",
                  icon: Instagram,
                  title: "Instagram",
                  subtitle: "Follow my journey",
                  gradient: "from-pink-500 to-purple-600",
                  shadow: "shadow-pink-500/25"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`group relative ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:border-cyan-500/50 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} overflow-hidden`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 -z-10`}></div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particles"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '1.5s'
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${contact.shadow} group-hover:animate-pulse relative z-10`}>
                    <contact.icon className="text-white" size={32} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500 relative z-10`}>
                    {contact.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:${isDarkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300 text-lg relative z-10`}>
                    {contact.subtitle}
                  </p>
                </a>
              ))}
            </div>
            
            <div className={`mt-16 p-8 bg-gradient-to-r ${isDarkMode ? 'from-cyan-600/10 via-purple-600/10 to-pink-600/10' : 'from-cyan-600/5 via-purple-600/5 to-pink-600/5'} backdrop-blur-sm rounded-2xl border border-cyan-500/20 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 relative z-10`}>Ready to collaborate?</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 relative z-10`}>Let's turn your ideas into stunning reality!</p>
              <div className="flex justify-center gap-4 relative z-10">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(25px) rotate(90deg); }
        }
        
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) opacity(1); }
          50% { transform: translateY(-10px) opacity(0.5); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        
        .animate-float-particles {
          animation: float-particles 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
