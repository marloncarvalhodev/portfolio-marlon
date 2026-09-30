import ProjectBadge from './ProjectBadge.jsx'

function ProjectCard({ project, reversed }) {
  return (
    <article className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24 xl:gap-24">
      {project.hasScreenshotPlaceholder !== false ? (
        <figure className={`relative isolate flex aspect-[4/3] min-h-72 items-end overflow-hidden bg-black p-6 text-white sm:p-8 lg:min-h-[28rem] ${reversed ? 'lg:order-2' : ''}`}>
        {project.image ? (
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={project.image}
            alt={project.imageAlt}
          />
        ) : (
          <div className="flex w-full items-center justify-center" aria-hidden="true">
            <span className="max-w-full text-[clamp(5rem,15vw,9rem)] font-semibold leading-none tracking-[-0.09em] opacity-20">
              {project.number}
            </span>
          </div>
        )}
        <figcaption className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.16em] sm:bottom-8 sm:left-8">
          {project.image ? project.imageAlt : 'Screenshot em breve'}
        </figcaption>
        </figure>
      ) : null}

      <div className={`min-w-0 max-w-xl ${reversed ? 'lg:order-1' : ''}`}>
        {project.category || project.year || project.status || project.badge ? (
          <div className="mb-7 flex flex-wrap items-center gap-3">
            {project.category || project.year ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                {project.category}{project.year ? ` · ${project.year}` : ''}
              </p>
            ) : null}
            {project.status ? <ProjectBadge>{project.status}</ProjectBadge> : null}
            {project.badge ? <ProjectBadge>{project.badge}</ProjectBadge> : null}
          </div>
        ) : null}

        <h3 className="ds-h2">{project.title}</h3>
        <p className="ds-body-large mt-7">{project.description}</p>
        {project.note ? (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            {project.note}
          </p>
        ) : null}

        {project.technologies?.length ? (
          <div className="mt-9 border-t border-black pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Tecnologias</h4>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em]">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.liveUrl ? (
          <a className="ds-button-primary mt-10" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Ver projeto ao vivo ↗
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
