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
      <h1 className="text-4xl font-bold text-center mb-8">My Photo Gallery Akshitha</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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