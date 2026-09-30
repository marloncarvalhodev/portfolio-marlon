function ProjectCard({ project, reversed }) {
  return (
    <article className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <figure className="relative flex aspect-[4/3] items-end overflow-hidden border border-black bg-black p-6 text-white sm:p-8">
        {project.image ? (
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={project.image}
            alt={project.imageAlt}
          />
        ) : null}
        <figcaption className="relative text-xs font-medium uppercase tracking-[0.16em]">
          {project.image ? project.imageAlt : 'Imagem do projeto em breve'}
        </figcaption>
      </figure>

      <div className="max-w-xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">
          {project.number} / Case
        </p>
        <h3 className="ds-h2">{project.title}</h3>
        <p className="ds-body-large mt-7">{project.description}</p>

        <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em]" aria-label={`Tecnologias utilizadas em ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <a className="ds-button-primary" href={project.projectUrl}>Ver projeto</a>
          <a className="ds-button-secondary" href={project.codeUrl}>Ver código</a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
