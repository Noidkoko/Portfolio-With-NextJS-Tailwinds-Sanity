import type { NextPage } from 'next'
import Head from 'next/head'

// Components 
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home: NextPage = () => {
  return (
    <div className="bg-[#222] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Noidkoko portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experiences */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  )
}

export default Home
