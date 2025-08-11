import { useState, useEffect } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { CombinedStarryBackground } from './components/UI/CombinedStarryBackground';
import SplashCursor from './components/UI/SplashCursor';
import { About } from './sections/About';
// import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import PageLoader from './components/PageLoader';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [whiteSplash, setWhiteSplash] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [splashVisible, setSplashVisible] = useState(false);

  useEffect(() => {
    const splashTimer1 = setTimeout(() => {
      setWhiteSplash(true);
      setSplashVisible(true);
    }, 4000);

    const splashTimer2 = setTimeout(() => {
      setSplashVisible(false);
    }, 4500);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 4000);


    return () => {
      clearTimeout(splashTimer1);
      clearTimeout(splashTimer2);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      {!loading && (
        <>
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

          <Navbar />

          {/* Main content container */}
          <div
            className={`relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
              showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* Add matching ids here */}
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            {/* <section id="projects">
              <Projects />
            </section> */}

            <section id="testimonials">
              <Testimonials />
            </section>

            <section id="contact">
              <Contact />
            </section>

            <Footer />
          </div>
        </>
      )}
      {whiteSplash && (
        <div
          className={`fixed inset-0 bg-white z-50 transition-opacity duration-1000 ${
            splashVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        ></div>
      )}
    </>
  );
};