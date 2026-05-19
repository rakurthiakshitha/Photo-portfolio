"use client"
import { useState } from "react"

export default function Home() {
  const [active, setActive] = useState('Home')

  const skills = ['React', 'Next.js', 'JavaScript', 'Python', 'AWS', 'HTML', 'CSS', 'Tailwind', 'Git', 'Node.js']
  const projects = [
    { name: 'Photo Portfolio', desc: 'Next.js portfolio site deployed on Vercel with Tailwind CSS', link: 'https://github.com/rakurthiakshitha' },
    { name: 'AWS Cloud Project', desc: 'Exploring EC2, S3, and Lambda for cloud deployment', link: '#' },
    { name: 'Web Development', desc: 'Building responsive web apps with modern JavaScript frameworks', link: '#' }
  ]

  return (
    <div className="bg-[#1f242d] text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-[#1f242d] px-8 lg:px-24 py-5 flex justify-between items-center border-b border-gray-700">
        <a href="#" className="text-2xl font-bold">Akshitha.</a>
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className={`${active === item ? 'text-[#0ef]' : 'text-white'} hover:text-[#0ef] transition`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-8 lg:px-24 pt-20">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold">Hello, It is Me</h3>
          <h1 className="text-5xl lg:text-6xl font-bold mt-2">
            Akshitha Rakurthi
          </h1>
          <h3 className="text-2xl lg:text-3xl font-bold mt-2">
            And I am an <span className="text-[#0ef]">AIML Student</span>
          </h3>
          <p className="mt-6 text-lg text-gray-300">
            I am passionate about building web apps with Next.js and React. 
            Currently exploring AWS cloud services and looking for SDE internship opportunities.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/rakurthiakshitha" target="_blank" className="bg-[#0ef] text-[#1f242d] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#0ef] transition">GitHub</a>
            <a href="https://linkedin.com/in/akshitha-rakurthi" target="_blank" className="border-2 border-[#0ef] px-6 py-3 rounded-full font-semibold hover:bg-[#0ef] hover:text-[#1f242d] transition">LinkedIn</a>
            <a href="mailto:rakurthiakshitha@gmail.com" className="border-2 border-[#0ef] px-6 py-3 rounded-full font-semibold hover:bg-[#0ef] hover:text-[#1f242d] transition">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 lg:px-24 py-20 bg-[#323946]">
        <h2 className="text-4xl font-bold text-center mb-12">About <span className="text-[#0ef]">Me</span></h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an Artificial Intelligence and Machine Learning student with a strong foundation in web development. 
            I specialize in creating responsive, user-friendly applications using React and Next.js. 
            My current focus is on cloud computing with AWS and preparing for Software Development Engineer roles.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#0ef] mb-3">Education</h3>
              <p className="text-gray-300">B.Tech in Artificial Intelligence & Machine Learning</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0ef] mb-3">Focus Areas</h3>
              <p className="text-gray-300">Web Development, Cloud Computing, Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 lg:px-24 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#0ef]">Skills</span></h2>
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill} className="bg-[#323946] px-6 py-3 rounded-lg border border-[#0ef] hover:bg-[#0ef] hover:text-[#1f242d] transition cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 lg:px-24 py-20 bg-[#323946]">
        <h2 className="text-4xl font-bold text-center mb-12">Latest <span className="text-[#0ef]">Projects</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1f242d] p-6 rounded-xl border border-gray-700 hover:border-[#0ef] transition">
              <h3 className="text-xl font-bold text-[#0ef] mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a href={project.link} target="_blank" className="text-white hover:text-[#0ef] font-semibold">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 lg:px-24 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Contact <span className="text-[#0ef]">Me</span></h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            I am currently looking for SDE internship opportunities. Feel free to reach out if you want to collaborate.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a href="mailto:rakurthiakshitha@gmail.com" className="text-xl hover:text-[#0ef] transition">
              rakurthiakshitha@gmail.com
            </a>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/rakurthiakshitha" target="_blank" className="hover:text-[#0ef] transition">GitHub</a>
              <a href="https://linkedin.com/in/akshitha-rakurthi" target="_blank" className="hover:text-[#0ef] transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        <p>© 2026 Akshitha Rakurthi. All rights reserved.</p>
      </footer>
    </div>
  )
}