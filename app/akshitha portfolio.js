"use client"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [active, setActive] = useState('Home')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const services = [
    { 
      icon: '</>', 
      title: 'Programming', 
      desc: 'Writing efficient code in Python and C. Focused on problem-solving, data structures, and building logic for real-world applications.' 
    },
    { 
      icon: '☁️', 
      title: 'Cloud Computing', 
      desc: 'Hands-on with AWS services like EC2, S3, and IAM. Learning to deploy and manage scalable, secure cloud infrastructure.' 
    },
    { 
      icon: '{ }', 
      title: 'Networking & OS', 
      desc: 'Strong foundation in networking concepts and operating systems. Experienced with Red Hat Linux and Windows environments.' 
    }
  ]

  const skills = [
    { name: 'Python', level: 85 },
    { name: 'C', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Networking', level: 80 },
    { name: 'Linux', level: 70 },
    { name: 'Cloud Fundamentals', level: 75 },
    { name: 'Team Leadership', level: 90 },
    { name: 'Problem Solving', level: 85 }
  ]

  const projects = [
    { name: 'Automated Car Catalog System', desc: 'Enhanced showroom management system to automate car cataloging. Built for streamlined inventory and customer experience.', link: 'https://github.com/SOWMYARAKURTHI/Automated-Car-Catalog-System-for-Enhanced-Showroom-Management-Public.git' },
    { name: 'Cloud Deployment Project', desc: 'Deployed web application on AWS EC2 with S3 storage and IAM role-based access control' },
    { name: 'Linux Server Setup', desc: 'Configured Red Hat Linux server for networking tasks and user management with shell scripting' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:sowmyarakurthi26@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
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

      {/* Home Section with Sowmya's Photo */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-24 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold">Hello, It is Me</h3>
            <h1 className="text-5xl lg:text-6xl font-bold mt-2">Rakurthi Sowmya</h1>
            <h3 className="text-2xl lg:text-3xl font-bold mt-2">
              And I am an <span className="text-[#0ef]">ECE Student</span>
            </h3>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              I am passionate about cloud computing and programming with Python & C. Currently exploring AWS services 
              and looking for internship opportunities to apply my skills in networking, cloud, and software development.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/SOWMYARAKURTHI/Automated-Car-Catalog-System-for-Enhanced-Showroom-Management-Public.git" target="_blank" className="bg-[#0ef] text-[#0c1022] px-6 py-3 rounded-md font-semibold hover:shadow-lg hover:shadow-[#0ef] transition">GitHub</a>
              <a href="https://www.linkedin.com/in/sowmya-rakurthi-b58765316" target="_blank" className="border-2 border-[#0ef] px-6 py-3 rounded-md font-semibold hover:bg-[#0ef] hover:text-[#0c1022] transition">LinkedIn</a>
              <a href="https://drive.google.com/file/d/1ocQvToGKn7XYBl-aseq7GUnwSDGbTRxe/view" target="_blank" className="border-2 border-[#0ef] px-6 py-3 rounded-md font-semibold hover:bg-[#0ef] hover:text-[#0c1022] transition">Download CV</a>
            </div>
          </div>
          
          {/* Photo Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#0ef] shadow-lg shadow-[#0ef]/50">
              <Image 
                src="/sowmya.jpg" 
                alt="Rakurthi Sowmya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-[#0ef]">Me</span></h2>
          <h3 className="text-2xl font-bold mb-6">ECE Student & Cloud Enthusiast</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an Electronics and Communication Engineering student at <span className="text-[#0ef] font-semibold">Aditya College of Engineering and Technology</span> with a strong foundation in programming and cloud technologies. 
            I specialize in Python, C, and AWS services like EC2, S3, and IAM. My current focus is on cloud computing, 
            networking, and preparing for roles in tech. I believe in sincere work, team leadership, and building projects 
            that solve real problems. When I am not coding, I am learning new technologies and improving my technical skills.
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
              <a href={project.link || "https://github.com/SOWMYARAKURTHI"} target="_blank" className="text-white hover:text-[#0ef] font-semibold">View Code →</a>
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
              I am currently looking for internship opportunities in cloud computing and software development. 
              Feel free to reach out if you want to collaborate on a project or discuss tech.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-[#0ef] text-xl">✉️</div>
                <a href="mailto:sowmyarakurthi26@gmail.com" className="hover:text-[#0ef]">sowmyarakurthi26@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#0ef] text-xl">💼</div>
                <a href="https://www.linkedin.com/in/sowmya-rakurthi-b58765316" target="_blank" className="hover:text-[#0ef]">linkedin.com/in/sowmya-rakurthi-b58765316</a>
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
        <p>Developed with love by Rakurthi Sowmya © 2026</p>
      </footer>
    </div>
  )
}