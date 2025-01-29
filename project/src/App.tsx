import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">JCP</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-blue-600">Juan Carlos Piris Sanchez</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Web Developer | Programmer | Creative Problem Solver
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                  alt="Juan Carlos Piris Sanchez"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-2/3 mt-6 lg:mt-0">
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  I'm a passionate web developer with a keen eye for creating beautiful and functional websites. 
                  With years of experience in both front-end and back-end development, I specialize in building 
                  responsive, user-friendly applications that deliver exceptional user experiences.
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Skills & Expertise
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Frontend */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
                <div className="space-y-3">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="ml-4 text-sm font-medium text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
                <div className="space-y-3">
                  {['Node.js', 'Python', 'PHP', 'MySQL', 'MongoDB', 'REST APIs'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="ml-4 text-sm font-medium text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Others */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Others</h3>
                <div className="space-y-3">
                  {['Git', 'VS Code', 'Docker', 'AWS', 'Figma', 'Agile'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="ml-4 text-sm font-medium text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              My Work
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
                  alt="E-Commerce Website"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">E-Commerce Website</h3>
                  <p className="mt-2 text-gray-600">
                    A full-featured e-commerce platform built with React, Node.js, and MongoDB.
                    Features include user authentication, product management, and payment integration.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
                  alt="Personal Blog Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">Personal Blog Platform</h3>
                  <p className="mt-2 text-gray-600">
                    A modern blogging platform built with Vue.js and Firebase.
                    Features markdown support, image uploads, and social sharing.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio Website"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">Portfolio Website</h3>
                  <p className="mt-2 text-gray-600">
                    A responsive portfolio website built with React and Tailwind CSS.
                    Features smooth animations and modern design elements.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Let's Connect!
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2" />
                    juan.carlos@example.com
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="mt-6">
                    <p className="text-gray-600">Based in Madrid, Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">© 2024 Juan Carlos Piris Sanchez. All rights reserved.</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;