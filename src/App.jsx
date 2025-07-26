import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { CombinedStarryBackground } from './components/UI/CombinedStarryBackground'
import SplashCursor from './components/UI/SplashCursor'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'

export const App = () => {
  return (
    <>
      {/* Fixed background */}
      <CombinedStarryBackground
        starDensity={0.0003}
        minDelay={1500}
        maxDelay={4000}
        starColor="#33c2cc"
        trailColor="#57db96"
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SplashCursor />
        </div>
      </CombinedStarryBackground>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />

        {/* Add matching ids here */}
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  )
}
