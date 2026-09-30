import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectSection from './components/ProjectSection.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectSection />
      </main>
    </div>
  )
}

export default App
