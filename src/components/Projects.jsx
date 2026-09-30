import ProjectCard from './ProjectCard.jsx'

// Add an image path and real URLs to each case when the assets are available.
const projects = [
  {
    number: '01',
    title: 'Gestão financeira para pequenos negócios',
    description: 'Uma interface web pensada para tornar o acompanhamento de receitas, despesas e metas mais simples no dia a dia.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    image: null,
    imageAlt: '',
    projectUrl: '#contato',
    codeUrl: '#contato',
  },
  {
    number: '02',
    title: 'Experiência digital para uma instituição de ensino',
    description: 'Uma presença digital clara e acessível, com navegação direta e foco em comunicar informação relevante com precisão.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: null,
    imageAlt: '',
    projectUrl: '#contato',
    codeUrl: '#contato',
  },
]

function Projects() {
  return (
    <section id="projetos" className="ds-section scroll-mt-20" aria-labelledby="projects-title">
      <div className="ds-container">
        <div className="mb-16 max-w-2xl sm:mb-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">Projetos selecionados</p>
          <h2 id="projects-title" className="ds-h2">Interfaces que tornam produtos digitais mais claros.</h2>
        </div>

        <div className="space-y-24 sm:space-y-36 lg:space-y-44">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} reversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
