import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import Technologies from './components/Technologies.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectSection />
        <About />
        <Technologies />
      </main>
    </div>
  )
}

export default App
