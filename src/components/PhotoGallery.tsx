'use client'

import { Camera } from 'lucide-react'
import Image from 'next/image'

export default function PhotoGallery() {
  const photos = [
    {
      src: '/images/cave-photo.jpg',
      alt: '1'
    },
    {
      src: '/images/glasses-selfie.jpg',
      alt: '2'
    },
    {
      src: '/images/evening-portrait.jpg',
      alt: '3'
    }
  ]

  return (
    <div className="mb-12">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Camera className="text-pink-500" />
        <h2 className="text-2xl font-semibold text-pink-600">Our Memories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="relative group h-64">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}