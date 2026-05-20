"use client"
import { useState } from "react"

export default function Home() {
  const [active, setActive] = useState('Home')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const services = [
    { 
      icon: '</>', 
      title: 'Web Development', 
      desc: 'Building responsive websites using React, Next.js, and modern JavaScript. I create fast, SEO-friendly web apps that work on all devices.' 
    },
    { 
      icon: '{ }', 
      title: 'Frontend Design', 
      desc: 'Crafting clean UI with Tailwind CSS and HTML. I focus on user experience and converting designs into pixel-perfect code.' 
    },
    { 
      icon: '☁️', 
      title: 'AWS Cloud', 
      desc: 'Exploring cloud deployment with EC2, S3, and Lambda. Learning to build scalable applications on AWS infrastructure.' 
    }
  ]

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 60 }
  ]

  const projects = [
    { name: 'Portfolio Website', desc: 'This Next.js portfolio deployed on Vercel with Tailwind CSS and responsive design' },
    { name: 'Weather App', desc: 'React app that fetches real-time weather data using OpenWeather API' },
    { name: 'Task Manager', desc: 'Full-stack CRUD application with user authentication built with Node.js' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:rakurthiakshitha@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="bg-[#0c1022] text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-[#0c1022] px-6 lg:px-24 py-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Portfolio.</a>
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Services', 'Skills', 'Project', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className={`${active === item ? 'text-[#0ef] border-b-2 border-[#0ef]' : 'text-white'} hover:text-[#0ef] transition pb-1`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-24 pt-20">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold">Hello, It is Me</h3>
          <h1 className="text-5xl lg:text-6xl font-bold mt-2">Akshitha Rakurthi</h1>
          <h3 className="text-2xl lg:text-3xl font-bold mt-2">
            And I am an <span className="text-[#0ef]">AIML Student</span>
          </h3>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            I am passionate about building web apps with Next.js and React. Currently exploring AWS cloud services 
            and looking for SDE internship opportunities to apply my skills in real-world projects.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/rakurthiakshitha" target="_blank" className="bg-[#0ef] text-[#0c1022] px-6 py-3 rounded-md font-semibold hover:shadow-lg hover:shadow-[#0ef] transition">GitHub</a>
            <a href="https://linkedin.com/in/akshitha-rakurthi" target="_blank" className="border-2 border-[#0ef] px-6 py-3 rounded-md font-semibold hover:bg-[#0ef] hover:text-[#0c1022] transition">LinkedIn</a>
            <a href="https://drive.google.com/uc?export=download&id=1aa96vHbo2H-c3cdeQg3peG7imOIaIS5Z" className="border-2 border-[#0ef] px-6 py-3 rounded-md font-semibold hover:bg-[#0ef] hover:text-[#0c1022] transition">Download CV</a>
          </div>
        </div>
      </section>

      {/* About Section - College name added */}
      <section id="about" className="px-6 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-[#0ef]">Me</span></h2>
          <h3 className="text-2xl font-bold mb-6">AIML Student & Web Developer</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an Artificial Intelligence and Machine Learning student at <span className="text-[#0ef] font-semibold">Srinivasa Institute of Engineering and Technology</span> with a strong foundation in web development. 
            I specialize in creating responsive, user-friendly applications using React and Next.js. My current focus 
            is on cloud computing with AWS and preparing for Software Development Engineer roles. I believe in writing 
            clean code and building projects that solve real problems. When I am not coding, I am learning new 
            technologies and contributing to open source.
          </p>
          <a href="#contact" className="inline-block mt-8 bg-[#0ef] text-[#0c1022] px-8 py-3 rounded-md font-semibold hover:shadow-lg hover:shadow-[#0ef] transition">
            More About Me
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 lg:px-24 py-20 bg-[#0a0e1a]">
        <h2 className="text-4xl font-bold text-center mb-16">My <span className="text-[#0ef]">Services</span></h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-[#0c1022] p-8 rounded-xl border-2 border-[#0c1022] hover:border-[#0ef] transition shadow-lg hover:shadow-[#0ef]/20">
              <div className="text-4xl text-[#0ef] mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.desc}</p>
              <a href="#contact" className="bg-[#0ef] text-[#0c1022] px-6 py-2 rounded-md font-semibold inline-block hover:shadow-lg hover:shadow-[#0ef] transition">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 lg:px-24 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">My <span className="text-[#0ef]">Skills</span></h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-[#0ef]">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-[#0ef] h-2 rounded-full shadow-lg shadow-[#0ef]/50" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="px-6 lg:px-24 py-20 bg-[#0a0e1a]">
        <h2 className="text-4xl font-bold text-center mb-16">Latest <span className="text-[#0ef]">Projects</span></h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#0c1022] p-6 rounded-xl border-2 border-[#0c1022] hover:border-[#0ef] transition">
              <h3 className="text-xl font-bold text-[#0ef] mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a href="https://github.com/rakurthiakshitha" target="_blank" className="text-white hover:text-[#0ef] font-semibold">View Code →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 lg:px-24 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Contact <span className="text-[#0ef]">Me</span></h2>
        <p className="text-center text-xl mb-12 text-gray-300">Let us Work Together</p>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              I am currently looking for SDE internship opportunities. Feel free to reach out if you want to collaborate 
              on a project or just have a chat about tech.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-[#0ef] text-xl">✉️</div>
                <a href="mailto:rakurthiakshitha@gmail.com" className="hover:text-[#0ef]">rakurthiakshitha@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#0ef] text-xl">💼</div>
                <a href="https://linkedin.com/in/akshitha-rakurthi" target="_blank" className="hover:text-[#0ef]">linkedin.com/in/akshitha-rakurthi</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Enter Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full bg-[#323946] p-4 rounded-md border border-gray-700 focus:border-[#0ef] outline-none" 
            />
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full bg-[#323946] p-4 rounded-md border border-gray-700 focus:border-[#0ef] outline-none" 
            />
            <input 
              type="text" 
              placeholder="Enter Your Subject" 
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
              className="w-full bg-[#323946] p-4 rounded-md border border-gray-700 focus:border-[#0ef] outline-none" 
            />
            <textarea 
              placeholder="Enter Your Message" 
              rows="4" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full bg-[#323946] p-4 rounded-md border border-gray-700 focus:border-[#0ef] outline-none"
            ></textarea>
            <button type="submit" className="w-full bg-[#0ef] text-[#0c1022] py-4 rounded-md font-semibold hover:shadow-lg hover:shadow-[#0ef] transition">Submit</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-gray-800 text-gray-400 bg-[#0a0e1a]">
        <p>Developed with love by Akshitha Rakurthi © 2026</p>
      </footer>
    </div>
  )
}