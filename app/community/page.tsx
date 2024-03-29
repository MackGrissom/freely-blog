import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
        <h1 className="mb-8 animate-pulse text-5xl font-bold text-white">Coming Soon</h1>
        <p className="mb-8 text-lg text-white">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </>
  )
}
