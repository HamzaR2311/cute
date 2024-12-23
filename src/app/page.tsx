import LoveTimer from '@/components/LoveTimer'
import PhotoGallery from '@/components/PhotoGallery'
import { Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600 mb-2 flex items-center justify-center gap-2">
            <Heart className="text-pink-500 animate-pulse" fill="currentColor" />
            Hada & Hamzi
            <Heart className="text-pink-500 animate-pulse" fill="currentColor" />
          </h1>
          <p className="text-pink-400 text-lg">I love you Hadiya!</p>
        </div>

        <LoveTimer startDate="2023-07-28" />
        <PhotoGallery />

        <div className="text-center space-y-2">
          <p className="text-pink-500 text-lg">💕 Forever & Always 💕</p>
          <p className="text-pink-400">Together since July 28, 2023</p>
        </div>
      </div>
    </div>
  )
}