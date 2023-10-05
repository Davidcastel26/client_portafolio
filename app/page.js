import Image from 'next/image'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ProjectSection } from './components/ProjectSection'

export default function Home() {
  return (
    <main 
      className='flex min-h-screen flex-col bg-[#040404]'
    >
      <Navbar />
      <div className="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <footer className='text-center p-3'>
        <h3>Still building ...</h3>
      </footer>
    </main>
  )
}
