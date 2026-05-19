'use client'

const photos = [
  { id: 1, url: 'https://picsum.photos/id/1018/400/300', title: 'Mountain' },
  { id: 2, url: 'https://picsum.photos/id/1025/400/300', title: 'Dog' },
  { id: 3, url: 'https://picsum.photos/id/1039/400/300', title: 'Forest' },
  { id: 4, url: 'https://picsum.photos/id/1040/400/300', title: 'Castle' },
  { id: 5, url: 'https://picsum.photos/id/1050/400/300', title: 'Beach' },
  { id: 6, url: 'https://picsum.photos/id/1062/400/300', title: 'City' },
]

export default function Home() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      
      {/* Hero Section with Your Details */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Akshitha Rakurthi</h1>
        <p className="text-xl text-gray-700 mb-6">
          CS Student | Web Developer | AWS Enthusiast
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm a computer science student passionate about building web apps with Next.js and React. 
          Currently exploring AWS cloud services and looking for SDE internship opportunities.
        </p>
        
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/rakurthiakshitha" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/Rakurthiakshitha" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="mailto:rakurthiakshitha@gmail.com" className="text-blue-600 hover:underline">Email</a>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover" />
            <p className="p-4 text-center font-semibold">{photo.title}</p>
          </div>
        ))}
      </div>
      
    </main>
  )
}
    </main>
  )
}