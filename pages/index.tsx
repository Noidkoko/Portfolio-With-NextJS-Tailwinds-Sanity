import type { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'

// Components 
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchExperiences } from '../utils/fetchExperiences'
import Image from 'next/image'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[]; 
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className=" scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[gold]/80 overflow-y-scroll overflow-x-hidden bg-[#222] text-white h-screen snap-y snap-mandatory z-0">
      <Head>
        <title>{pageInfo.name}`s portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className='flex items-center justify-center'>
            <Image
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src=""
            alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    // Next js will re-generate the page:
    // - If a request comes on
    // - Every 30seconds
    revalidate: 30,
  }
}