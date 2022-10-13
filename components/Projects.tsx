import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>
  
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Projetcs */}
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYpE5YNAZLL4SLe365vGdgz-flhxiL1ebg1ESEb72Rw&s'
            alt='projects' />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'><span className='underline decoration[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span> UPS Clone</h4>
            
            <p className='text-lg text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam magni facilis cumque natus minus inventore, porro exercitationem tempore accusamus!</p>
            
            </div>

          </div>
          ))}
        </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
)
}

export default Projects