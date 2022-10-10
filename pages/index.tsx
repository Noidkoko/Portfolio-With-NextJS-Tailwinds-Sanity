import type { NextPage } from 'next'
import Head from 'next/head'

// Components 
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'

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
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Projects */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Contact me */}

    </div>
  )
}

export default Home
