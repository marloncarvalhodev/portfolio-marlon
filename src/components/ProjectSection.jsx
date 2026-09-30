import ProjectCard from './ProjectCard.jsx'

// Add image paths to the published projects when the screenshots are ready.
const projects = [
  {
    number: '01',
    title: 'Empreende Conquista',
    category: 'Sistema Web',
    year: '2026',
    description: 'Sistema desenvolvido para apoiar a gestão de espaços públicos destinados a empreendedores em Vitória da Conquista.',
    technologies: ['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS', 'Git', 'Docker'],
    image: null,
    imageAlt: '',
    liveUrl: 'https://empreende.luanls.qd.je/home/',
  },
  {
    number: '02',
    title: 'Ponto Certo Conquista',
    category: 'Code4Cities',
    year: '2026',
    description: 'Plataforma web para digitalizar e organizar a regularização do comércio ambulante em Vitória da Conquista.',
    note: 'Desenvolvido durante o Code4Cities, promovido pelo Hub Conquista e pela Secretaria de Transformação Pública da Prefeitura de Vitória da Conquista.',
    technologies: [],
    image: null,
    imageAlt: '',
    liveUrl: 'https://apal.luanls.qd.je/',
  },
  {
    number: '03',
    title: 'IntegraConquista',
    category: 'Hackathon',
    year: '2026',
    status: 'MVP em desenvolvimento',
    badge: '2º lugar · Hackathon Smart Cities 2026',
    description: 'Plataforma criada para conectar estudantes, profissionais, empresas e oportunidades locais.',
    technologies: ['React', 'JavaScript', 'Git'],
    hasScreenshotPlaceholder: false,
  },
]

function ProjectSection() {
  return (
    <section id="projects" className="ds-section scroll-mt-20 pb-10 sm:pb-14 lg:pb-16" aria-labelledby="projects-title">
      <div className="ds-container">
        <header className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">Cases selecionados</p>
          <h2 id="projects-title" className="ds-h1">Projetos em destaque</h2>
          <p className="ds-body-large mt-8">
            Estes projetos representam experiências reais de desenvolvimento e resolução de problemas.
          </p>
        </header>

        <div className="mt-20 divide-y divide-black sm:mt-28">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} reversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
