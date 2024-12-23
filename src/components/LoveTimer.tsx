'use client'

import { useEffect, useState } from 'react'
import { Clock3 } from 'lucide-react'

interface TimeState {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function LoveTimer({ startDate }: { startDate: string }) {
  const [time, setTime] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const start = new Date(startDate)
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = now.getTime() - start.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [startDate])

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock3 className="text-pink-500" />
        <h2 className="text-2xl font-semibold text-pink-600">Time Together</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center">
        <TimeBox value={time.days} label="Days" />
        <TimeBox value={time.hours} label="Hours" />
        <TimeBox value={time.minutes} label="Minutes" />
        <TimeBox value={time.seconds} label="Seconds" />
      </div>
    </div>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-pink-100 rounded-lg p-4">
      <div className="text-3xl font-bold text-pink-600">{value}</div>
      <div className="text-pink-400">{label}</div>
    </div>
  )
}